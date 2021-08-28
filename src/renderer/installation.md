# Installation

## Trois-only

To install in a Trois-only app:

`npm install trois-renderer-proof-of-concept`

Then, instead of importing `createApp` from Vue (as in the [docs](https://v3.vuejs.org/api/global-api.html#createapp)), import `createApp` from `trois-renderer-proof-of-concept`:

```js
import { createApp } from 'trois-renderer-proof-of-concept'
import YourApp from 'YourApp.vue'

createApp(YourApp).mount('#app')
```

From there, you can build a Trois app like a regular Vue app.

## In HTML Apps

TODO
