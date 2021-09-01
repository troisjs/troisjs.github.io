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

Currently, the easiest way to use a Trois app in an HTML page is to use an iframe. 

Mixing renderers in Vue 3 is something the Trois team and others is still working on - see [here](https://github.com/vuejs/vue-loader/pull/1645) for more information.