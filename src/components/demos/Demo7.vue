<template>
  <Renderer ref="renderer" antialias mouse-move resize :orbit-ctrl="{ enableDamping: true }" @mousemove="onMouseMove">
    <Camera :position="{ x: 0, y: 0, z: 20 }" />
    <Scene ref="scene">
      <AmbientLight />
      <PointLight :color="light1Color" :position="{ x: 50, y: 50, z: 50}" />
      <PointLight :color="light2Color" :position="{ x: -50, y: 50, z: 50}" />
      <PointLight :color="light3Color" :position="{ x: -50, y: -50, z: 50}" />
      <PointLight :color="light4Color" :position="{ x: 50, y: -50, z: 50}" />

      <LiquidPlane ref="liquid"
        :width="WIDTH" :height="HEIGHT" :width-segments="512" :height-segments="512"
        :color="color" :metalness="metalness" :roughness="roughness"
      />
    </Scene>
  </Renderer>
</template>

<script>
import { Plane, Raycaster, Vector3 } from 'three';
import Tweakpane from 'tweakpane';
import chroma from 'chroma-js';

import {
  AmbientLight,
  Camera,
  PointLight,
  Renderer,
  Scene,
} from 'troisjs';

import LiquidPlane from 'troisjs/src/components/liquid/LiquidPlane.js';

export default {
  components: {
    AmbientLight,
    Camera,
    LiquidPlane,
    PointLight,
    Renderer,
    Scene,
  },
  setup() {
    return {
      WIDTH: 30,
      HEIGHT: 30,
    };
  },
  data() {
    return {
      color: '#ffffff',
      metalness: 1,
      roughness: 0.2,
      light1Color: '#FFFF80',
      light2Color: '#DE3578',
      light3Color: '#FF4040',
      light4Color: '#0d25bb',
    };
  },
  mounted() {
    this.mouse = this.$refs.renderer.three.mouse;
    this.liquidEffect = this.$refs.liquid.liquidEffect;
    this.liquidEffect.addDrop(0, 0, 0.05, 0.05);

    // custom raycaster
    this.raycaster = new Raycaster();
    this.mousePlane = new Plane(new Vector3(0, 0, 1), 0);
    this.mouseV3 = new Vector3();

    this.pane = new Tweakpane();
    this.pane.addInput(this, 'color');
    this.pane.addInput(this, 'metalness', { min: 0, max: 1 });
    this.pane.addInput(this, 'roughness', { min: 0, max: 1 });
    this.pane.addButton({ title: 'Random lights' }).on('click', this.randomColors);
  },
  unmounted() {
    this.pane.dispose();
  },
  methods: {
    onMouseMove() {
      this.raycaster.setFromCamera(this.mouse, this.$refs.renderer.three.camera);
      this.raycaster.ray.intersectPlane(this.mousePlane, this.mouseV3);
      const x = 2 * this.mouseV3.x / this.WIDTH;
      const y = 2 * this.mouseV3.y / this.HEIGHT;
      this.liquidEffect.addDrop(x, y, 0.025, 0.005);
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

<style>
.tp-dfwv {
  margin-top: var(--header-height);
  /* left: 8px;
  right: auto!important; */
}

@media (min-width: 720px) {
  .tp-dfwv {
    margin-left: 16.4rem;
  }
}
@media (min-width: 960px) {
  .tp-dfwv {
    margin-left: 20rem;
  }
}
</style>