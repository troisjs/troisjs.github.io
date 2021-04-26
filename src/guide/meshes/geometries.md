# Using Geometries

Instead using predefined meshes, you can create mesh with geometry like this :

```html
<Mesh>
  <BoxGeometry />
  <BasicMaterial />
</Mesh>
```

TroisJS includes all buffer geometries from ThreeJS :

- `BoxGeometry` ([source](https://github.com/troisjs/trois/blob/master/src/geometries/BoxGeometry.ts), [threejs doc](https://threejs.org/docs/#api/en/geometries/BoxBufferGeometry))
- `CircleGeometry` ([source](https://github.com/troisjs/trois/blob/master/src/geometries/CircleGeometry.ts), [threejs doc](https://threejs.org/docs/#api/en/geometries/CircleBufferGeometry))
- `ConeGeometry` ([source](https://github.com/troisjs/trois/blob/master/src/geometries/ConeGeometry.ts), [threejs doc](https://threejs.org/docs/#api/en/geometries/ConeBufferGeometry))
- `CylinderGeometry` ([source](https://github.com/troisjs/trois/blob/master/src/geometries/CylinderGeometry.ts), [threejs doc](https://threejs.org/docs/#api/en/geometries/CylinderBufferGeometry))
- `DodecahedronGeometry` ([source](https://github.com/troisjs/trois/blob/master/src/geometries/DodecahedronGeometry.ts), [threejs doc](https://threejs.org/docs/#api/en/geometries/DodecahedronBufferGeometry))
- `IcosahedronGeometry` ([source](https://github.com/troisjs/trois/blob/master/src/geometries/IcosahedronGeometry.ts), [threejs doc](https://threejs.org/docs/#api/en/geometries/IcosahedronBufferGeometry))
- `LatheGeometry` ([source](https://github.com/troisjs/trois/blob/master/src/geometries/LatheGeometry.ts), [threejs doc](https://threejs.org/docs/#api/en/geometries/LatheBufferGeometry))
- `OctahedronGeometry` ([source](https://github.com/troisjs/trois/blob/master/src/geometries/OctahedronGeometry.ts), [threejs doc](https://threejs.org/docs/#api/en/geometries/OctahedronBufferGeometry))
- `PlaneGeometry` ([source](https://github.com/troisjs/trois/blob/master/src/geometries/PlaneGeometry.ts), [threejs doc](https://threejs.org/docs/#api/en/geometries/PlaneBufferGeometry))
- `PolyhedronGeometry` ([source](https://github.com/troisjs/trois/blob/master/src/geometries/PolyhedronGeometry.ts), [threejs doc](https://threejs.org/docs/#api/en/geometries/PolyhedronBufferGeometry))
- `RingGeometry` ([source](https://github.com/troisjs/trois/blob/master/src/geometries/RingGeometry.ts), [threejs doc](https://threejs.org/docs/#api/en/geometries/RingBufferGeometry))
- `SphereGeometry` ([source](https://github.com/troisjs/trois/blob/master/src/geometries/SphereGeometry.ts), [threejs doc](https://threejs.org/docs/#api/en/geometries/SphereBufferGeometry))
- `TetrahedronGeometry` ([source](https://github.com/troisjs/trois/blob/master/src/geometries/TetrahedronGeometry.ts), [threejs doc](https://threejs.org/docs/#api/en/geometries/TetrahedronBufferGeometry))
- `TorusGeometry` ([source](https://github.com/troisjs/trois/blob/master/src/geometries/TorusGeometry.ts), [threejs doc](https://threejs.org/docs/#api/en/geometries/TorusBufferGeometry))
- `TorusKnotGeometry` ([source](https://github.com/troisjs/trois/blob/master/src/geometries/TorusKnotGeometry.ts), [threejs doc](https://threejs.org/docs/#api/en/geometries/TorusKnotBufferGeometry))
- `TubeGeometry` ([source](https://github.com/troisjs/trois/blob/master/src/geometries/TubeGeometry.ts), [threejs doc](https://threejs.org/docs/#api/en/geometries/TubeBufferGeometry))
