# Textures

You can easily add texture to material :

- `Texture` ([source](https://github.com/troisjs/trois/blob/master/src/materials/Texture.ts))
- `CubeTexture` ([source](https://github.com/troisjs/trois/blob/master/src/materials/CubeTexture.ts))

### Map

```html
<PhongMaterial>
  <Texture src="map.jpg" />
  <Texture src="normal-map.jpg" name="normalMap" />
</PhongMaterial>
```

### EnvMap

```html
<BasicMaterial>
  <CubeTexture path="/cube_texture/" />
</BasicMaterial>
```

### Refraction

```html
<BasicMaterial>
  <CubeTexture path="/cube_texture/" refraction :refraction-ratio="0.95" />
</BasicMaterial>
```

### Shader

```html
<ShaderMaterial :fragmentShader="...">
  <!-- uniform prop is required - will be uniform name in texture -->
  <Texture src="/my/texture/src.png" uniform="myCustomTexture"/>
</ShaderMaterial>
```
