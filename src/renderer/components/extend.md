# Extend

If you need to add a Three.js class that doesn't already exist in the [included components](http://localhost:3000/renderer/components/), you can do so using `app.extend`. For example:

```js
import { createApp } from 'trois-renderer-proof-of-concept'
import App from 'YourApp.vue'

// we'll be adding OrbitControls in this example, so let's import the OrbitControls class
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const app = createApp(App)

// tell the app to extend Trois to include OrbitControls
app.extend({ OrbitControls })

// You can add any number of new classes to the object:
// app.extend({ OrbitControls, AnotherClass, 'third-class': ThirdClass, ... })
// Each one register a component under the property name,
// so you could use the above classes with:
// <OrbitControls />
// <AnotherClass />
// <third-class />

// mount the app
app.mount('#app')
```

Then in your template:

```html
<template>
    <TroisCanvas>
        <OrbitControls />
    </TroisCanvas>
</template>
```

From there, you have full access to the component as a regular Trois prop:

```
<OrbitControls
    ref="controls"          // Access the created instance with `$refs.controls.instance`
    :args="[...]"           // Pass an array of args to the instantiation method
    :enableDamping="true"   // Set properties
    :dampingFactor="0.1"    // (etc)
/>
```