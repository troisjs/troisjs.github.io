<template>
  <Renderer ref="renderer" antialias orbit-ctrl mouse-move mouse-raycast shadow>
    <Camera :position="{ z: 20 }" />
    <Scene>
      <AmbientLight color="#808080" />
      <PointLight ref="light" cast-shadow :shadow-map-size="{ width: 1024, height: 1024 }" />

      <InstancedMesh ref="imesh" :count="NUM_INSTANCES" cast-shadow receive-shadow>
        <BoxGeometry :size="SIZE" />
        <PhongMaterial color="#9C1E15" />
      </InstancedMesh>

      <Plane :width="W*2" :height="H*2" :position="{ z: -10 - SIZE }" receive-shadow>
        <PhongMaterial color="#9C1E15" />
      </Plane>
    </Scene>
  </Renderer>
</template>

<script>
import { Object3D } from 'three';

import {
  AmbientLight,
  BoxGeometry,
  Camera,
  InstancedMesh,
  PhongMaterial,
  Plane,
  PointLight,
  Renderer,
  Scene,
} from 'troisjs';

import SimplexNoise from 'simplex-noise';
const simplex = new SimplexNoise();

export default {
  components: {
    AmbientLight,
    BoxGeometry,
    Camera,
    InstancedMesh,
    PhongMaterial,
    Plane,
    PointLight,
    Renderer,
    Scene,
  },
  setup() {
    const SIZE = 1.5, NX = 20, NY = 20, PADDING = 1;
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
    };
  },
  mounted() {
    this.renderer = this.$refs.renderer;
    this.mouse = this.renderer.three.mouse;
    this.mouseV3 = this.renderer.three.mouseV3;

    this.imesh = this.$refs.imesh.mesh;
    this.light = this.$refs.light.light;

    this.dummy = new Object3D();

    this.renderer.onBeforeRender(this.animate);
  },
  methods: {
    animate() {
      this.light.position.x = this.mouseV3.x;
      this.light.position.y = this.mouseV3.y;
      this.updateInstanceMatrix();
    },
    updateInstanceMatrix() {
      const x0 = -this.W / 2 + this.PADDING;
      const y0 = -this.H / 2 + this.PADDING;
      const time = Date.now() * 0.0001;
      const mx = this.mouse.x * 0.1;
      const my = this.mouse.y * 0.1;
      const noise = 0.005;
      let x, y, nx, ny, rx, ry;
      for (let i = 0; i < this.NX; i++) {
        for (let j = 0; j < this.NY; j++) {
          x = x0 + i * this.SIZEP;
          y = y0 + j * this.SIZEP;
          nx = x * noise + mx;
          ny = y * noise + my;
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
