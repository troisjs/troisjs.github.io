# TroisCanvas

The `TroisCanvas` component wraps your Trois app:

```html
<TroisCanvas>
    <!-- your Trois code here -->
</TroisCanvas>
```

You can pass several configuration props to a TroisCanvas:

| Name                 | Type           | Default               | Notes                                                                                                                                                                                        |
| -------------------- | -------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `antialias`          | Boolean        | `true`                | Whether or not to enable antialiasing on the renderer.                                                                                                                                       |
| `background`         | String, Number | `''`                  | Background color of the Trois app. Default black.                                                                                                                                            |
| `camera`             | any            | `null`                | Main camera for the scene. Uses a [PerspectiveCamera](https://threejs.org/docs/?q=perspec#api/en/cameras/PerspectiveCamera) by default. See [Custom camera example](#custom-camera-example). |
| `cameraPosition`     | Array          | `null`                | Camera starting position. Vector3 with components `[x, y, z]`. See [Camera starting position example](#camera-starting-position-example)                                                     |
| `cameraProperties`   | Object         | `{}`                  | Options to set on starting camera.                                                                                                                                                           |
| `environment`        | String         | `null`                | Environment map to use. Automatically creates and adds the resource at the given path if specified. See [example](#environment-map-example).                                                 |
| `renderer`           | any            | `null`                | Renderer to use. Creates a `WebGLRenderer` if none specified.                                                                                                                                |
| `rendererOptions`    | Object         | `{ antialias: true }` | Parameter to pass to renderer on instantiation function. Ignored if `renderer` is set.                                                                                                       |
| `rendererProperties` | Object         | `{}`                  | Properties to set on the renderer once it's been instantiated. Applies on custom and default renderers.                                                                                      |


## Camera starting position example
```html
<TroisCanvas :camera-position="[0, 0, 10]">
    <!-- ... -->
</TroisCanvas>
```

## Custom camera example
```html
<TroisCanvas :camera="'$attached.camera'">
    <OrthographicCamera attach="camera" :args="[...]"/>
</TroisCanvas>
```

## Environment map example
```html
<TroisCanvas :environment="'/your/env-map.hdr">
    <!-- ... -->
</TroisCanvas>
```