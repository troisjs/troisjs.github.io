<template>
  <Renderer ref="renderer" antialias :orbit-ctrl="{ enableDamping: true, dampingFactor: 0.05 }" resize>
    <Camera :position="{ z: 4 }" />
    <Scene background="#ffffff">
      <AmbientLight color="#808080" />
      <PointLight :position="{ y: 10, z: 10 }" />
      <component ref="mesh" :is="mesh" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }" v-bind="meshProps">
        <component ref="mat" :is="material" :color="color" :props="{ ...matProps, side: materialSide }"></component>
      </component>
    </Scene>
  </Renderer>
</template>

<script>
import { Pane } from 'tweakpane';
import { DoubleSide, Vector3 } from 'three';
import {
  AmbientLight,
  Camera,
  PointLight,
  Renderer,
  Scene,

  Box,
  Circle,
  Cone,
  Cylinder,
  Dodecahedron,
  Icosahedron,
  Octahedron,
  Ring,
  Sphere,
  Tetrahedron,
  Torus,
  TorusKnot,
  Tube,

  BasicMaterial,
  LambertMaterial,
  PhongMaterial,
  PhysicalMaterial,
  StandardMaterial,
  ToonMaterial,
} from 'troisjs';

const meshes = {
  'Box': { size: 1 },
  'Circle': {},
  'Cone': {},
  'Cylinder': {},
  'Dodecahedron': {},
  'Icosahedron': {},
  'Octahedron': {},
  'Ring': {},
  'Sphere': {},
  'Tetrahedron': {},
  'Torus': { tube: 0.2 },
  'TorusKnot': { tube: 0.2 },
  'Tube': { radius: 0.2, points: [
    new Vector3(-1, 1, 0),
    new Vector3(0, -1, 0),
    new Vector3(1, 1, 0),
  ]},
};

const materials = {
  'BasicMaterial': {},
  'LambertMaterial': {},
  'PhongMaterial': {},
  'PhysicalMaterial': {},
  'StandardMaterial': {},
  // 'SubsurfaceMaterial': {},
  'ToonMaterial': {},
};

export default {
  components: {
    AmbientLight,
    Camera,
    PointLight,
    Renderer,
    Scene,

    Box,
    Circle,
    Cone,
    Cylinder,
    Dodecahedron,
    Icosahedron,
    Octahedron,
    Ring,
    Sphere,
    Tetrahedron,
    Torus,
    TorusKnot,
    Tube,

    BasicMaterial,
    LambertMaterial,
    PhongMaterial,
    PhysicalMaterial,
    StandardMaterial,
    // 'SubsurfaceMaterial,
    ToonMaterial,
  },
  data() {
    return {
      mesh: 'Box',
      material: 'PhysicalMaterial',
      color: '#0060ff',
      materialSide: DoubleSide,
    };
  },
  computed: {
    meshProps() { return meshes[this.mesh]; },
    matProps() { return materials[this.material]; },
    meshTweakOptions() {
      const options = {};
      for (const [key] of Object.entries(meshes)) {
        options[key] = key;
      }
      return options;
    },
    matTweakOptions() {
      const options = {};
      for (const [key] of Object.entries(materials)) {
        options[key] = key;
      }
      return options;
    },
  },
  mounted() {
    this.pane = new Pane();

    this.pane.addInput(this, 'mesh', { options: this.meshTweakOptions });
    this.pane.addInput(this, 'material', { options: this.matTweakOptions });
    this.pane.addInput(this, 'color');

    const renderer = this.$refs.renderer;
    renderer.onBeforeRender(() => {
      const mesh = this.$refs.mesh.mesh;
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.013;
    });
  },
  unmounted() {
    this.pane.dispose();
  },
  methods: {
  },
};
</script>
