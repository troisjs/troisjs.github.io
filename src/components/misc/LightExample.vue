<template>
  <Renderer ref="renderer" resize antialias orbit-ctrl mouse-move mouse-raycast>
    <Camera :position="{ x: 0, y: 0, z: 10 }" />
    <Scene background="#000000" >
      <PointLight ref="light" :intensity="0.5" :position="{ x: 0, y: 0, z: 0 }">
        <Sphere :radius="0.1" />
      </PointLight>
      <Group :rotation="{ x: -Math.PI / 2, y: 0, z: 0 }">
        <RectAreaLight color="#ff6000" :position="{ x: 0, y: 10, z: 1 }" v-bind="rectLightsProps" />
        <RectAreaLight color="#0060ff" :position="{ x: -5, y: 10, z: 1 }" v-bind="rectLightsProps" />
        <RectAreaLight color="#60ff60" :position="{ x: 5, y: 10, z: 1 }" v-bind="rectLightsProps" />
        <Plane :width="30" :height="30" :rotation="{ x: 0 }" :position="{ z: -3 }">
          <StandardMaterial :displacement-scale="0.2" :roughness="0" :metalness="0" >
            <Texture v-bind="texturesProps" src="/assets/textures/Wood_Tiles_002_basecolor.jpg" />
            <Texture v-bind="texturesProps" src="/assets/textures/Wood_Tiles_002_height.png" id="displacementMap" />
            <Texture v-bind="texturesProps" src="/assets/textures/Wood_Tiles_002_normal.jpg" id="normalMap" />
            <Texture v-bind="texturesProps" src="/assets/textures/Wood_Tiles_002_roughness.jpg" id="roughnessMap" />
            <Texture v-bind="texturesProps" src="/assets/textures/Wood_Tiles_002_ambientOcclusion.jpg" id="aoMap" />
          </StandardMaterial>
        </Plane>
      </Group>
    </Scene>
    <EffectComposer>
      <RenderPass />
      <UnrealBloomPass :strength="0.3" />
      <FXAAPass />
    </EffectComposer>
  </Renderer>
</template>

<script>
// textures from https://3dtextures.me/2019/04/26/wood-tiles-002/
import { Mesh, MeshBasicMaterial, SphereGeometry, RepeatWrapping } from 'three';
import {
  AmbientLight,
  Camera,
  EffectComposer,
  FXAAPass,
  Group,
  Renderer,
  Plane,
  PointLight,
  RectAreaLight,
  RenderPass,
  Scene,
  Sphere,
  StandardMaterial,
  Texture,
  UnrealBloomPass,
} from 'troisjs';

export default {
  components: {
    AmbientLight,
    Camera,
    EffectComposer,
    FXAAPass,
    Group,
    Renderer,
    Plane,
    PointLight,
    RectAreaLight,
    RenderPass,
    Scene,
    Sphere,
    StandardMaterial,
    Texture,
    UnrealBloomPass,
  },
  data() {
    return {
      texturesProps: {
        repeat: { x: 10, y: 10 },
        wrapS: RepeatWrapping,
        wrapT: RepeatWrapping,
      },
      rectLightsProps: {
        rotation: { x: -Math.PI / 2 },
        intensity: 5,
        width: 2,
        height: 5,
        helper: true,
      },
    };
  },
  mounted() {
    const renderer = this.$refs.renderer;
    const light = this.$refs.light.light;
    const mouseV3 = renderer.three.mouseV3;
    renderer.onBeforeRender(() => {
      light.position.copy(mouseV3);
    });
  },
};
</script>
