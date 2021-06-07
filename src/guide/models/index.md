# Models

TroisJS contains loaders for `.gltf`/`.glb` and `.fbx` files.

```html
<GltfModel
    src="/path/to/your/model.gltf"
    @load="onReady"
    @progress="onProgress"
    @error="onError"
/>

<!-- FBX Model has the same props and events but loads FBX files -->
<FbxModel
    src="/path/to/your/model.fbx"
    @load="onReady"
    @progress="onProgress"
    @error="onError"
/>
```

## Props
| Name  | Type   | Notes                                   |
| ----- | ------ | --------------------------------------- |
| `src` | String | Path to `.gltf`, `.glb`, or `.fbx` file |

## Events
| Event      | Parameters                | Notes            |
| ---------- | ------------------------- | ---------------- |
| `error`    | `error: ErrorEvent`       | On load error    |
| `load`     | `model: Object3D`         | On load complete |
| `progress` | `progress: ProgressEvent` | On load progress |

## Notes/FAQs
<details>
<summary>Why aren't ambient lights affecting the model?</summary>

Occasionally, models will have their materials' metalness set to 0 and look unaffected by AmbientLights. To fix (see [here](https://discourse.threejs.org/t/ambient-light-and-gltf-models-not-working-results-in-black-model/7428/5) for explanation):

```html
<template>
    <!-- ... -->
        <GltfModel src="..." @load="onReady"/>
    <!-- ... -->
</template>

<script>
export default {
    methods: {
        onReady(model){
            model.traverse(o => {
                if (o.isMesh){
                    // handle both multiple and single materials
                    const asArray = Array.isArray(o.material) ? o.material : [o.material]
                    // 0 works for matte materials - change as needed
                    asArray.forEach(mat => mat.metalness = 0)
                }
            })
        }
    }
}
</script>
```
</details>