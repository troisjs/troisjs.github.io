# InstancedMesh

See [InstancedMesh.js](https://github.com/troisjs/trois/blob/master/src/meshes/InstancedMesh.js) and [THREE.InstancedMesh](https://threejs.org/docs/index.html#api/en/objects/InstancedMesh).

Example :

```html
<InstancedMesh ref="imesh" :count="500">
  <SphereGeometry :radius="5" />
  <PhongMaterial color="#ffffff" />
</InstancedMesh>
```

You can then init instance matrix in your component script :

```js
const imesh = this.$refs.imesh.mesh;
const dummy = new Object3D();
const { randFloat: rnd, randFloatSpread: rndFS } = MathUtils;
for (let i = 0; i < 500; i++) {
  dummy.position.set(rndFS(200), rndFS(200), rndFS(200));
  const scale = rnd(0.2, 1);
  dummy.scale.set(scale, scale, scale);
  dummy.updateMatrix();
  imesh.setMatrixAt(i, dummy.matrix);
}
imesh.instanceMatrix.needsUpdate = true;
```

**⚠ Don't use the same material on Mesh and InstancedMesh.**
