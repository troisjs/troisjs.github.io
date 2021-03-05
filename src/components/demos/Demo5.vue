<template>
  <Renderer ref="renderer" resize mouse-move @mousemove="updateTilt">
    <Camera :position="{ y: -20, z: 10 }" :look-at="{ x: 0, y: 0, z: 0 }" />
    <Scene background="#ffffff">
      <AmbientLight />
      <PointLight ref="light" :position="{ y: 0, z: 20 }" />
      <InstancedMesh ref="imesh" :count="NUM_INSTANCES" :position="{ y: 20, z: 10 }">
        <BoxGeometry :size="SIZE" />
        <PhongMaterial vertex-colors />
      </InstancedMesh>
    </Scene>
    <EffectComposer>
      <RenderPass />
      <FXAAPass />
      <TiltShiftPass :gradient-radius="tiltRadius" :start="{ x: 0, y: this.tiltY }" :end="{ x: 100, y: this.tiltY }" />
    </EffectComposer>
  </Renderer>
</template>

<script>
import { InstancedBufferAttribute, Object3D } from 'three';
import {
  AmbientLight,
  BoxGeometry,
  Camera,
  EffectComposer,
  FXAAPass,
  InstancedMesh,
  PhongMaterial,
  PointLight,
  Renderer,
  RenderPass,
  Scene,
  TiltShiftPass,
} from 'troisjs';
import SimplexNoise from 'simplex-noise';

const simplex = new SimplexNoise();

export default {
  components: {
    AmbientLight,
    BoxGeometry,
    Camera,
    EffectComposer,
    FXAAPass,
    InstancedMesh,
    PhongMaterial,
    PointLight,
    Renderer,
    RenderPass,
    Scene,
    TiltShiftPass,
  },
  setup() {
    const SIZE = 1.6, NX = 25, NY = 25, PADDING = 1;
    const SIZEP = SIZE + PADDING;
    const W = NX * SIZEP - PADDING;
    const H = NY * SIZEP - PADDING;
    return {
      SIZE, NX, NY, PADDING,
      SIZEP, W, H,
      NUM_INSTANCES: NX * NY,
    };
  },
  data() {
    return {
      tiltRadius: 100,
      tiltY: 100,
    };
  },
  computed: {
    tiltStart() { return { x: 0, y: this.tiltY }; },
    tiltEnd() { return { x: 100, y: this.tiltY }; },
  },
  mounted() {
    this.renderer = this.$refs.renderer;
    this.size = this.renderer.three.size;
    this.mouse = this.renderer.three.mouse;
    this.imesh = this.$refs.imesh.mesh;

    // init color attribute
    const colors = [];
    for (let i = 0; i < this.NUM_INSTANCES; i++) {
      const c = Math.random();
      colors.push(c, c, c);
    }
    this.imesh.geometry.setAttribute('color', new InstancedBufferAttribute(new Float32Array(colors), 3));

    this.tiltRadius = this.size.height / 3;
    this.tiltY = this.size.height / 2;
    this.renderer.onAfterResize(this.updateTilt);

    this.dummy = new Object3D();
    this.renderer.onBeforeRender(this.animate);
  },
  methods: {
    animate() {
      this.updateInstanceMatrix();
    },
    updateTilt() {
      this.tiltRadius = this.size.height / 3;
      this.tiltY = (this.mouse.y + 1) * 0.5 * this.size.height;
    },
    updateInstanceMatrix() {
      const x0 = -this.W / 2 + this.PADDING;
      const y0 = -this.H / 2 + this.PADDING;
      const time = Date.now() * 0.0001;
      const noise = 0.005;
      let x, y, nx, ny, rx, ry;
      for (let i = 0; i < this.NX; i++) {
        for (let j = 0; j < this.NY; j++) {
          x = x0 + i * this.SIZEP;
          y = y0 + j * this.SIZEP;
          nx = x * noise;
          ny = y * noise;
          rx = simplex.noise3D(nx, ny, time) * Math.PI;
          ry = simplex.noise3D(ny, nx, time) * Math.PI;
          this.dummy.position.set(x, y, -10);
          this.dummy.rotation.set(rx, ry, 0);
          this.dummy.updateMatrix();
          this.imesh.setMatrixAt(i * this.NY + j, this.dummy.matrix);
        }
      }
      this.imesh.instanceMatrix.needsUpdate = true;
    },
  },
};
</script>
