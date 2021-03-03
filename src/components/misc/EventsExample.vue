<template>
  <Renderer ref="renderer" mouse-over click>
    <Camera :position="{ z: 10 }" />
    <Scene>
      <PointLight :position="{ y: 50, z: 50 }" />
      <Box ref="box" @hover="boxHover" @click="boxClick" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
        <LambertMaterial :color="boxColor" />
      </Box>
    </Scene>
  </Renderer>
</template>

<script>
import { Box, Camera, LambertMaterial, PointLight, Renderer, Scene } from 'troisjs';

export default {
  components: { Box, Camera, LambertMaterial, PointLight, Renderer, Scene },
  data() {
    return {
      boxColor: '#ffffff',
    };
  },
  mounted() {
    const renderer = this.$refs.renderer;
    const box = this.$refs.box.mesh;
    renderer.onBeforeRender(() => {
      box.rotation.x += 0.01;
    });
  },
  methods: {
    boxHover({ over }) {
      this.boxColor = over ? '#ff0000' : '#ffffff';
    },
    boxClick(e) {
      alert('Click');
      console.log(e);
    },
  },
};
</script>
