# Postprocessing

You can use `EffectComposer` ([source](https://github.com/troisjs/trois/blob/master/src/effects/EffectComposer.js)) to easily add post processing effects.

Passes :

- `BokehPass` ([source](https://github.com/troisjs/trois/blob/master/src/effects/BokehPass.js))
- `FilmPass` ([source](https://github.com/troisjs/trois/blob/master/src/effects/FilmPass.js))
- `FXAAPass` ([source](https://github.com/troisjs/trois/blob/master/src/effects/FXAAPass.js))
- `HalftonePass` ([source](https://github.com/troisjs/trois/blob/master/src/effects/HalftonePass.js))
- `Renderpass` ([source](https://github.com/troisjs/trois/blob/master/src/effects/Renderpass.js))
- `SMAAPass` ([source](https://github.com/troisjs/trois/blob/master/src/effects/SMAAPass.js))
- `UnrealBloomPass` ([source](https://github.com/troisjs/trois/blob/master/src/effects/UnrealBloomPass.js))

### Example

```vue
<template>
  <Renderer>
    <Camera :position="{ z: 10 }" />
    <Scene>
      <PointLight :position="{ z: 50 }" />
      <Box :size="1">
        <LambertMaterial />
      </Box>
    </Scene>
    <EffectComposer>
      <RenderPass />
      <UnrealBloomPass :strength="1" />
      <HalftonePass :radius="1" :scatter="0" />
    </EffectComposer>
  </Renderer>
</template>
```
