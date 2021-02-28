# Shadows

To enable shadows :

- set `shadow` on `Renderer`,
- set `cast-shadow` on light,
- set `cast-shadow`/`receive-shadow` on mesh.

Example :

```html
<Renderer shadow>
  <Camera :position="{ z: 100 }" />
  <Scene>
    <PointLight :position="{ y: 50, z: 50 }" cast-shadow :shadow-map-size="{ width: 512, height: 512 }" />
    <Box :size="10" :rotation="{ x: 1, z: 1 }" cast-shadow>
      <LambertMaterial />
    </Box>
    <Plane :width="100" :height="100" :position="{ z: -20 }" receive-shadow>
      <LambertMaterial />
    </Plane>
  </Scene>
</Renderer>
```
