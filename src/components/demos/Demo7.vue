<template>
  <Renderer ref="rendererRef" antialias :pointer="{ onMove: onPointerMove }" resize :orbit-ctrl="{ enableDamping: true }">
    <Camera :position="{ z: 20 }" />
    <Scene>
      <AmbientLight />
      <PointLight :color="light1Color" :position="{ x: 50, y: 50, z: 50}" />
      <PointLight :color="light2Color" :position="{ x: -50, y: 50, z: 50}" />
      <PointLight :color="light3Color" :position="{ x: -50, y: -50, z: 50}" />
      <PointLight :color="light4Color" :position="{ x: 50, y: -50, z: 50}" />
      <LiquidPlane ref="liquidRef"
        :width="WIDTH" :height="HEIGHT"
        :width-segments="512" :height-segments="512"
        :material-props="materialProps"
      />
    </Scene>
  </Renderer>
</template>

<script setup>
import { onUnmounted, ref } from 'vue'
import { Plane, Raycaster, Vector3 } from 'three'
import { Pane } from 'tweakpane'
import chroma from 'chroma-js'

import { AmbientLight, Camera, PointLight, Renderer, Scene } from 'troisjs'
import LiquidPlane from '@troisjs/components/src/liquid/LiquidPlane.js'

const WIDTH = 30
const HEIGHT = 30

const materialProps = ref({
  color: '#ffffff',
  metalness: 1,
  roughness: 0.2
})

const light1Color = ref('#FFFF80')
const light2Color = ref('#DE3578')
const light3Color = ref('#FF4040')
const light4Color = ref('#0d25bb')

// custom raycaster
const raycaster = new Raycaster()
const pointerPlane = new Plane(new Vector3(0, 0, 1), 0)
const pointerV3 = new Vector3()

const pane = new Pane()
onUnmounted(() => { pane.dispose() })
pane.addInput(materialProps.value, 'color')
pane.addInput(materialProps.value, 'metalness', { min: 0, max: 1 })
pane.addInput(materialProps.value, 'roughness', { min: 0, max: 1 })
pane.addButton({ title: 'Random lights' }).on('click', () => {
  light1Color.value = chroma.random().hex()
  light2Color.value = chroma.random().hex()
  light3Color.value = chroma.random().hex()
  light4Color.value = chroma.random().hex()
})

const rendererRef = ref()
const liquidRef = ref()

function onPointerMove({ positionN }) {
  raycaster.setFromCamera(positionN, rendererRef.value.camera)
  raycaster.ray.intersectPlane(pointerPlane, pointerV3)
  const x = 2 * pointerV3.x / WIDTH
  const y = 2 * pointerV3.y / HEIGHT
  liquidRef.value.liquidEffect.addDrop(x, y, 0.025, 0.005)
}
</script>
