# Materials (wip)

You can easily create the following materials :

- `BasicMaterial` ([source](https://github.com/troisjs/trois/blob/master/src/materials/BasicMaterial.js), [threejs doc](https://threejs.org/docs/index.html#api/en/materials/MeshBasicMaterial))
- `LambertMaterial` ([source](https://github.com/troisjs/trois/blob/master/src/materials/LambertMaterial.js), [threejs doc](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial))
- `MatcapMaterial` ([source](https://github.com/troisjs/trois/blob/master/src/materials/MatcapMaterial.js), [threejs doc](https://threejs.org/docs/index.html#api/en/materials/MeshMatcapMaterial))
- `PhongMaterial` ([source](https://github.com/troisjs/trois/blob/master/src/materials/PhongMaterial.js), [threejs doc](https://threejs.org/docs/index.html#api/en/materials/MeshPhongMaterial))
- `PhysicalMaterial` ([source](https://github.com/troisjs/trois/blob/master/src/materials/PhysicalMaterial.js), [threejs doc](https://threejs.org/docs/index.html#api/en/materials/MeshPhysicalMaterial))
- `StandardMaterial` ([source](https://github.com/troisjs/trois/blob/master/src/materials/StandardMaterial.js), [threejs doc](https://threejs.org/docs/index.html#api/en/materials/MeshStandardMaterial))
- `ToonMaterial` ([source](https://github.com/troisjs/trois/blob/master/src/materials/ToonMaterial.js), [threejs doc](https://threejs.org/docs/index.html#api/en/materials/MeshToonMaterial))

Example :

```html
<Box>
  <PhongMaterial color="#ffffff" />
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
  <tr><td><code>color</code></td><td>Color</td><td>String, Number</td><td>#ffffff</td></tr>
  <tr><td><code>depthTest</code></td><td>Whether to have depth test enabled when rendering this material.</td><td>Boolean</td><td>true</td></tr>
  <tr><td><code>depthWrite</code></td><td>Whether rendering this material has any effect on the depth buffer.</td><td>Boolean</td><td>true</td></tr>
  <tr><td><code>flatShading</code></td><td>Define whether the material is rendered with flat shading.</td><td>Boolean</td><td>false</td></tr>
  <tr><td><code>fog</code></td><td>Whether the material is affected by fog.</td><td>Boolean</td><td>true</td></tr>
  <!-- <tr><td><code>id</code></td><td>Material ID</td><td>String</td><td> </td></tr> -->
  <tr><td><code>opacity</code></td><td>Float in the range of 0.0 - 1.0 indicating how transparent the material is.</td><td>Number</td><td>1</td></tr>
  <tr><td><code>side</code></td><td>Defines which side of faces will be rendered - front, back or both.</td><td>Number</td><td>THREE.FrontSide</td></tr>
  <tr><td><code>transparent</code></td><td>Defines whether this material is transparent.</td><td>Boolean</td><td>false</td></tr>
  <tr><td><code>vertexColors</code></td><td>Defines whether vertex coloring is used.</td><td>Boolean</td><td>false</td></tr>
</tbody>
</table>


### Access three object

You should set a *ref* on your material :

```html
<PhongMaterial ref="material" />
```

You can then access three material object in your component script :

```js
const material = this.$ref.material.material;
```
