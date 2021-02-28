# HMR

Thanks to VueJS/ViteJS, **TroisJS use watchers and HMR to update ThreeJS objects when you update a template**. This means the result in your browser will be automatically updated without reloading all the stuff. **This is really helpful when you are creating a TroisJS Scene**.

- [ ] HMR
  - [x] Scene : add or remove objects (lights, meshes)
  - [x] PerspectiveCamera : aspect, far, fov, near, position
  - [x] Light : castShadow, color, intensity, position, target
    - [x] SpotLight : angle, decay, distance, penumbra
    - [ ] ...
  - [x] Material : color, depthTest, depthWrite, fog, opacity, transparent
    - [x] StandardMaterial : emissive, emissiveIntensity, metalness, roughness
    - [ ] ...
  - [x] Mesh : materialId, position, rotation, scale, castShadow, receiveShadow
    - [x] Box (geometry replace) : size, width, height, depth
    - [x] Plane (geometry replace) : width, height, widthSegments, heightSegments
    - [x] Sphere (geometry replace) : radius, widthSegments, heightSegments
    - [x] Text (geometry replace) : all props except fontSrc (wip)
    - [ ] ...
  - [ ] PostProcessing
    - [x] BokehPass : focus, aperture, maxblur
    - [x] FilmPass : noiseIntensity, scanlinesIntensity, scanlinesCount, grayscale
    - [x] HalftonePass : shape, radius, rotateR, rotateG, rotateB, scatter
    - [x] UnrealBloomPass : strength, radius, threshold
    - [ ] ...
  - [ ] ...