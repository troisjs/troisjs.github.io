<template>
  <Slider
    :images="images"
    :disp-map-shader="dispMapShader"
    :disp-scale-x="1"
    :disp-scale-y="1"
    :disp-scale="0.1"
  />
</template>

<script setup>
import Slider from '@troisjs/components/src/sliders/displacement/Slider.vue'

const images = [
  { src: '/assets/images/img1.jpg' },
  { src: '/assets/images/img2.jpg' },
  { src: '/assets/images/img3.jpg' },
  { src: '/assets/images/img4.jpg' }
]

const dispMapShader = `
  varying vec2 vUv;
  void main() {
    vec2 uv = vUv * 20.0;
    float modx = mod(uv.x, 2.0);
    float mody = mod(uv.y, 2.0);
    vec2 disp = vec2(0.5, 0.5);
    if (modx < 1.0) { disp.y = 0.0; } else { disp.y = 1.0; }
    if (mody < 1.0) { disp.x = 1.0; } else { disp.x = 0.0; }
    gl_FragColor = vec4(disp.x, disp.y, 0.0, 1.0);
  }
`

</script>
