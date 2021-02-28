# Usage

TroisJS needs a `Renderer`, a `Camera` and a `Scene`, e.g. :

```vue
<template>
  <Renderer>
    <Camera :position="{ z: 100 }" />
    <Scene>     
      <Box :size="10">
        <BasicMaterial />
      </Box>
    </Scene>
  </Renderer>
</template>
```

## Renderer

See [Renderer.js](https://github.com/troisjs/trois/blob/master/src/core/Renderer.js) and [THREE.WebGLRenderer](https://threejs.org/docs/#api/en/renderers/WebGLRenderer).

#### Props from `THREE.WebGLRenderer`

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr><td><code>alpha</code></td><td>Whether the canvas contains an alpha (transparency) buffer or not.</td><td>Boolean</td><td>false</td></tr>
  <tr><td><code>antialias</code></td><td>Whether to perform antialiasing.</td><td>Boolean</td><td>true</td></tr>
  <tr><td><code>autoClear</code></td><td>Defines whether the renderer should automatically clear its output before rendering a frame.</td><td>Boolean</td><td>true</td></tr>
</tbody>
</table>

#### Custom Props

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr><td><code>mouseMove</code></td><td>Listen for mousemove. Use <code>'body'</code> to add listener on <code>body</code>. Use three.mouse to get the position.</td><td>Boolean, String</td><td>false</td></tr>
  <tr><td><code>mouseRaycast</code></td><td>Raycast mouse position. Use three.mouseV3 to get the position.</td><td>Boolean</td><td>false</td></tr>
  <tr><td><code>orbitCtrl</code></td><td>Enable/disable OrbitControls. If value is an Object, it will be used to configure OrbitControls.</td><td>Boolean, Object</td><td>false</td></tr>
  <tr><td><code>resize</code></td><td>Resize canvas on window resize.</td><td>Boolean, String, Element</td><td>'window'</td></tr>
  <tr><td><code>shadow</code></td><td>Use shadow or not.</td><td>Boolean</td><td>false</td></tr>
  <tr><td><code>width</code></td><td>Fixed width</td><td>Number</td><td></td></tr>
  <tr><td><code>height</code></td><td>Fixed height</td><td>Number</td><td></td></tr> 
</tbody>
</table>

## Camera

See [PerspectiveCamera.js](https://github.com/troisjs/trois/blob/master/src/core/PerspectiveCamera.js) and [THREE.PerspectiveCamera](https://threejs.org/docs/#api/en/cameras/PerspectiveCamera).

#### Props from `THREE.PerspectiveCamera`

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr><td><code>aspect</code></td><td>Camera frustum aspect ratio.</td><td>Number</td><td>1</td></tr>
  <tr><td><code>far</code></td><td>Camera frustum far plane.</td><td>Number</td><td>2000</td></tr>
  <tr><td><code>fov</code></td><td>Camera frustum vertical field of view.</td><td>Number</td><td>50</td></tr>
  <tr><td><code>near</code></td><td>Camera frustum near plane.</td><td>Number</td><td>0.1</td></tr>
  <tr><td><code>position</code></td><td>Camera position.</td><td>Object</td><td>{ x: 0, y: 0, z: 0 }</td></tr>
</tbody>
</table>

## Scene

See [Scene.js](https://github.com/troisjs/trois/blob/master/src/core/Scene.js) and [THREE.Scene](https://threejs.org/docs/#api/en/scenes/Scene).

<table>
<tbody>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
  </tr>
  <tr><td><code>background</code></td><td>Background color.</td><td>String, Number</td><td></td></tr>
</tbody>
</table>
