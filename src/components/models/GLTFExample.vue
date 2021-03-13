<template>
  <Renderer ref="renderer" antialias :orbit-ctrl="{ enableDamping: true }" resize>
    <Camera :position="{ x: 1, y: 0, z: 0 }" />
    <Scene>
      <AmbientLight></AmbientLight>
      <GLTFModel src="/assets/models/test.glb" />
    </Scene>
  </Renderer>
</template>

<script>
import {
  AmbientLight,
  Camera,
  GLTFModel,
  Renderer,
  Scene,
} from 'troisjs';

export default {
  components: {
    AmbientLight,
    Camera,
    GLTFModel,
    Renderer,
    Scene,
  },
};
</script>
