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

Most Trois concepts are direct translations of Three.js concepts - let's look at [meshes](https://threejs.org/docs/index.html?q=mesh#api/en/objects/Mesh) as an example.

A standard Three.js mesh requires a geometry and a material. Three.js code to create and add a yellow cube to the scene might look like [this](https://threejs.org/docs/index.html?q=mesh#api/en/objects/Mesh):

```js
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );
```

In Trois, this produces the same result:

```html
<TroisCanvas>
    <mesh>
        <boxGeometry :args="[1, 1 ,1]"/>
        <meshBasicMaterial :color="0xffff00"/>
    </mesh>
</TroisCanvas>
```

A few points to note:

* Trois component names match class names in Three.js. 
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
* Every component can accept an `args` prop that take an array of arguments to pass to class constructors. This in Three.js:
    
```js
new THREE.BoxGeometry(1, 2, 3)
```

would map to this in Trois:

```html
<boxGeometry :args="[1, 2, 3]"/>
```

* Any property you can add to a Three.js object (for example, the `color` property of a `MeshBasicMaterial`) can be added as a reactive prop on a Trois component:

```js
const material = new THREE.MeshBasicMaterial()
material.color = 0xffff00
```

would map to this in Trois:

```html
<meshBasicMaterial :color="0xffff00"/>
```

* You can set a property that would normally use dot notation with a dash in the prop name. For example, this in Three.js:

```js
const mesh = new THREE.Mesh()
mesh.position.z = 5
```

would map to this in Trois:

```html
<mesh :position-z="5"/>
```

## Components

You can use most Three.js classes in Trois, such as:

* `Group`
* `Mesh`
* Geometries (box, icosahedron, plane, etc)
* Materials (standard, basic, points, shader, etc)
* Lights (spotlights, point lights, directional, etc)

For more inofrmation, see [Components](/renderer/components/).

To add any features not in that list, see the instructions under [Extend](/renderer/components/extend).

## Hierarchy

Items that inherit from [THREE.Object3D](https://threejs.org/docs/index.html?q=mesh#api/en/core/Object3D) will follow the hierarchy of your Trois template. For example, this Trois code:

```html
<!-- 1 -->
<group>
    <!-- 2 -->
    <mesh/>

    <!-- 3 -->
    <mesh>
        <!-- 4 -->
        <mesh/>
    </mesh>
</group>
```

would create:

* A `Group` (1) with two direct children (2 and 3)
* A `Mesh` (2) with no children
* Another `Mesh` (3) with one child (4)
* Another `Mesh` (4) with no children

Just like with Three.js, any transform changes you apply to a parent element will be applied to the children as well. Changing the `group`'s `position-x` value would move all four objects as a single unit.

## `attach`

There are several classes in Three.js that do not inherit from `Object3D`. You can access instances of those classes with the `attach` property.

### Summary
Any component with an `attach` prop will save itself as `$attached.<propValue>` in its parent. 

Its parent can access these values in any prop by using the string `'$attached.<propValue>'`. 

```html
<!-- $attached.bar will be replaced with whatever the <child> component instantiates -->
<parent :foo="'$attached.bar'">
    <child attach="bar"/>
</parent>
```

This is most commonly used in `args`:

```html
<parent :args="[1, 2, 3, '$attached.foo']">
    <child attach="foo"/>
</parent>

<!-- equivalent to:
    const foo = new THREE.Child()
    const parent = new THREE.Parent(1, 2, 3, foo)
 -->
```

::: tip Auto-registration
Geometries and materials are so frequently used that Trois handles attaching them automatically.

```html
<mesh>
    <boxGeometry />
    <meshBasicMaterial />
</mesh>
```

is syntactic sugar for

```html
<mesh :args="['$attached.geometry', '$attached.material']">
    <boxGeometry attach="geometry"/>
    <meshBasicMaterial attach="material" />
</mesh>
```
:::


### In-Depth
In a standard Three.js setup, a Mesh requires both a Geometry and a Material at instantiation:

```js
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial()

// geometry and material are passed to the mesh
const mesh = new THREE.Mesh(geometry, material)
```

In Trois, that same setup looks like this:

```html
<mesh>
    <boxGeometry />
    <meshBasicMaterial />
</mesh>
```


How does the Trois `<mesh>` know to use the `<boxGeometry>` as its geometry and the `<meshBasicMaterial>` as the material? Behind the scenes, Trois treats the above code like this:

```html
<mesh :args="['$attached.geometry', '$attached.material']">
    <boxGeometry attach="geometry"/>
    <meshBasicMaterial attach="material" />
</mesh>
```

and takes the following steps:

1. A `new THREE.BoxGeometry()` is created. (Trois instantiates items from the most nested child upwards.)
2. Trois registers the `attach` prop on the `<boxGeometry>`. This prop tells the new instance to save itself as a property called `geometry` on its parent's `$attached` property. At this point, this is the structure in JS:

```js
const unknownParent = { $attached: {} }

// geometry
const newGeometry = new THREE.BoxGeometry()
// the `attach="geometry"` prop does the following:
unknownParent.$attached.geometry = newGeometry
```

3. A `new THREE.MeshBasicMaterial()` is created.
4. Trois attaches the new material to its parent's `$attached.material` property, so the structure is:

```js
// unknownParent = { $attached: { geometry: newGeometry } }

// material
const newMaterial = new THREE.MeshBasicMaterial()
// the `attach="material"` prop does the following:
unknownParent.$attached.material = newMaterial

```

5. The array in `args` is registered:

```js
// from the mesh's `args` property
let args = ['$attached.geometry', '$attached.material']
```

6. Trois will automatically take strings starting with `$attached` and attempt to replace them with matching values:

```js
/*
unknownParent = { 
    $attached: { 
        geometry: newGeometry,
        material: newMaterial
    } 
}
*/

let args = ['$attached.geometry', '$attached.material']
args = args.map(arg => {
    if (arg.startsWith('$attached')){
        // `$attached.geometry` becomes `geometry`
        // `$attached.material` becomes `material`
        const property = arg.replace('$attached.', '')
        // fallback to the arg if nothing found
        return unknownParent.$attached[property] ?? arg
    } else {
        // non `$attached` properties stay as-is
        return arg
    }
})

// args === [unknownParent.$attached.newGeometry, unknownParent.$attached.newMaterial] 
// args === [newGeometry, newMaterial]

```

7. The transformed `args` array is spread into the instantiation call:

```js
// args === [newGeometry, newMaterial]
const finalParent = new THREE.Mesh(...args)
```


## `instance`

Sometimes you'll need to access a Three.js object in your JS. You can do this by accessing an element's `instance` property. For example:

```html
<template>
    <TroisCanvas>
        <mesh ref="mesh"/>
    </TroisCanvas>
</template>

<script>
export default {
    mounted(){
        console.log(this.$refs.mesh.instance)
    }
}
</script>
```

The Vue reactivity system is great for occasional changes, but for smooth motion, changing properties on `instance` will be give you the best result:

```html
<template>
    <TroisCanvas>
        <mesh ref="mesh">
            <meshBasicMaterial :color="color"/>
        </mesh>
    </TroisCanvas>
</template>

<script>
export default {
    data(){
        return {
            color: 'blue'
        }
    },
    mounted(){
        // `color` only changes a couple times a second, so that works well with reactive values
        setInterval(() => {
            this.color = this.color === 'blue' ? 'green' : 'blue'
        }, 500)

        // start the update loop
        this.update()
    },
    methods: {
        update(){
            requestAnimationFrame(this.update)

            const mesh = this.$refs.mesh.instance
            // cancel if no mesh yet
            if (!mesh) return

            // this bobs the mesh up and down smoothly -
            // since it happens so frequently (ideally ~60 times per second),
            // it makes sense to change the property directly instead of relying on reactivity
            mesh.position.y = Math.sin(Date.now() * 0.001)
        }
    }
}
</script>
```