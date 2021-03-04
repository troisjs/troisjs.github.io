<template>
  <Renderer ref="renderer" antialias orbit-ctrl @click="onClick">
    <Camera :position="{ z: 15 }" />
    <Scene background="#ffffff">
      <AmbientLight color="#808080" />
      <PointLight color="#ffffff" :position="{ y: 50, z: 0 }" />
      <PointLight color="#ffffff" :position="{ y: -50, z: 0 }" />
      <PointLight color="#ffffff" :position="{ y: 0, z: 0 }" />
      <Torus
        v-for="i in n" :key="i" :ref="`mesh${i}`"
        :radius="i * 0.2"
        :tube="0.1"
        :radial-segments="8"
        :tubular-segments="(i+2) * 4"
      >
        <ToonMaterial :color="color(i)" />
      </Torus>
    </Scene>
  </Renderer>
</template>

<script>
import {
  AmbientLight,
  Camera,
  PointLight,
  Renderer,
  Scene,
  ToonMaterial,
  Torus,
} from 'troisjs';

import chroma from 'chroma-js';

export default {
  components: {
    AmbientLight,
    Camera,
    PointLight,
    Renderer,
    Scene,
    ToonMaterial,
    Torus,
  },
  data() {
    return {
      n: 30,
      cscale: chroma.scale(['#dd3e1b', '#0b509c']),
    };
  },
  mounted() {
    const renderer = this.$refs.renderer;
    renderer.onBeforeRender(() => {
      const t = Date.now();
      let mesh, ti;
      for (let i = 1; i <= this.n; i++) {
        mesh = this.$refs['mesh'+i].mesh;
        ti = (t - i * 500);
        mesh.rotation.x = ti * 0.00015;
        mesh.rotation.y = ti * 0.00020;
        mesh.rotation.z = ti * 0.00017;
      }
    });
  },
  methods: {
    color(i) {
      return this.cscale(i / this.n).css();
    },
    onClick(e) {
      this.cscale = chroma.scale([chroma.random(), chroma.random(), chroma.random()]);
    },
  },
};
</script>
