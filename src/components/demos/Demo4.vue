<template>
  <Renderer ref="renderer" :orbit-ctrl="{ enableDamping: true, dampingFactor: 0.05, autoRotate : true }" shadow>
    <Camera :position="{ y: 100, z: 100 }" />
    <Scene>
      <SpotLight color="#ffffff" :intensity="0.5" :position="{ y: 150, z: 0 }" :cast-shadow="true" :shadow-map-size="{ width: 1024, height: 1024 }" />
      <SpotLight color="#ff0000" :intensity="0.5" :position="{ y: -150, z: 0 }" :cast-shadow="true" :shadow-map-size="{ width: 1024, height: 1024 }" />
      <InstancedMesh ref="imesh" :count="NUM_INSTANCES" :cast-shadow="true" :receive-shadow="true">
        <SphereGeometry :radius="5" />
        <PhongMaterial />
      </InstancedMesh>
    </Scene>
    <EffectComposer>
      <RenderPass />
      <UnrealBloomPass :strength="2" />
    </EffectComposer>
  </Renderer>
</template>

<script>
import { Object3D, MathUtils } from 'three';

import {
  Camera,
  EffectComposer,
  InstancedMesh,
  PhongMaterial,
  Renderer,
  RenderPass,
  SphereGeometry,
  SpotLight,
  Scene,
  UnrealBloomPass,
} from 'troisjs';

export default {
  components: {
    Camera,
    EffectComposer,
    InstancedMesh,
    PhongMaterial,
    Renderer,
    RenderPass,
    SphereGeometry,
    SpotLight,
    Scene,
    UnrealBloomPass,
  },
  setup() {
    return {
      NUM_INSTANCES: 2000,
    };
  },
  mounted() {
    // init instanced mesh matrix
    const imesh = this.$refs.imesh.mesh;
    const dummy = new Object3D();
    const { randFloat: rnd, randFloatSpread: rndFS } = MathUtils;
    for (let i = 0; i < this.NUM_INSTANCES; i++) {
      dummy.position.set(rndFS(200), rndFS(200), rndFS(200));
      const scale = rnd(0.2, 1);
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      imesh.setMatrixAt(i, dummy.matrix);
    }
    imesh.instanceMatrix.needsUpdate = true;
  },
};
</script>
