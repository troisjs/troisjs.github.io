<template>
  <Renderer ref="rendererRef" resize :pointer="{ onMove: updateTilt }">
    <Camera :position="{ y: -20, z: 10 }" :look-at="{ x: 0, y: 0, z: 0 }" />
    <Scene background="#ffffff">
      <AmbientLight />
      <PointLight ref="light" :position="{ y: 0, z: 20 }" />
      <InstancedMesh ref="meshRef" @created="initMesh" :count="NUM_INSTANCES" :position="{ y: 20, z: 10 }">
        <BoxGeometry :size="SIZE" />
        <PhongMaterial />
      </InstancedMesh>
    </Scene>
    <EffectComposer>
      <RenderPass />
      <FXAAPass />
      <TiltShiftPass :gradient-radius="tiltRadius" :start="{ x: 0, y: tiltY }" :end="{ x: 100, y: tiltY }" />
    </EffectComposer>
  </Renderer>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Color, Object3D } from 'three'
import {
  AmbientLight,
  BoxGeometry,
  Camera,
  EffectComposer,
  FXAAPass,
  InstancedMesh,
  PhongMaterial,
  PointLight,
  Renderer,
  RenderPass,
  Scene,
  TiltShiftPass
} from 'troisjs'
import SimplexNoise from 'simplex-noise'

const simplex = new SimplexNoise()
const dummy = new Object3D()

const NX = 25
const NY = 25
const NUM_INSTANCES = NX * NY
const SIZE = 1.6
const PADDING = 1
const SIZEP = SIZE + PADDING
const W = NX * SIZEP - PADDING
const H = NY * SIZEP - PADDING

const tiltRadius = ref(100)
const tiltY = ref(100)

const rendererRef = ref()
const meshRef = ref()

function initMesh(mesh) {
  for (let i = 0; i < NUM_INSTANCES; i++) {
    const grey = Math.random()
    mesh.setColorAt(i, new Color(grey, grey, grey))
  }
  // mesh.instanceColor.needsUpdate = true
  // updateInstanceMatrix(mesh)
}

onMounted(() => {
  const renderer = rendererRef.value
  const mesh = meshRef.value.mesh

  renderer.onResize(({ size }) => {
    tiltRadius.value = size.height / 3
    tiltY.value = (renderer.pointer.positionN.y + 1) * 0.5 * renderer.size.height
  })

  renderer.onBeforeRender(() => {
    updateInstanceMatrix(mesh)
  })
})

function updateTilt({ positionN }) {
  tiltY.value = (positionN.y + 1) * 0.5 * rendererRef.value.size.height
}

function updateInstanceMatrix(mesh) {
  const x0 = -W / 2 + PADDING
  const y0 = -H / 2 + PADDING
  const time = Date.now() * 0.0001
  const noise = 0.005
  let x, y, nx, ny, rx, ry
  for (let i = 0; i < NX; i++) {
    for (let j = 0; j < NY; j++) {
      x = x0 + i * SIZEP
      y = y0 + j * SIZEP
      nx = x * noise
      ny = y * noise
      rx = simplex.noise3D(nx, ny, time) * Math.PI
      ry = simplex.noise3D(ny, nx, time) * Math.PI
      dummy.position.set(x, y, -10)
      dummy.rotation.set(rx, ry, 0)
      dummy.updateMatrix()
      mesh.setMatrixAt(i * NY + j, dummy.matrix)
    }
  }
  mesh.instanceMatrix.needsUpdate = true
}
</script>
