# Standard Material

Creates a [standard material](https://threejs.org/docs/#api/en/materials/MeshStandardMaterial), a more accurate but more computationally expensive lighting model than Lambert or Phong.

```html
<Box>
  <StandardMaterial color="#ffffff" />
</Box>
```

### Props

Inherits all [base props](./#props) and accepts all [basic material properties](https://threejs.org/docs/#api/en/materials/MeshStandardMaterial). Additionally:


<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr><td><code>aoMapIntensity</code></td><td>Ambient occlusion effect intensity.</td><td>Number</td><td><code>1</code></td></tr>
  <tr><td><code>bumpScale</code></td><td>How much the bump map affects the material.</td><td>Number</td><td><code>1</code></td></tr>
  <tr><td><code>displacementBias</code></td><td>The offset of the displacement map's values on the mesh's vertices. Without a displacement map set, this value is not applied. Default is 0.</td><td>Number</td><td><code>1</code></td></tr>
  <tr><td><code>emissive</code></td><td>Emissive color of the material, unaffected by other lighting.</td><td>Number</td><td><code>0</code></td></tr>
  <tr><td><code>emissiveIntensity</code></td><td>Intensity of the emissive light.</td><td>Number</td><td><code>1</code></td></tr>
  <tr><td><code>envMapIntensity</code></td><td>Scaled effect of the environment map.</td><td>Number</td><td><code>1</code></td></tr>
  <tr><td><code>lightMapIntensity</code></td><td>Intensity of baked light.</td><td>Number</td><td><code>1</code></td></tr>
  <tr><td><code>metalness</code></td><td>How much the bump map affects the material.</td><td>Number</td><td><code>1</code></td></tr>
  <tr><td><code>normalScale</code></td><td>How much the normal map affects the material.</td><td>Vector2</td><td><code>new Vector2(1,1</code></td></tr>
  <tr><td><code>roughness</code></td><td>How rough the material appears. 0 = mirror reflection, 1 = fully diffuse.</td><td>Number</td><td><code>1</code></td></tr>
  <tr><td><code>refractionRatio</code></td><td><a href="https://threejs.org/docs/#api/en/materials/MeshStandardMaterial.refractionRatio" target="_blank">Refraction ratio</a> of material.</td><td>Number</td><td><code>0.98</code></td></tr>
  <tr><td><code>wireframe</code></td><td>Whether or not to render the material as a wireframe.</td><td>Boolean</td><td><code>false</code></td></tr>
</tbody>
</table>