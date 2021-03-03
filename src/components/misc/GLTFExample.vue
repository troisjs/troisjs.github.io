<template>
  <GLTFViewer src="/assets/test.glb" :camera-position="{ z: 1 }">
    <AmbientLight></AmbientLight>
  </GLTFViewer>
</template>

<script>
import { AmbientLight } from 'troisjs';
import GLTFViewer  from 'troisjs/src/components/viewers/GLTFViewer.vue';

export default {
  components: { AmbientLight, GLTFViewer },
};
</script>
