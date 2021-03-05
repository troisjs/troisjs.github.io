# Usage

TroisJS needs a [`Renderer`](renderer), a [`Camera`](camera) and a [`Scene`](scene) :

```vue
<template>
  <Renderer>
    <Camera :position="{ z: 100 }" />
    <Scene>     
      <Box :size="10">
        <BasicMaterial />
      </Box>
    </Scene>
  </Renderer>
</template>
```
