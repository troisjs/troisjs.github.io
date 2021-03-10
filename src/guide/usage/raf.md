# Render loop

TroisJS launch a `requestAnimationFrame` loop to render the scene, you can use `onBeforeRender()` to execute your code before each frame.

::: warning
The render loop usually runs at 60fps, don't use reactivity to update troisjs components, you should directly update ThreeJS objects. See [here](https://github.com/troisjs/trois/issues/17#issuecomment-796002436) for more information.
:::

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
