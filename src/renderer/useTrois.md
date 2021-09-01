# useTrois

Sometimes you'll need to access the current Scene or Camera, or get some other information that Trois normally handles behind the scenes. To do so, you can use the `useTrois` export from the Trois renderer.

It's helpful to be familiar with [Vue 3 refs](https://v3.vuejs.org/api/refs-api.html) before working with `useTrois`.

## Setup

This is the recommended flow for `useTrois`:

```html
<script>
import { watch } from 'vue'
import * as THREE from 'three'
import { useTrois } from 'trois-renderer'

export default {
    setup(){
        // useTrois is a function that returns refs to Trois internals,
        // so let's save those refs to a variable called `trois`
        const trois = useTrois()

        // we now have access to `this.trois` for Trois internals
        return { trois }
    },
    mounted(){
        // since Trois may or may not have finished setting up the camera
        // when `mounted` runs, this is the safest way to guarantee access to the camera:
        watch(
            // we need to watch the `value` of the camera since `trois.camera` 
            // is a Vue ref (https://v3.vuejs.org/api/refs-api.html)
            () => this.trois.camera.value,
            camera => {
                // ignore if no camera
                if (!camera) return

                // you now have guaranteed access to the camera - for example, you can do:
                camera.lookAt(new THREE.Vector3(0, 0, 0))
            },
            // tell the watcher to fire immediately
            { immediate: true },
        )
    },
    methods: {
        moveCamera(){
            // You can try accessing the camera with `this.trois` at any time.
            // Note that the camera is not guaranteed to be present, so it's a 
            // good idea to include a null check.
            const camera = this.trois.camera.value
            // cancel if no camera
            if (!camera) return

            // move the camera to a random position between (-5, -5, -5) and (5, 5, 5)
            camera.position.set(
                Math.random() * 10 - 5,
                Math.random() * 10 - 5, 
                Math.random() * 10 - 5
            )
            // look at the center of the scene
            camera.lookAt(new THREE.Vector3(0, 0, 0))
        }
    }
}
</script>
```

## Properties

`useTrois` contains the following properties:

| Name                       | Type              | Default                                 | Notes                                                                                                                                                                                                                                                            |
| -------------------------- | ----------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `autoAttach`               | Array             | `['geometry', 'material']`              | Component types to auto-attach to parents. Any component ending with a name in this list will be attached to its parent as `$attached.<autoAttachName>`. For example, `geometry` in this list will attach a `boxGeometry` to its parent as `$attached.geometry`. |
| `autoAttachArray`          | Array             | `[]`                                    | Components to auto-attach to a parent's array. Not currently implemented.                                                                                                                                                                                        |
| `camera`                   | `THREE.Camera`    | Default scene camera                    | The camera currently rendering.                                                                                                                                                                                                                                  |
| `initialized`              | Boolean           | `false`                                 | Whether or not Trois has been initialized. Set to `true` when a `TroisCanvas` is created.                                                                                                                                                                        |
| `mouseDown`                | Boolean           | `false`                                 | Whether or not the left mouse button is currently down.                                                                                                                                                                                                          |
| `mousePos`                 | `THREE.Vector2`   | `new THREE.Vector2(Infinity, Infinity)` | The mouse position in normalized device coordinates (NDC) - bottom left (-1, -1), top right (1, 1).                                                                                                                                                              |
| `raycaster`                | `THREE.Raycaster` | null                                    | The built-in raycaster to handle `@pointerenter`, `@click`, etc [Trois events](/renderer/components/#events). Only created if a component in your project uses one of these events.                                                                              |
| `runDefaultRenderFunction` | Boolean           | `true`                                  | Whether or not to run the default Trois render function. Set to `false` if you have your own function you'd like to run.                                                                                                                                         |
| `renderer`                 | `THREE.Renderer`  | Default renderer                        | The renderer currently being used.                                                                                                                                                                                                                               |
| `scene`                    | `THREE.Scene`     | Default scene                           | The scene currently being used.                                                                                                                                                                                                                                  |
| `size`                     | Object            | `{ width: 0, height: 0 }`               | The renderer size. Trois should keep this up to date automatically.                                                                                                                                                                                              |