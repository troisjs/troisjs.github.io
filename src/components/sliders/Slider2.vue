<template>
  <Slider :images="images" />
</template>

<script>
import { default as Slider }  from 'troisjs/src/components/sliders/Slider2.vue';

export default {
  components: { Slider },
  data() {
    return {
      images: [
        { src: '/assets/images/img10.jpg' },
        { src: '/assets/images/img6.jpg' },
        { src: '/assets/images/img7.jpg' },
        { src: '/assets/images/img8.jpg' },
        { src: '/assets/images/img2.jpg' },
      ],
    };
  },
};
</script>
