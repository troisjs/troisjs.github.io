<template>
  <Renderer ref="rendererRef" antialias :orbit-ctrl="{ enableDamping: true, target }" resize shadow>
    <Camera :position="{ x: 100, y: 200, z: 300 }" />
    <Scene ref="sceneRef" background="#a0a0a0">
      <HemisphereLight />

      <DirectionalLight
        :position="{ x: 0, y: 200, z: 100 }"
        cast-shadow :shadow-camera="{ top: 180, bottom: -120, left: -120, right: 120 }"
      />

      <Plane :width="2000" :height="2000" :rotation="{ x: -Math.PI / 2 }" receive-shadow>
        <PhongMaterial color="#999999" :props="{ depthWrite: false }" />
      </Plane>

      <FbxModel src="/assets/models/Samba Dancing.fbx" @load="onLoad" />
    </Scene>
  </Renderer>
</template>

<script setup>
// Model from mixamo.com
import { onMounted, ref } from 'vue'
import { AnimationMixer, Clock, Fog, GridHelper, Vector3 } from 'three'
import {
  Camera,
  DirectionalLight,
  FbxModel,
  HemisphereLight,
  Renderer,
  PhongMaterial,
  Plane,
  Scene
} from 'troisjs'

const target = new Vector3(0, 100, 0)
const rendererRef = ref()
const sceneRef = ref()

function onLoad(object) {
  const mixer = new AnimationMixer(object)
  const action = mixer.clipAction(object.animations[0])
  action.play()

  object.traverse(function (child) {
    if (child.isMesh) {
      child.castShadow = true
      child.receiveShadow = true
    }
  })

  const clock = new Clock()
  rendererRef.value.onBeforeRender(() => { mixer.update(clock.getDelta()) })
}

onMounted(() => {
  const scene = sceneRef.value.scene
  scene.fog = new Fog(0xa0a0a0, 200, 1000)
  const grid = new GridHelper(2000, 20, 0x000000, 0x000000)
  grid.material.opacity = 0.5
  grid.material.transparent = true
  scene.add(grid)
})
</script>
