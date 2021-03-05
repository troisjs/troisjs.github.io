# Scene

See [Scene.js](https://github.com/troisjs/trois/blob/master/src/core/Scene.js) and [THREE.Scene](https://threejs.org/docs/#api/en/scenes/Scene).

<table>
  <tbody>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
    <tr>
      <td><code>background</code></td>
      <td>Background color.</td>
      <td>String, Number</td>
      <td></td>
    </tr>
  </tbody>
</table>

::: tip
If you need a transparent renderer, you should use `alpha` on the [renderer](renderer).
:::

### Access ThreeJS scene

You should set a *ref* on the scene :

```html
<Scene ref="scene">
  ...
</Scene>
```

You can then access ThreeJS scene in your component script :

```js
const scene = this.$ref.scene.scene;
```
