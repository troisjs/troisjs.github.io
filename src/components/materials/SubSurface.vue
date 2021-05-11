<template>
  <Renderer ref="renderer" resize :orbit-ctrl="{ enableDamping: true, dampingFactor: 0.05 }" pointer @click="randomColors">
    <Camera :position="{ z: 200 }" />
    <Scene>
      <PointLight ref="light" color="#FFC0C0" />

      <InstancedMesh ref="imesh" :count="NUM_INSTANCES">
        <DodecahedronGeometry :radius="5" />
        <SubSurfaceMaterial :props="{ vertexColors: true }" />
      </InstancedMesh>
    </Scene>
    <EffectComposer>
      <RenderPass />
      <UnrealBloomPass :strength="0.5" />
      <FXAAPass />
    </EffectComposer>
  </Renderer>
</template>

<script>
import { Color, InstancedBufferAttribute , MathUtils, Object3D, Vector3 } from 'three';

import {
  Camera,
  DodecahedronGeometry,
  EffectComposer,
  FXAAPass,
  InstancedMesh,
  PointLight,
  Renderer,
  RenderPass,
  SubSurfaceMaterial,
  Scene,
  UnrealBloomPass,
} from 'troisjs';

import chroma from 'chroma-js';

const { randFloat: rnd, randFloatSpread: rndFS } = MathUtils;

export default {
  components: {
    Camera,
    DodecahedronGeometry,
    EffectComposer,
    FXAAPass,
    InstancedMesh,
    PointLight,
    Renderer,
    RenderPass,
    SubSurfaceMaterial,
    Scene,
    UnrealBloomPass,
  },
  setup() {
    const NUM_INSTANCES = 2000;
    const instances = [];
    const cscale = chroma.scale(['#dd3e1b', '#0b509c']);
    const target = new Vector3();
    const dummyO = new Object3D();
    const dummyV = new Vector3();

    for (let i = 0; i < NUM_INSTANCES; i++) {
      instances.push({
        position: new Vector3(rndFS(200), rndFS(200), rndFS(200)),
        scale: rnd(0.2, 1),
        velocity: new Vector3(rndFS(2), rndFS(2), rndFS(2)),
        attraction: 0.0025 + rnd(0, 0.01),
        vlimit: 0.3 + rnd(0, 0.2),
      });
    }

    return {
      NUM_INSTANCES,
      instances,
      cscale,
      target,
      dummyO,
      dummyV,
    };
  },
  mounted() {
    this.renderer = this.$refs.renderer;
    this.imesh = this.$refs.imesh.mesh;
    this.light = this.$refs.light.light;
    this.init();
  },
  methods: {
    init() {
      // init instanced mesh matrix
      for (let i = 0; i < this.NUM_INSTANCES; i++) {
        const { position, scale } = this.instances[i];
        this.dummyO.position.copy(position);
        this.dummyO.scale.set(scale, scale, scale);
        this.dummyO.updateMatrix();
        this.imesh.setMatrixAt(i, this.dummyO.matrix);
      }
      this.updateColors();
      this.imesh.instanceMatrix.needsUpdate = true;

      // animate
      this.renderer.onBeforeRender(this.animate);
    },
    animate() {
      const { pointer } = this.renderer.three;
      this.target.copy(pointer.positionV3)
      this.light.position.copy(this.target);

      for (let i = 0; i < this.NUM_INSTANCES; i++) {
        const { position, scale, velocity, attraction, vlimit } = this.instances[i];

        this.dummyV.copy(this.target).sub(position).normalize().multiplyScalar(attraction);
        velocity.add(this.dummyV).clampScalar(-vlimit, vlimit);
        position.add(velocity);

        this.dummyO.position.copy(position);
        this.dummyO.scale.set(scale, scale, scale);
        this.dummyO.lookAt(this.dummyV.copy(position).add(velocity));
        this.dummyO.updateMatrix();
        this.imesh.setMatrixAt(i, this.dummyO.matrix);
      }
      this.imesh.instanceMatrix.needsUpdate = true;
    },
    randomColors() {
      const c1 = chroma.random(), c2 = chroma.random();
      this.cscale = chroma.scale([c1, c2]);
      this.updateColors();
    },
    updateColors() {
      const colors = [];
      for (let i = 0; i < this.NUM_INSTANCES; i++) {
        const color = new Color(this.cscale(rnd(0, 1)).hex());
        colors.push(color.r, color.g, color.b);
      }
      this.imesh.geometry.setAttribute('color', new InstancedBufferAttribute(new Float32Array(colors), 3));
    }
  },
};
</script>
