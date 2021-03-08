# Phong Material 

Creates a [shader material](https://threejs.org/docs/#api/en/materials/ShaderMaterial) rendered with custom shaders.

```html
<Box>
  <ShaderMaterial />
</Box>
```

### Props

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr><td><code>id</code></td><td>Shader ID</td><td>String</td><td></td></tr>
  <tr><td><code>uniforms</code></td><td>Uniforms to pass to shader</td><td>Object</td><td></td></tr>
  <tr><td><code>vertexShader</code></td><td>Vertex shader, as string</td><td>String</td><td></td></tr>
  <tr><td><code>fragmentShader</code></td><td>Fragment shader, as string</td><td>String</td><td></td></tr>
</tbody>
</table>