# GLTF

You can load .glb/.gltf models with the built-in `<gltf>` component:

```html
<template>
    <TroisCanvas>
        <gltf src="/your/model.glb"/>
    </TroisCanvas>
</template>
```

A GLTF ends up being added to the scene as a Three.js `Group`, so you can change all `Object3D` properties as if the `<gltf>` were a `<group>`:

```html
<template>
    <TroisCanvas>
        <gltf 
            src="/your/model.glb" 
            position-z="-10" 
            scale-y="5"
        />
    </TroisCanvas>
</template>
```
