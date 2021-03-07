<template>
  <Renderer ref="renderer" antialias resize mouse-over click :orbit-ctrl="{ autoRotate: true, enableDamping: true, dampingFactor: 0.05 }">
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
