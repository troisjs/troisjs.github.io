# Installation

`npm install three@0.126 troisjs`

Or `yarn add three@0.126 troisjs`

### Vue plugin

```js
import { TroisJSVuePlugin } from 'troisjs';
app.use(TroisJSVuePlugin);
```

### Example

```vue
<template>
  <Renderer ref="renderer">
    <Camera :position="{ z: 10 }" />
    <Scene>
      <PointLight :position="{ y: 50, z: 50 }" />
      <Box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
        <LambertMaterial />
      </Box>
    </Scene>
  </Renderer>
</template>

<script>
export default {
  mounted() {
    const renderer = this.$refs.renderer;
    const box = this.$refs.box.mesh;
    renderer.onBeforeRender(() => {
      box.rotation.x += 0.01;
    });
  },
};
</script>
```

### Example without plugin

::: tip
If you don't use TroisJSVuePlugin (better for tree-shaking), you have to import and register the components.
:::

```vue
<template>
  <Renderer>
    <Camera :position="{ z: 10 }" />
    <Scene>
      <PointLight :position="{ y: 50, z: 50 }" />
      <Box>
        <LambertMaterial />
      </Box>
    </Scene>
  </Renderer>
</template>

<script>
import { Box, Camera, LambertMaterial, PointLight, Renderer, Scene } from 'troisjs';
export default {
  components: { Box, Camera, LambertMaterial, PointLight, Renderer, Scene },
};
</script>
```
