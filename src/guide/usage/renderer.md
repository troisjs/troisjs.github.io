# Renderer

See [Renderer.js](https://github.com/troisjs/trois/blob/master/src/core/Renderer.js) and [THREE.WebGLRenderer](https://threejs.org/docs/#api/en/renderers/WebGLRenderer).

### Props from `THREE.WebGLRenderer`

<table>
  <tbody>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
    <tr>
      <td><code>alpha</code></td>
      <td>Whether the canvas contains an alpha (transparency) buffer or not.</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>antialias</code></td>
      <td>Whether to perform antialiasing.</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>autoClear</code></td>
      <td>Defines whether the renderer should automatically clear its output before rendering a frame.</td>
      <td>Boolean</td>
      <td>true</td>
    </tr>
  </tbody>
</table>

### Custom Props

<table>
  <tbody>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
    <tr>
      <td><code>mouseMove</code></td>
      <td>
        Listen for mousemove. Use <code>'body'</code> to add listener on <code>body</code>. Use <code>renderer.three.mouse</code> to get the position.
      </td>
      <td>Boolean, String</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>mouseRaycast</code></td>
      <td>Raycast mouse position. Use <code>renderer.three.mouseV3</code> to get the position.</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>orbitCtrl</code></td>
      <td>Enable/disable OrbitControls. If value is an Object, it will be used to configure OrbitControls.</td>
      <td>Boolean, Object</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>resize</code></td>
      <td>
        Resize canvas on window resize.
        <ul>
          <li><code>false</code> : disabled</li>
          <li><code>true</code> : parent size</li>
          <li><code>'window'</code> : window size</li>
        </ul>
      </td>
      <td>Boolean, String</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>shadow</code></td>
      <td>Use shadow or not.</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td><code>width</code></td>
      <td>Fixed width</td>
      <td>Number</td>
      <td></td>
    </tr>
    <tr>
      <td><code>height</code></td>
      <td>Fixed height</td>
      <td>Number</td>
      <td></td>
    </tr>
  </tbody>
</table>

### Access ThreeJS renderer

You should set a *ref* on the renderer :

```html
<Renderer ref="renderer">
  ...
</Renderer>
```

You can then access ThreeJS renderer in your component script :

```js
const renderer = this.$ref.renderer.renderer;
```
