# Installation

## Trois-only

To install in a Trois-only app:

`npm install three trois-renderer`

Then, instead of importing `createApp` from Vue (as in the [docs](https://v3.vuejs.org/api/global-api.html#createapp)), import `createApp` from `trois-renderer`:

```js
import { createApp } from 'trois-renderer'
import YourApp from 'YourApp.vue'

createApp(YourApp).mount('#app')
```

From there, you can build a Trois app like a regular Vue app.

## In HTML Apps

The easiest way to use a Trois app in an HTML page is to use an iframe. You can also render Vue apps separately and mount the Trois app in the HTML app:

```js
// Example Vite setup
import { createApp } from 'vue'
import { createApp as troisCreateApp } from 'trois-renderer'
import App from './App.vue'
import TroisApp from './TroisApp.vue'

// html app
const app = createApp(App)
app.mount('#app')

// trois app
const troisApp = troisCreateApp(TroisApp)
// assuming there's an element with ID `trois` in your HTML app
troisApp.mount('#trois')
```

See the [HTML example](https://github.com/troisjs/trois-renderer/tree/main/examples/html) for more implementation details.

Currently using a Trois app directly inside an HTML app isn't supported:

```html
<template>
    <section class="wrapper">
        <h1>Title</h1>

        <!-- Will not work -->
        <TroisCanvas>
            <!-- ... -->
        </TroisCanvas>
    </section>
</template>
```

 Mixing renderers in Vue 3 is something the Vue community is still working on - see [here](https://github.com/vuejs/vue-loader/pull/1645) for more information.