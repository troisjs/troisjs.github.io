# MatcapMaterial

Creates a [THREE.MeshMatcapMaterial](https://threejs.org/docs/#api/en/materials/MeshMatcapMaterial) with baked lighting and color that can cast, but not receive, shadows.

```html
<Box>
  <MatcapMaterial name="392307_B3AE7D_6D5618_847C42" />
</Box>
```

You can use the name of any of [these](https://github.com/emmelleppi/matcaps) matcaps in the `name` prop. Click on a matcap image, then copy the name you'd like to use.

Source : https://github.com/troisjs/trois/blob/master/src/materials/MatcapMaterial.ts

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
  <tr><td><code>name</code></td><td>Name of matcap (from <a href="https://github.com/emmelleppi/matcaps" target="_blank">this repo</a>) to use. Overrides <code>src</code> if set.</td><td>String</td><td></td></tr>
  <tr><td><code>src</code></td><td>URL for matcap image.</td><td>String</td><td></td></tr>

</tbody>
</table>