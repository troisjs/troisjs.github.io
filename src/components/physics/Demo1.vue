<template>
  <Renderer ref="renderer" antialias orbit-ctrl resize shadow @click="randomColors">
    <Camera :position="{ z: 7 }" />
    <Scene background="white">
      <AmbientLight color="#aaaaaa" />
      <SpotLight
        color="#aaaaaa"
        :intensity="0.5"
        :position="{ x: 0, y: 1, z: 2 }"
        :angle="Math.PI / 3"
        :penumbra="0.5"
        cast-shadow :shadow-map-size="{ width: 1024, height: 1024 }"
      />
      <SpotLight
        color="#ff0000"
        :intensity="0.5"
        :position="{ x: 0, y: -1, z: 2 }"
        :angle="Math.PI / 3"
        :penumbra="0.5"
        cast-shadow :shadow-map-size="{ width: 1024, height: 1024 }"
      />
      <Plane :width="15" :height="15" :position="{ z: -0.1 }" receive-shadow>
        <PhongMaterial color="#aaaaaa" />
      </Plane>
      <CannonWorld :gravity="{ x: 0, y: -9.82, z: 0 }" @before-step="onBeforeStep">
        <InstancedMesh ref="imeshC" :count="COUNT" @created="initIMesh" cast-shadow>
          <SphereGeometry :radius="0.1" :width-segments="16" :height-segments="16" />
          <ToonMaterial />
        </InstancedMesh>
        <Box v-for="i in 6"
          :key="`box-${i}`"
          :width="3" :height="0.05" :depth="0.2"
          :position="{ x: (i%2 ===0 ? 1 : -1) * 1, y: (i - 3.5) * 1.5 , z: 0 }"
          :rotation="{ z: (i%2 ===0 ? 1 : -1) * Math.PI / 6}"
          cast-shadow
        >
          <PhongMaterial color="#aaaaaa" />
        </Box>
      </CannonWorld>
    </Scene>
  </Renderer>
</template>

<script>
import { Color, MathUtils, Object3D } from 'three';
import {
  AmbientLight,
  Box,
  Camera,
  InstancedMesh,
  PhongMaterial,
  Plane,
  Renderer,
  Scene,
  SphereGeometry,
  SpotLight,
  ToonMaterial,
} from 'troisjs';
import CannonWorld from 'troisjs/src/components/physics/CannonWorld.js';
import niceColors from 'nice-color-palettes';

const { randFloat: rnd, randFloatSpread: rndFS } = MathUtils;

export default {
  components: {
    AmbientLight,
    Box,
    Camera,
    InstancedMesh,
    PhongMaterial,
    Plane,
    Renderer,
    Scene,
    SphereGeometry,
    SpotLight,
    ToonMaterial,
    CannonWorld,
  },
  setup() {
    return {
      COUNT: 500,
    };
  },
  methods: {
    initIMesh(imesh) {
      this.imesh = imesh;

      const dummy = new Object3D();
      const color = new Color();
      // const cscale = chroma.scale(niceColors[Math.floor(rnd(0, 100))]);
      const scales = new Array(this.COUNT);
      const masses = new Array(this.COUNT);
      const colors = new Array(this.COUNT).fill().map(() => niceColors[20][Math.floor(rnd(0, 5))]);

      for (let i = 0; i < this.COUNT; i++) {
        dummy.position.set(rndFS(2), rndFS(5), 0);
        const scale = rnd(0.2, 1);
        scales[i] = scale;
        masses[i] = scale * 0.01;
        dummy.scale.set(scale, scale, scale);
        dummy.updateMatrix();
        imesh.setMatrixAt(i, dummy.matrix);
        imesh.setColorAt(i, color.set(colors[i]));
        // imesh.setColorAt(i, color.set(cscale(rnd(0, 1)).hex()));
      }
      imesh.instanceMatrix.needsUpdate = true;
      imesh.userData.scales = scales;
      imesh.userData.masses = masses;
      imesh.userData.damping = 0.7;
    },
    onBeforeStep() {
      this.imesh.userData.bodies.forEach(body => {
        if (body.position.y < -7) {
          body.position.set(rndFS(2), rnd(5, 7), 0);
          body.angularVelocity.set(0, 0, 0, 0);
          body.velocity.set(0, 0, 0);
          body.quaternion.set(0, 0, 0, 1);
        }
      });
    },
    randomColors() {
      const ci = Math.floor(rnd(0, 100));
      const color = new Color();
      const colors = new Array(this.COUNT).fill().map(() => niceColors[ci][Math.floor(rnd(0, 5))]);
      for (let i = 0; i < this.COUNT; i++) {
        this.imesh.setColorAt(i, color.set(colors[i]));
      }
      this.imesh.instanceColor.needsUpdate = true;
    },
  },
};
</script>
