<template>
  <Renderer ref="renderer" pointer resize shadow @click="randomColors">
    <Camera :position="{ z: 2.5 }" />
    <Scene background="white">
      <AmbientLight color="#505050" />
      <SpotLight
        color="#ffffff"
        :intensity="0.5"
        :position="{ x: 0, y: 3, z: 2 }"
        :angle="Math.PI / 8"
        :penumbra="0.1"
        cast-shadow :shadow-map-size="{ width: 2048, height: 2048 }"
      />
      <SpotLight
        color="#ff0000"
        :intensity="0.5"
        :position="{ x: 0, y: -3, z: 2 }"
        :angle="Math.PI / 8"
        :penumbra="0.1"
        cast-shadow :shadow-map-size="{ width: 2048, height: 2048 }"
      />
      <CannonWorld :gravity="{ x: 0, y: 0, z: 0 }" @before-step="onBeforeStep">
        <InstancedMesh ref="imeshC" :count="COUNT" @created="initIMesh" cast-shadow receive-shadow>
          <SphereGeometry :radius="0.1" :width-segments="16" :height-segments="16" />
          <PhongMaterial />
        </InstancedMesh>
        <Sphere v-for="i in 3" :key="`sphere-${i}`" :radius="0.25" :position="{ x: i - 2}" :width-segments="16" :height-segments="16" receive-shadow>
          <PhongMaterial />
        </Sphere>
      </CannonWorld>
    </Scene>
    <EffectComposer>
      <RenderPass />
      <UnrealBloomPass :strength="0.5" :threshold="0.99" />
      <FXAAPass />
    </EffectComposer>
  </Renderer>
</template>

<script>
import { Color, MathUtils, Object3D, Vector3 } from 'three';
import {
  AmbientLight,
  Camera,
  EffectComposer,
  FXAAPass,
  InstancedMesh,
  PhongMaterial,
  Renderer,
  RenderPass,
  Scene,
  Sphere,
  SphereGeometry,
  SpotLight,
  UnrealBloomPass,
} from 'troisjs';
import CannonWorld from 'troisjs/src/components/physics/CannonWorld.js';
import niceColors from 'nice-color-palettes';

const { randFloat: rnd, randFloatSpread: rndFS } = MathUtils;

export default {
  components: { 
    AmbientLight,
    Camera,
    CannonWorld,
    EffectComposer,
    FXAAPass,
    InstancedMesh,
    PhongMaterial,
    Renderer,
    RenderPass,
    Scene,
    Sphere,
    SphereGeometry,
    SpotLight,
    UnrealBloomPass,
  },
  setup() {
    return {
      COUNT: 250,
    };
  },
  methods: {
    onBeforeStep() {
      const v = new Vector3();
      const target = this.$refs.renderer.three.pointer.positionV3;
      this.imesh.userData.bodies.forEach(body => {
        v.copy(target).sub(body.position).normalize().multiplyScalar(0.5);
        v.clampScalar(-0.5, 0.5);
        body.force.copy(v);
      });
    },
    initIMesh(imesh) {
      this.imesh = imesh;

      const dummy = new Object3D();
      const color = new Color();
      const scales = new Array(this.COUNT);
      const masses = new Array(this.COUNT);
      const colors = new Array(this.COUNT).fill().map(() => niceColors[20][Math.floor(rnd(0, 5))]);

      for (let i = 0; i < this.COUNT; i++) {
        dummy.position.set(rndFS(2), rndFS(2), rndFS(2));
        const scale = rnd(0.2, 1);
        scales[i] = scale;
        masses[i] = scale;
        dummy.scale.set(scale, scale, scale);
        dummy.updateMatrix();
        imesh.setMatrixAt(i, dummy.matrix);
        imesh.setColorAt(i, color.set(colors[i]));
      }
      imesh.instanceMatrix.needsUpdate = true;
      imesh.userData.scales = scales;
      imesh.userData.masses = masses;
      imesh.userData.damping = 0.1;
    },
    randomColors() {
      const ci = Math.floor(rnd(0, 100));
      const color = new Color();
      const colors = new Array(this.COUNT).fill().map(() => niceColors[ci][Math.floor(rnd(0, 5))]);
      for (let i = 0; i < this.COUNT; i++) {
        this.imesh.setColorAt(i, color.set(colors[i]));
      }
      this.imesh.instanceColor.needsUpdate = true;
    },
  },
};
</script>
