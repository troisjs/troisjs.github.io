# CDN

You can import TroisJS as a CDN package (take a look at these [codepen examples](https://codepen.io/collection/AxoWoz)).

::: warning ThreeJS/VueJS versions (TroisJS 0.3.3)
If you need to import things from ThreeJS/VueJS, you should use :
- ThreeJS **0.132.0** (https://cdn.skypack.dev/three@0.134.0/build/three.module.js)
- VueJS **3.2.20** (https://unpkg.com/vue@3.2.20/dist/vue.esm-browser.prod.js)
:::

::: warning PascalCase vs kebab-case
If you are using DOM template, you should always use **kebab-case** and **closing tags**.
:::

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TroisJS</title>
  <style>
    html, body { margin:0; }
    canvas { display: block; }
  </style>
</head>
<body>

  <div id="app">
    <renderer ref="renderer" antialias orbit-ctrl resize="window">
      <camera :position="{ z: 10 }"></camera>
      <scene>
        <point-light :position="{ y: 50, z: 50 }"></point-light>
        <box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
          <lambert-material></lambert-material>
        </box>
      </scene>
    </renderer>
  </div>

  <script type="module">
    import { createApp } from 'https://unpkg.com/troisjs@0.3.3/build/trois.module.cdn.min.js';
    createApp({
      mounted() {
        const renderer = this.$refs.renderer
        const box = this.$refs.box.mesh
        renderer.onBeforeRender(() => {
          box.rotation.x += 0.01
        })
      }
    }).mount('#app')
  </script>

</body>
</html>
```

**PascalCase Example**

```html
<div id="app"></div>

<script type="module">
  import { createApp } from 'https://unpkg.com/troisjs@0.3.1/build/trois.module.cdn.min.js';
  createApp({
    template: `
      <Renderer ref="renderer" antialias orbit-ctrl resize="window">
        <Camera :position="{ z: 10 }" />
        <Scene>
          <PointLight :position="{ y: 50, z: 50 }" />
          <Box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
            <LambertMaterial />
          </Box>
        </Scene>
      </Renderer>
    `,
    mounted() {
      const renderer = this.$refs.renderer
      const box = this.$refs.box.mesh
      renderer.onBeforeRender(() => {
        box.rotation.x += 0.01
      })
    }
  }).mount('#app')
</script>
```
