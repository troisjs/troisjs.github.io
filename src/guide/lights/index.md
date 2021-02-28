# Lights (wip)

You can easily create the following lights :

- `AmbientLight` ([source](https://github.com/troisjs/trois/blob/master/src/lights/AmbientLight.js), [threejs doc](https://threejs.org/docs/index.html#api/en/lights/AmbientLight))
- `DirectionalLight` ([source](https://github.com/troisjs/trois/blob/master/src/lights/DirectionalLight.js), [threejs doc](https://threejs.org/docs/index.html#api/en/lights/DirectionalLight))
- `PointLight` ([source](https://github.com/troisjs/trois/blob/master/src/lights/AmbientLPointLightight.js), [threejs doc](https://threejs.org/docs/index.html#api/en/lights/PointLight))
- `SpotLight` ([source](https://github.com/troisjs/trois/blob/master/src/lights/AmbientLight.js), [threejs doc](https://threejs.org/docs/index.html#api/en/lights/SpotLight))

Example :

```html
<PointLight color="#ffffff" :intensity="0.5" />
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
  <tr><td><code>castShadow</code></td><td>Casting shadow</td><td>Boolean</td><td>false</td></tr>
  <tr><td><code>color</code></td><td>Light color</td><td>String, Number</td><td>#ffffff</td></tr>
  <tr><td><code>intensity</code></td><td>Light intensity</td><td>Number</td><td>1</td></tr>
  <tr><td><code>position</code></td><td>Light position</td><td>Object</td><td>{ x: 0, y: 0, z: 0 }</td></tr>
  <tr><td><code>shadowMapSize</code></td><td>Shadow map size</td><td>Object</td><td>{ width: 512, height: 512 }</td></tr>
</tbody>
</table>

### Access three object

You should set a *ref* on your light :

```html
<PointLight ref="light" />
```

You can then access three light object in your component script :

```js
const light = this.$ref.light.light;
```
