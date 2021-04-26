# PhongMaterial 

Creates a [THREE.MeshPhongMaterial](https://threejs.org/docs/#api/en/materials/MeshPhongMaterial) (shiny surface with specular highlights).

```html
<Box>
  <PhongMaterial color="#ffffff" />
</Box>
```

Source : https://github.com/troisjs/trois/blob/master/src/materials/PhongMaterial.ts

### Props

Inherits all [base props](./#props) and accepts the following :

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr><td><code>emissive</code></td><td>Emissive color of the material.</td><td>String, Number</td><td><code>0</code></td></tr>
  <tr><td><code>emissiveIntensity</code></td><td>Intensity of the emissive color.</td><td>Number</td><td><code>1</code></td></tr>
  <tr><td><code>reflectivity</code></td><td>Amount of reflectivity</td><td>Number</td><td><code>1</code></td></tr>
  <tr><td><code>shininess</code></td><td>Amount of shininess</td><td>Number</td><td><code>30</code></td></tr>
  <tr><td><code>specular</code></td><td>Specular color of the material.</td><td>String, Number</td><td><code>0x111111</code></td></tr>

</tbody>
</table>