# Camera

See [PerspectiveCamera.ts](https://github.com/troisjs/trois/blob/master/src/core/PerspectiveCamera.ts) and [THREE.PerspectiveCamera](https://threejs.org/docs/#api/en/cameras/PerspectiveCamera).

### Props from `THREE.PerspectiveCamera`

<table>
  <tbody>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
    <tr>
      <td><code>aspect</code></td>
      <td>Camera frustum aspect ratio.</td>
      <td>Number</td>
      <td>1</td>
    </tr>
    <tr>
      <td><code>far</code></td>
      <td>Camera frustum far plane.</td>
      <td>Number</td>
      <td>2000</td>
    </tr>
    <tr>
      <td><code>fov</code></td>
      <td>Camera frustum vertical field of view.</td>
      <td>Number</td>
      <td>50</td>
    </tr>
    <tr>
      <td><code>near</code></td>
      <td>Camera frustum near plane.</td>
      <td>Number</td>
      <td>0.1</td>
    </tr>
    <tr>
      <td><code>position</code></td>
      <td>Camera position.</td>
      <td>Object</td>
      <td>{ x: 0, y: 0, z: 0 }</td>
    </tr>
    <tr>
      <td><code>lookAt</code></td>
      <td>Camera target</td>
      <td>Object</td>
      <td></td>
    </tr>
  </tbody>
</table>

### Access ThreeJS camera

You should set a *ref* on the camera :

```html
<Camera ref="camera" />
```

You can then access ThreeJS camera in your component script :

```js
const camera = this.$ref.camera.camera;
```
