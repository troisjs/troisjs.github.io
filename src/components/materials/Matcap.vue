<template>
  <Renderer ref="renderer" antialias orbit-ctrl>
    <Camera :position="{ x: 0, y: 0, z: 10 }" />
    <Scene background="#ffffff">
      <Box ref="mesh" :size="3" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
        <MatcapMaterial name="2E763A_78A0B7_B3D1CF_14F209" />
      </Box>
    </Scene>
  </Renderer>
</template>

<script>
import { Box, Camera, MatcapMaterial, Renderer, Scene } from 'troisjs';

export default {
  components: { Box, Camera, MatcapMaterial, Renderer, Scene },
  mounted() {
    const renderer = this.$refs.renderer;
    const mesh = this.$refs.mesh.mesh;
    renderer.onBeforeRender(() => {
      mesh.rotation.x += 0.01;
    });
  },
};
</script>
