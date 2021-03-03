<template>
  <!-- <div> -->
    <!-- <div class="info">v-for loop example</div> -->
    <Renderer ref="renderer" orbit-ctrl @click="onClick">
      <Camera :position="{ z: 15 }" />
      <Scene>
        <PointLight color="#ffffff" :position="{ y: 50, z: 0 }" />
        <PointLight color="#ffffff" :position="{ y: -50, z: 0 }" />
        <PointLight color="#ffffff" :position="{ y: 0, z: 0 }" />
        <Torus
          v-for="i in n" :key="i" :ref="`mesh${i}`"
          :radius="i * 0.2"
          :tube="0.05"
          :radial-segments="8"
          :tubular-segments="(i+2) * 3"
        >
          <StandardMaterial :color="color(i)" />
        </Torus>
      </Scene>
      <EffectComposer>
        <RenderPass />
        <UnrealBloomPass :strength="1" />
        <FXAAPass />
      </EffectComposer>
    </Renderer>
  <!-- </div> -->
</template>

<script>
import {
  Camera,
  EffectComposer,
  FXAAPass,
  PointLight,
  Renderer,
  RenderPass,
  Scene,
  StandardMaterial,
  Torus,
  UnrealBloomPass,
} from 'troisjs';

import chroma from 'chroma-js';

export default {
  components: {
    Camera,
    EffectComposer,
    FXAAPass,
    PointLight,
    Renderer,
    RenderPass,
    Scene,
    StandardMaterial,
    Torus,
    UnrealBloomPass,
  },
  data() {
    return {
      n: 50,
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
      this.cscale = chroma.scale([chroma.random(), chroma.random()]);
    },
  },
};
</script>
