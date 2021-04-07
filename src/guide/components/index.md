# Components

Extra components that require manual imports, like ThreeJS's Examples directory (see "Examples" section [here](https://threejs.org/docs/#manual/en/introduction/Installation)).

## GLTFViewer

See [GLTFViewer.vue](https://github.com/troisjs/trois/blob/master/src/components/viewers/GLTFViewer.vue).

## NoisyImage

See [NoisyImage.js](https://github.com/troisjs/trois/blob/master/src/components/noisy/NoisyImage.js).

## NoisyPlane

See [NoisyPlane.js](https://github.com/troisjs/trois/blob/master/src/components/noisy/NoisyPlane.js).

## NoisySphere

See [NoisySphere.js](https://github.com/troisjs/trois/blob/master/src/components/noisy/NoisySphere.js).

## NoisyText

See [NoisyText.js](https://github.com/troisjs/trois/blob/master/src/components/noisy/NoisyText.js).

## Slider1

See [Slider1.vue](https://github.com/troisjs/trois/blob/master/src/components/sliders/Slider1.vue).

## Stats

Measure a renderer's stats using [stats.js](https://github.com/mrdoob/stats.js/).

```html
<template>
  <!-- ... -->
  <Renderer>
    <!-- default options, no more setup needed -->
    <!-- must be child of a Renderer -->
    <Stats/>

    <!-- prevent default setup and handle manually -->
    <Stats no-setup @created="doSomething"/>
  </Render>
  <!-- ... -->
</template>

<script>
import Stats from 'troisjs/src/components/misc/Stats'

export default {
  components: { Stats },
  methods: {
    doSomething(stats){
      // do something with `stats` (optional)
    }
  }
}
</script>
```