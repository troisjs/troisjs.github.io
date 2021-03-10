# Textures

You can easily add texture to material :

- `Texture` ([source](https://github.com/troisjs/trois/blob/master/src/materials/Texture.js))
- `CubeTexture` ([source](https://github.com/troisjs/trois/blob/master/src/materials/CubeTexture.js))

### Map

```html
<PhongMaterial>
  <Texture src="map.jpg" />
  <Texture src="normal-map.jpg" id="normalMap" />
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
