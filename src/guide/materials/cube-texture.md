# CubeTexture

Loads a [cube texture](//threejs.org/docs/#api/en/textures/CubeTexture) into a parent Material. See [Texture](./texture) for mor info.

```html
<Box>
  <BasicMaterial>
    <CubeTexture/>
  </BasicMaterial>
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
  <tr><td><code>path</code></td><td>Path to cube texture.</td><td>String</td><td></td></tr>
  <tr><td><code>urls</code></td><td>URLs to load.</td><td>Array</td><td><code>['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg']</code></td></tr>
  <tr><td><code>onLoad</code></td><td>Function to fire when all textures have loaded.</td><td>Function</td><td></td></tr>
  <tr><td><code>onProgress</code></td><td>Function to fire on load progress.</td><td>Function</td><td></td></tr>
  <tr><td><code>onError</code></td><td>Function to fire on load error.</td><td>Function</td><td></td></tr>
  <tr><td><code>id</code></td><td>Texture ID</td><td>String</td><td><code>'envMap'</code></td></tr>

  <tr><td><code>refraction</code></td><td>[?]</td><td>Boolean</td><td></td></tr>
  <tr><td><code>refractionRatio</code></td><td>[?]</td><td>Number</td><td><code>0.98</code></td></tr>
</tbody>
</table>