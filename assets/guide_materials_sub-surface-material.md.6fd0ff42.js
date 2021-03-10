import{o as t,c as e,d as a}from"./app.704efae6.js";const d='{"title":"SubSurfaceMaterial","description":"","frontmatter":{},"headers":[{"level":3,"title":"Props","slug":"props"}],"relativePath":"guide/materials/sub-surface-material.md","lastUpdated":1615405782209}',s={},r=a('<h1 id="subsurfacematerial"><a class="header-anchor" href="#subsurfacematerial" aria-hidden="true">#</a> SubSurfaceMaterial</h1><p>Sub surface scattering based on <a href="https://colinbarrebrisebois.com/2011/03/07/gdc-2011-approximating-translucency-for-a-fast-cheap-and-convincing-subsurface-scattering-look/" target="_blank" rel="noopener noreferrer">this method</a>.</p><p>This material is an implementation of the <a href="./shader-material.html">shader material</a> using the shader in <code>three/examples/jsm/shaders/SubsurfaceScatteringShader.js</code>.</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Box</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SubSurfaceMaterial</span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Box</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>Source : <a href="https://github.com/troisjs/trois/blob/master/src/materials/SubSurfaceMaterial.js" target="_blank" rel="noopener noreferrer">https://github.com/troisjs/trois/blob/master/src/materials/SubSurfaceMaterial.js</a></p><h3 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3><table><tbody><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr><tr><td><code>color</code></td><td>Material color.</td><td>String</td><td>#ffffff</td></tr><tr><td><code>thicknessColor</code></td><td>Thickness color.</td><td>String</td><td>#ffffff</td></tr><tr><td><code>thicknessDistortion</code></td><td>Thickness distortion.</td><td>Number</td><td><code>0.4</code></td></tr><tr><td><code>thicknessAmbient</code></td><td>Ambient thickness.</td><td>Number</td><td><code>0.01</code></td></tr><tr><td><code>thicknessAttenuation</code></td><td>Thickness attenuation.</td><td>Number</td><td><code>0.7</code></td></tr><tr><td><code>thicknessPower</code></td><td>Thickness power.</td><td>Number</td><td><code>2</code></td></tr><tr><td><code>thicknessScale</code></td><td>Thickness scale</td><td>Number</td><td><code>4</code></td></tr><tr><td><code>transparent</code></td><td>Whether or not the material is transparent.</td><td>Boolean</td><td><code>false</code></td></tr><tr><td><code>opacity</code></td><td>Material opacity.</td><td>Number</td><td><code>1</code></td></tr><tr><td><code>vertexColors</code></td><td>Use vertex colors on material.</td><td>Boolean</td><td><code>false</code></td></tr></tbody></table>',7);s.render=function(a,d,s,o,n,c){return t(),e("div",null,[r])};export default s;export{d as __pageData};
