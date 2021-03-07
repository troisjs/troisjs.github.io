<template>
  <Renderer ref="renderer" antialias :orbit-ctrl="{ enableDamping: true, dampingFactor: 0.05 }" resize>
    <Camera :position="{ z: 5 }" />
    <Scene background="#000000">
      <AmbientLight color="#505050" />
      <PointLight color="#24f59e" :position="{ x: -2 , y: -2, z: 2 }" :intensity="0.5" />
      <PointLight color="#e15040" :position="{ x: -2 , y: 2, z: 2 }" :intensity="0.5" />
      <PointLight color="#1b859e" :position="{ x: 2 , y: 2, z: 2 }" :intensity="0.5" />
      <PointLight color="#4cb04b" :position="{ x: 2 , y: -2, z: 2 }" :intensity="0.5" />
      <Tube v-for="t in tubes" :ref="t.key" v-bind="t">
        <StandardMaterial :roughness="0.5" :metalness="1" flat-shading />
      </Tube>
    </Scene>
  </Renderer>
</template>

<script>
import { Vector3 } from 'three';
import SimplexNoise from 'simplex-noise';
import {
  AmbientLight,
  Camera,
  PointLight,
  Renderer,
  Scene,
  StandardMaterial,
  Tube,
} from 'troisjs';

const NX = 20;
const NY = 10;

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
    };
  },
  mounted() {
    this.renderer = this.$refs.renderer;
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
          noisey = simplex.noise2D(x1 - time, y1 - time) * 0.25;
          noisez = simplex.noise2D(y1 + time, x1 + time) * 0.25;
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
          radius: 0.15,
          tubularSegments: NX,
          radialSegments: 16,
        });
      }
    },
  },
};
</script>
