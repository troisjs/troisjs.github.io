## VR Button

The VR button allows to display an UI-Element related to entering VR.

### Implementation
1. Import the `VRButton` component
```js
import VRButton from 'troisjs/src/components/misc/VRButton.vue'
```
2. Place the button within your HTML. Be sure to include the `ref`
```html
<VRButton ref="vrbutton" />
```
3. Call `init()` within `mounted()` lifecycle hook of your code.
```js
this.$refs.vrbutton.init(this.$refs.renderer.renderer)
```

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
      <td><code>enterMessage</code></td>
      <td>Shows up on the button when VR-Mode is not activated</td>
      <td>String</td>
      <td>'ENTER VR'</td>
    </tr>
    <tr>
      <td><code>exitMessage</code></td>
      <td>Shows up on the button when VR-Mode is activated</td>
      <td>String</td>
      <td>'EXIT VR'</td>
    </tr>
  </tbody>
</table>
