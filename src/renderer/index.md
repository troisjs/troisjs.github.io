# ✨ ThreeJS + VueJS 3 ⚡

The Trois renderer is a custom renderer for Vue 3, like [react-three-fiber](https://github.com/pmndrs/react-three-fiber) is for React.

You can use it to write code like this:

```html
  <TroisCanvas>
    <mesh :position-z="-5">
      <sphereGeometry />
      <meshBasicMaterial :wireframe="true" />
    </mesh>
  </TroisCanvas>
```

which creates:

<iframe src="https://codesandbox.io/embed/sad-tharp-y9i6n?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="sad-tharp-y9i6n"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

*Trois* is a french word, it means *Three*.
