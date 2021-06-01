// const path = require('path');
// const production = process.env.NODE_ENV === 'production';

const title = 'TroisJS';
const description = 'TroisJS examples and documentation';
const head = [
	['meta', { name: 'author', content: 'Kevin Levron' }],
	['meta', { name: 'keywords', content: 'threejs, vuejs, vitejs, webgl, troisjs' }],
];

module.exports = {
	title,
	description,
	head,
	themeConfig: {
		repo: 'troisjs/trois',
		docsRepo: 'troisjs/troisjs.github.io',
		docsDir: 'src',
		editLinks: true,
		// prevLink: true,
		// nextLink: true,
		nav: [
			{ text: 'Examples', link: '/examples/demos/1', activeMatch: '^/examples/' },
			{ text: 'Documentation', link: '/guide/' },
			{ text: 'CodePen', link: 'https://codepen.io/collection/AxoWoz' },
			{ text: 'GitHub', link: 'https://github.com/troisjs/trois' },
		],
		sidebar: {
			'/examples/': [
				{
					text: 'Demos',
					children: [
						{ link: '/examples/demos/1', text: 'Demo 1' },
						{ link: '/examples/demos/2', text: 'Demo 2' },
						{ link: '/examples/demos/3', text: 'Demo 3' },
						{ link: '/examples/demos/4', text: 'Demo 4' },
						{ link: '/examples/demos/5', text: 'Demo 5' },
						{ link: '/examples/demos/6', text: 'Demo 6' },
						{ link: '/examples/demos/7', text: 'Demo 7' },
					],
				},
				{
					text: 'Lights',
					link: '/examples/lights',
				},
				{
					text: 'Materials',
					children: [
						{ link: '/examples/materials/1', text: 'Textures' },
						{ link: '/examples/materials/2', text: 'SubSurface' },
						{ link: '/examples/materials/3', text: 'Matcap' },
					],
				},
				{
					text: 'Meshes',
					link: '/examples/meshes',
				},
				{
					text: 'Models',
					children: [
						{ link: '/examples/models/fbx', text: 'FBX' },
						{ link: '/examples/models/gltf', text: 'GLTF' },
					],
				},
				{
					text: 'Physics',
					children: [
						{ link: '/examples/physics/1', text: 'Demo 1' },
						{ link: '/examples/physics/2', text: 'Demo 2' },
					],
				},
				{
					text: 'Shadows',
					link: '/examples/shadows',
				},
				{
					text: 'Loop (v-for)',
					link: '/examples/loop',
				},
				{
					text: 'Events',
					link: '/examples/events',
				},
				{
					text: 'Sliders',
					children: [
						{ link: '/examples/sliders/1', text: 'Slider 1' },
						{ link: '/examples/sliders/2', text: 'Slider 2' },
					],
				},
			],
			'/guide/': [
				{
					text: 'Introduction',
					link: "/guide/",
					children: [
						{ link: '/guide/install', text: 'Installation' },
						{ link: '/guide/cdn', text: 'CDN' },
						{ link: '/guide/hmr', text: 'HMR' },
						{ link: '/guide/faq', text: 'FAQ' },
						{ link: '/guide/dev', text: 'Contribute' },
					],
				},
				{
					link: '/guide/usage/',
					text: 'Core',
					children: [
						{ link: '/guide/usage/renderer', text: 'Renderer' },
						{ link: '/guide/usage/camera', text: 'Camera' },
						{ link: '/guide/usage/scene', text: 'Scene' },
						{ link: '/guide/usage/raf', text: 'Render loop' },
					],
				},
				{
					text: 'Features',
					children: [
						{
							link: '/guide/lights/',
							text: 'Lights',
						},
						{
							text: 'Materials',
							link: '/guide/materials/',
							children: [
								{ link: '/guide/materials/basic-material', text: 'BasicMaterial' },
								{ link: '/guide/materials/lambert-material', text: 'LambertMaterial' },
								{ link: '/guide/materials/matcap-material', text: 'MatcapMaterial' },
								{ link: '/guide/materials/phong-material', text: 'PhongMaterial' },
								{ link: '/guide/materials/physical-material', text: 'PhysicalMaterial' },
								{ link: '/guide/materials/shader-material', text: 'ShaderMaterial' },
								{ link: '/guide/materials/standard-material', text: 'StandardMaterial' },
								{ link: '/guide/materials/sub-surface-material', text: 'SubSurfaceMaterial' },
								{ link: '/guide/materials/toon-material', text: 'ToonMaterial' },
							],
						},
						{
							text: 'Meshes',
							link: '/guide/meshes/',
							children: [
								{ link: '/guide/meshes/events', text: 'Events' },
								{ link: '/guide/meshes/geometries', text: 'Geometries' },
								// { link: '/guide/meshes/image', text: 'Image' },
								{ link: '/guide/meshes/instanced', text: 'InstancedMesh' },
								// { link: '/guide/meshes/sprite', text: 'Sprite' },
							],
						},
						{
							link: '/guide/postprocessing/',
							text: 'Postprocessing',
						},
						{
							link: '/guide/shadows',
							text: 'Shadows',
						},
						{
							text: 'Textures',
							link: '/guide/textures/texture',
							children: [
								{ link: '/guide/textures/cube-texture', text: 'CubeTexture' },
							]
						},
						{
							text: 'Directives',
							children: [
								{ link: '/guide/directives/v-for', text: 'v-for' },
							],
						},
					]
				},
				{
					link: '/guide/extras/',
					text: 'Extras',
				},
			],
		},
	},
};
