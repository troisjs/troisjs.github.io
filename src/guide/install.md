# Installation

::: tip CDN
You don't need to install TroisJS to play with it, please read [how to use TroisJS via CDN](cdn).
:::

## New project

Download the [TroisJS/ViteJS Starter App](https://raw.githubusercontent.com/troisjs/troisjs.github.io/HEAD/src/public/assets/troisjs.zip).

Unzip it, and :

```
cd troisjs
npm install
npm run dev
```

Or :

```
cd troisjs
yarn
yarn dev
```

## Existing VueJS 3 project

`npm install three@0.127 troisjs`

Or `yarn add three@0.127 troisjs`

### Vue plugin

```js
import { TroisJSVuePlugin } from 'troisjs';
app.use(TroisJSVuePlugin);
```

::: warning
Don't use the plugin if you need tree shaking and typescript support.
:::

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

## Typescript

TroisJS v0.3 has been rewritten using Typescript, if you want to have a good support :

- Use Visual Studio Code, with Volar extension : https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar
- Read this : https://v3.vuejs.org/guide/typescript-support.html
- Don't use TroisJS plugin and import the components
