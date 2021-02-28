<template>
  <Slider :images="images" />
</template>

<script>
import { Slider1 as Slider  } from 'troisjs';

export default {
  components: { Slider },
  data() {
    return {
      images: [
        { src: '/assets/images/img1.jpg' },
        { src: '/assets/images/img2.jpg' },
        { src: '/assets/images/img3.jpg' },
        { src: '/assets/images/img4.jpg' },
      ],
    };
  },
};
</script>
