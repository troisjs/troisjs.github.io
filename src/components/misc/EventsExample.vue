<template>
  <Renderer ref="renderer" antialias resize :orbit-ctrl="{ autoRotate: true, enableDamping: true, dampingFactor: 0.05 }">
    <Camera :position="{ z: 10 }" />
    <Scene>
      <PointLight :position="{ y: 50, z: 50 }" />
      <Box ref="box" @pointerOver="boxOver" @click="boxClick" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
        <LambertMaterial :color="boxColor" />
      </Box>
    </Scene>
  </Renderer>
</template>

<script setup>
import { ref } from 'vue'
import { Box, Camera, LambertMaterial, PointLight, Renderer, Scene } from 'troisjs'

const boxColor = ref('#ffffff')

const boxOver = ({ over }) => {
  boxColor.value = over ? '#ff0000' : '#ffffff'
}

const boxClick = (e) => {
  alert('Click')
  console.log(e)
}
</script>
