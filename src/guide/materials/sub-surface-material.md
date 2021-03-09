# Subsurface Material 

Subsurface scattering based on [this method](https://colinbarrebrisebois.com/2011/03/07/gdc-2011-approximating-translucency-for-a-fast-cheap-and-convincing-subsurface-scattering-look/).

This material is an implementation of the [shader material](./shader-material) using the shader in `three/examples/jsm/shaders/SubsurfaceScatteringShader.js`.

```html
<Box>
  <SubSurfaceMaterial />
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
  <tr><td><code>color</code></td><td>Material color.</td><td>String</td><td>#ffffff</td></tr>
  <tr><td><code>thicknessColor</code></td><td>Thickness color.</td><td>String</td><td>#ffffff</td></tr>
  <tr><td><code>thicknessDistortion</code></td><td>Thickness distortion.</td><td>Number</td><td><code>0.4</code></td></tr>
  <tr><td><code>thicknessAmbient</code></td><td>Ambient thickness.</td><td>Number</td><td><code>0.01</code></td></tr>
  <tr><td><code>thicknessAttenuation</code></td><td>Thickness attenuation.</td><td>Number</td><td><code>0.7</code></td></tr>
  <tr><td><code>thicknessPower</code></td><td>Thickness power.</td><td>Number</td><td><code>2</code></td></tr>
  <tr><td><code>thicknessScale</code></td><td>Thickness scale</td><td>Number</td><td><code>4</code></td></tr>
  <tr><td><code>transparent</code></td><td>Whether or not the material is transparent.</td><td>Boolean</td><td><code>false</code></td></tr>
  <tr><td><code>opacity</code></td><td>Material opacity.</td><td>Number</td><td><code>1</code></td></tr>
  <tr><td><code>vertexColors</code></td><td>Use vertex colors on material.</td><td>Boolean</td><td><code>false</code></td></tr>

</tbody>
</table>


