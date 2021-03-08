<template>
  <Renderer ref="renderer" antialias :orbit-ctrl="{ enableDamping: true }" mouse-move resize="window" @click="randomColors">
    <Camera :position="{ z: 5 }" />
    <Scene background="#000000">
      <PointLight :color="light1Color" :position="{ x: -2 , y: -2, z: 2 }" :intensity="0.5" />
      <PointLight :color="light2Color" :position="{ x: -2 , y: 2, z: 2 }" :intensity="0.5" />
      <PointLight :color="light3Color" :position="{ x: 2 , y: 2, z: 2 }" :intensity="0.5" />
      <PointLight :color="light4Color" :position="{ x: 2 , y: -2, z: 2 }" :intensity="0.5" />
      <Tube v-for="t in tubes" :ref="t.key" v-bind="t">
        <StandardMaterial :roughness="0.4" :metalness="1" />
      </Tube>
    </Scene>
  </Renderer>
</template>

<script>
import { Vector3 } from 'three';
import SimplexNoise from 'simplex-noise';
import chroma from 'chroma-js';

import {
  AmbientLight,
  Camera,
  PointLight,
  Renderer,
  Scene,
  StandardMaterial,
  Tube,
} from 'troisjs';

const NX = 40;
const NY = 15;

const simplex = new SimplexNoise();

export default {
  components: {
    AmbientLight,
    Camera,
    PointLight,
    Renderer,
    Scene,
    StandardMaterial,
    Tube,
  },
  data() {
    return {
      tubes: [],
      light1Color: '#b307b5',
      light2Color: '#8132aa',
      light3Color: '#5737d0',
      light4Color: '#0d25bb',
    };
  },
  mounted() {
    this.renderer = this.$refs.renderer;
    this.mouse = this.renderer.three.mouse;
    this.size = this.renderer.three.size;
    this.initTubes();

    this.renderer.onBeforeRender(() => {
      const time = Date.now() * 0.0002;
      let t, points, x, y, x1, y1, noisey, noisez;
      for (let j = 0; j < NY; j++) {
        t = this.tubes[j];
        points = t.points;
        for (let i = 0; i < NX; i++) {
          x = this.x0 + i * this.dx; x1 = x * 0.25;
          y = this.y0 + j * this.dy; y1 = y * 0.25;
          noisey = simplex.noise2D(x1 - time + this.mouse.x * 0.3, y1 - time + this.mouse.y * 0.3) * 0.3;
          noisez = simplex.noise2D(y1 + time, x1 + time) * 0.3;
          points[i].x = x;
          points[i].y = y + noisey;
          points[i].z = noisez;
        }
        this.$refs[t.key].updateCurve();
      }
    });

    // this.renderer.onAfterResize(() => {
    //   this.initTubes();
    // });
  },
  methods: {
    initTubes() {
      this.tubes.splice(0);
      this.dx = this.size.wWidth / (NX - 1);
      this.dy = this.size.wHeight / (NY - 1);
      this.x0 = -this.size.wWidth / 2;
      this.y0 = -this.size.wHeight / 2;
      for (let j = 0; j < NY; j++) {
        const points = [];
        for (let i = 0; i < NX; i++) {
          points.push(new Vector3(this.x0 + i * this.dx, this.y0 + j * this.dy, 0));
        }
        this.tubes.push({
          key: `tube-${j}`,
          points,
          radius: 0.1,
          tubularSegments: NX,
          radialSegments: 16,
        });
      }
    },
    randomColors() {
      this.light1Color = chroma.random().hex();
      this.light2Color = chroma.random().hex();
      this.light3Color = chroma.random().hex();
      this.light4Color = chroma.random().hex();
    },
  },
};
</script>
