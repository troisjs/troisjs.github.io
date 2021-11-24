<template>
  <Renderer ref="rendererRef" antialias resize :orbit-ctrl="{ enableDamping: true, dampingFactor: 0.05 }">
    <Camera :position="{ x: -0, y: -100, z: 30 }" />
    <Scene background="#ffffff">
      <PointLight ref="light1Ref" color="#0E09DC" :intensity="0.85" :position="{ x: 0, y: 0, z: 50 }" />
      <PointLight ref="light2Ref" color="#1CD1E1" :intensity="0.85" :position="{ x: 0, y: 0, z: 50 }" />
      <PointLight ref="light3Ref" color="#18C02C" :intensity="0.85" :position="{ x: 0, y: 0, z: 50 }" />
      <PointLight ref="light4Ref" color="#ee3bcf" :intensity="0.85" :position="{ x: 0, y: 0, z: 50 }" />

      <NoisyPlane
        :width="200" :width-segments="100"
        :height="200" :height-segments="100"
        :time-coef="0.0003"
        :noise-coef="5"
        :displacement-scale="15"
        :delta-coef="1 / 200"
        :position="{ x: 0, y: 0, z: 0 }"
      >
        <PhysicalMaterial />
      </NoisyPlane>

      <Torus ref="meshRef" :radius="8" :tube="3" :radial-segments="8" :tubular-segments="6" :position="{ x: 0, y: -20, z: 20 }">
        <PhysicalMaterial :props="{ flatShading: true, transmission: 1, thickness: 10, metalness: 0, roughness: 0 }" />
      </Torus>

    </Scene>
  </Renderer>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Camera, PhysicalMaterial, PointLight, Renderer, Scene, Torus } from 'troisjs'
import NoisyPlane from '@troisjs/components/src/noisy/NoisyPlane.js'

const rendererRef = ref()
const meshRef = ref()
const light1Ref = ref()
const light2Ref = ref()
const light3Ref = ref()
const light4Ref = ref()

onMounted(() => {
  const renderer = rendererRef.value
  const mesh = meshRef.value.mesh

  const d = 100
  renderer.onBeforeRender(() => {
    const time = Date.now() * 0.001
    mesh.rotation.x += 0.02; mesh.rotation.y += 0.01
    light1Ref.value.light.position.x = Math.sin(time * 0.1) * d
    light1Ref.value.light.position.y = Math.cos(time * 0.2) * d
    light2Ref.value.light.position.x = Math.cos(time * 0.3) * d
    light2Ref.value.light.position.y = Math.sin(time * 0.4) * d
    light3Ref.value.light.position.x = Math.sin(time * 0.5) * d
    light3Ref.value.light.position.y = Math.sin(time * 0.6) * d
    light4Ref.value.light.position.x = Math.sin(time * 0.7) * d
    light4Ref.value.light.position.y = Math.cos(time * 0.8) * d
  })
})
</script>
