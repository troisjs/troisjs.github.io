# Postprocessing

You can use `EffectComposer` ([source](https://github.com/troisjs/trois/blob/master/src/effects/EffectComposer.ts)) to easily add post processing effects.

Passes :

- `BokehPass` ([source](https://github.com/troisjs/trois/blob/master/src/effects/BokehPass.ts))
- `FilmPass` ([source](https://github.com/troisjs/trois/blob/master/src/effects/FilmPass.ts))
- `FXAAPass` ([source](https://github.com/troisjs/trois/blob/master/src/effects/FXAAPass.ts))
- `HalftonePass` ([source](https://github.com/troisjs/trois/blob/master/src/effects/HalftonePass.ts))
- `Renderpass` ([source](https://github.com/troisjs/trois/blob/master/src/effects/Renderpass.ts))
- `SMAAPass` ([source](https://github.com/troisjs/trois/blob/master/src/effects/SMAAPass.ts))
- `UnrealBloomPass` ([source](https://github.com/troisjs/trois/blob/master/src/effects/UnrealBloomPass.ts))

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
