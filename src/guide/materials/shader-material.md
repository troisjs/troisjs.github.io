# ShaderMaterial

Creates a [THREE.ShaderMaterial](https://threejs.org/docs/#api/en/materials/ShaderMaterial) rendered with custom shaders.

```html
<Box>
  <ShaderMaterial />
</Box>
```

Source : https://github.com/troisjs/trois/blob/master/src/materials/ShaderMaterial.ts

### Props

<table>
  <tbody>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
    <tr>
      <td><code>uniforms</code></td>
      <td>Uniforms to pass to shader</td>
      <td>Object</td>
      <td></td>
    </tr>
    <tr>
      <td><code>vertexShader</code></td>
      <td>Vertex shader, as string</td>
      <td>String</td>
      <td></td>
    </tr>
    <tr>
      <td><code>fragmentShader</code></td>
      <td>Fragment shader, as string</td>
      <td>String</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Examples

### Adding textures

You can pass textures to shaders by adding a `Texture` with the prop `uniform` as a child of the material:

```html
<ShaderMaterial :fragmentShader="...">
  <Texture src="/my/texture/src.png" uniform="myCustomTexture"/>
</ShaderMaterial>
```

The texture will be set as a uniform sampler2D in the shader. The fragment shader in the example above would have access to the texture as:

```glsl
uniform sampler2D myCustomTexture;

void main(){
  gl_FragColor = texture2D(myCustomTexture, /* your UV vec2 */);
}
```