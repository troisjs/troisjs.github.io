# Core Concepts

## `TroisCanvas`
A Trois app needs to be wrapped in a `TroisCanvas` component:

```html
<TroisCanvas>
    <!-- Your code -->
</TroisCanvas>
```

In a .vue [single file component](https://v3.vuejs.org/guide/single-file-component.html#single-file-components), this will be inside the `<template>` tag.

## Three.js and Trois

Most Trois concepts are direct translations of Three.js concepts - let's start with [meshes](https://threejs.org/docs/index.html?q=mesh#api/en/objects/Mesh) as an example.

A standard Three.js mesh requires a geometry and a material. Some example Three.js code might look like [this](https://threejs.org/docs/index.html?q=mesh#api/en/objects/Mesh):

```js
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );
```

which produces the same result as this in Trois:

```html
<TroisCanvas>
    <mesh>
        <boxGeometry :args="[1, 1 ,1]"/>
        <meshBasicMaterial :color="0xffff00"/>
    </mesh>
</TroisCanvas>
```

A few points to note:

* Trois element names match class names in Three.js. 
```
// three.js
new THREE.Mesh()

<!-- trois -->
<mesh/>

// three.js
new THREE.BoxGeometry()

<!-- trois -->
<boxGeometry/>
```
* Every element can accept an `args` prop that take an array of arguments to pass to class constructors. This in Three.js:
    
```js
new THREE.BoxGeometry(1, 2, 3)
```

would map to this in Trois:

```html
<boxGeometry :args="[1, 2, 3]"/>
```

* Any property you can add to a Three.js object (for example, the `color` property of a `MeshBasicMaterial`) can be added as a reactive prop on a Trois element:

```js
const material = new THREE.MeshBasicMaterial()
material.color = 0xffff00
```

would map to this in Trois:

```html
<meshBasicMaterial :color="0xffff00"/>
```