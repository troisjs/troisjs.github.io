<template>
  <Slider :images="images" />
</template>

<script setup>
import Slider from '@troisjs/components/src/sliders/explode/Slider.vue'

const images = [
  { src: '/assets/images/img1.jpg' },
  { src: '/assets/images/img2.jpg' },
  { src: '/assets/images/img3.jpg' },
  { src: '/assets/images/img4.jpg' }
]
</script>
