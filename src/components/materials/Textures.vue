<template>
  <Renderer ref="renderer" resize antialias :orbit-ctrl="{ autoRotate: true, enableDamping: true, dampingFactor: 0.05 }">
    <Camera :position="{ z: 10 }" />
    <Scene background="#000000" >
      <AmbientLight :intensity="0.5" />
      <PointLight :position="{ y: 50, z: 0 }" />
      <PointLight color="#ff6000" :intensity="0.75" :position="{ y: -50, z: 0 }" />
      <Sphere ref="mesh" :radius="2.5" :width-segments="200" :height-segments="200" >
        <StandardMaterial :props="{ displacementScale: 0.2 }">
          <Texture src="/assets/textures/Wood_Tiles_002_basecolor.jpg" />
          <Texture src="/assets/textures/Wood_Tiles_002_height.png" name="displacementMap" />
          <Texture src="/assets/textures/Wood_Tiles_002_normal.jpg" name="normalMap" />
          <Texture src="/assets/textures/Wood_Tiles_002_roughness.jpg" name="roughnessMap" />
          <Texture src="/assets/textures/Wood_Tiles_002_ambientOcclusion.jpg" name="aoMap" />
        </StandardMaterial>
      </Sphere>
    </Scene>
  </Renderer>
</template>

<script setup>
// textures from https://3dtextures.me/2019/04/26/wood-tiles-002/
import { AmbientLight, Camera, Renderer, PointLight, Scene, Sphere, StandardMaterial, Texture } from 'troisjs'
</script>
