import{o as n,c as a,d as s}from"./app.9cd399cc.js";const t='{"title":"Events (v0.2)","description":"","frontmatter":{},"headers":[{"level":2,"title":"Mesh Events","slug":"mesh-events"},{"level":2,"title":"Raycaster Component","slug":"raycaster-component"},{"level":2,"title":"intersectMode","slug":"intersectmode"}],"relativePath":"guide/meshes/events.md","lastUpdated":1617404684693}',p={},e=s('<h1 id="events-v0-2"><a class="header-anchor" href="#events-v0-2" aria-hidden="true">#</a> Events (v0.2)</h1><p>You can easily handle mouse or touch events on your meshes.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>To be able to handle events on ThreeJS objects, TroisJS use <em>raycasting</em>.</p><p>Read more : <a href="https://threejs.org/docs/#api/en/core/Raycaster" target="_blank" rel="noopener noreferrer">https://threejs.org/docs/#api/en/core/Raycaster</a></p></div><h2 id="mesh-events"><a class="header-anchor" href="#mesh-events" aria-hidden="true">#</a> Mesh Events</h2><p>You can use the following props to handle events on a <em>Mesh</em> or <em>InstancedMesh</em>:</p><table><tbody><tr><th>Name</th><th>Description</th><th>Event type</th><th>Parameters</th></tr><tr><td><code>onPointerEnter</code></td><td>When the pointer enter a mesh</td><td><code>pointerenter</code></td><td><code>{ type, over: true, component, intersect }</code></td></tr><tr><td><code>onPointerOver</code></td><td>When the pointer enter or leave a mesh</td><td><code>pointerover</code></td><td><code>{ type, over, component, intersect? }</code></td></tr><tr><td><code>onPointerMove</code></td><td>When the pointer move over a mesh</td><td><code>pointermove</code></td><td><code>{ type, component, intersect }</code></td></tr><tr><td><code>onPointerLeave</code></td><td>When the pointer leave a mesh</td><td><code>pointerleave</code></td><td><code>{ type, over: false, component }</code></td></tr><tr><td><code>onClick</code></td><td>When the pointer click on a mesh</td><td><code>click</code></td><td><code>{ type, component, intersect }</code></td></tr></tbody></table><p>Example :</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Renderer</span> <span class="token attr-name">antialias</span> <span class="token attr-name">resize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>window<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Camera</span> <span class="token attr-name">:position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ z: 10 }<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scene</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PointLight</span> <span class="token attr-name">:position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ y: 10, z: 10 }<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Box</span>\n        <span class="token attr-name">@pointerEnter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onPointerEvent<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">@pointerOver</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onPointerOver<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">@pointerMove</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onPointerEvent<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">@pointerLeave</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onPointerEvent<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onPointerEvent<span class="token punctuation">&quot;</span></span>\n      <span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LambertMaterial</span> <span class="token punctuation">/&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Box</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Scene</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Renderer</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">onPointerEvent</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">onPointerOver</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      event<span class="token punctuation">.</span>component<span class="token punctuation">.</span>mesh<span class="token punctuation">.</span>material<span class="token punctuation">.</span>color<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>over <span class="token operator">?</span> <span class="token number">0xff0000</span> <span class="token operator">:</span> <span class="token number">0xffffff</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="raycaster-component"><a class="header-anchor" href="#raycaster-component" aria-hidden="true">#</a> Raycaster Component</h2><p>If you need to easily handle pointer events on all your scene&#39;s meshes, you can use <code>Raycaster</code> component :</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Renderer</span> <span class="token attr-name">antialias</span> <span class="token attr-name">resize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>window<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Camera</span> <span class="token attr-name">:position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ z: 10 }<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Raycaster</span>\n      <span class="token attr-name">@pointerEnter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onPointerEvent<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">@pointerOver</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onPointerOver<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">@pointerMove</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onPointerEvent<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">@pointerLeave</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onPointerEvent<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onPointerEvent<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scene</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PointLight</span> <span class="token attr-name">:position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ y: 10, z: 10 }<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Box</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i in 5<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ x: -6 + i * 2 }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LambertMaterial</span> <span class="token punctuation">/&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Box</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Scene</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Renderer</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">onPointerEvent</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">onPointerOver</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      event<span class="token punctuation">.</span>component<span class="token punctuation">.</span>mesh<span class="token punctuation">.</span>material<span class="token punctuation">.</span>color<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>over <span class="token operator">?</span> <span class="token number">0xff0000</span> <span class="token operator">:</span> <span class="token number">0xffffff</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="intersectmode"><a class="header-anchor" href="#intersectmode" aria-hidden="true">#</a> <code>intersectMode</code></h2><p>By default, raycasting will be made on pointer move, but it can be useful to do the same on every frame.</p><p>If using mesh events, you should set <code>pointer</code> prop on <code>Renderer</code> :</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Renderer</span> <span class="token attr-name">:pointer</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ intersectMode: <span class="token punctuation">&#39;</span>frame<span class="token punctuation">&#39;</span> }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Renderer</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>If using <code>Raycaster</code> component, you should set <code>intersect-mode</code> prop :</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Raycaster</span> <span class="token attr-name">intersect-mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>frame<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div>',17);p.render=function(s,t,p,o,c,u){return n(),a("div",null,[e])};export default p;export{t as __pageData};
