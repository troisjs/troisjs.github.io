<template>
  <Slider :images="images" />
</template>

<script setup>
import Slider from '@troisjs/components/src/sliders/zoomblur/Slider.vue'

const images = [
  { src: '/assets/images/img10.jpg' },
  { src: '/assets/images/img6.jpg' },
  { src: '/assets/images/img7.jpg' },
  { src: '/assets/images/img8.jpg' },
  { src: '/assets/images/img2.jpg' }
]
</script>
