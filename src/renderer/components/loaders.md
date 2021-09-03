# Loaders

There are three ways to handle loaders in Trois: by using a shortcut method, by using the verbose method, and by manually creating the loader in JS.

## Shortcut 

When using any component ending in `Loader` and providing `src` and `attach` props, your loader will automatically run `loader.load` and attach the result to the parent as `$attached.<attach>`.

This makes creating materials with textures look like this:

```html
<meshStandardMaterial map="$attached.map">
    <textureLoader src="/your/texture.jpg" attach="map"/>
</meshStandardMaterial>
```

You can also apply additional maps to your material:

```html
<meshStandardMaterial 
    map="$attached.map" 
    displacementMap="$attached.displace"
    normalMap="$attached.normal"
>
    <textureLoader src="/your/texture.jpg" attach="map"/>
    <textureLoader src="/your/displacement.jpg" attach="displace"/>
    <textureLoader src="/your/normal.jpg" attach="normal"/>
</meshStandardMaterial>
```

## Verbose

Sometimes you'll want more control over your loader:

```html
<meshStandardMaterial>
    <textureLoader :load="['/your/texture.jpg', onLoad, null, onError]">
</meshStandardMaterial>
```

This assumes you have `onLoad` and `onError` methods in your component. This runs the `load` method using the provided arguments - you'll need to handle what to do with the loaded result in the `onLoad` method.

## JS

Sometimes the best course will be to create your loader in JS:

```html
<template>
    <TroisCanvas>
        <mesh v-if="font">
            <textGeometry :args="['your text', { font }]"/>
        </mesh>
    </TroisCanvas>
</template>

<script>
import { FontLoader } from 'three'

export default {
    data(){
        return {
            font: null
        }
    },
    mounted(){
        new FontLoader().load(
            '/your/font.json', 
            loadedFont => this.font = loadedFont
        )
    }
}
</script>
```

This is useful, for example, if you need to hide a mesh until a related asset (font, texture, etc) has been fully loaded.

