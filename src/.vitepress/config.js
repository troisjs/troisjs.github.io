// const path = require('path');
// const production = process.env.NODE_ENV === 'production';

module.exports = {
	base: '/',
	title: 'TroisJS',
	description: 'TroisJS examples and documentation',
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
					],
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
				{
					text: 'GLTF',
					link: '/examples/gltf',
				},
			],
			'/guide/': [
				{
					text: 'Introduction',
					children: [
						{ link: '/guide/install', text: 'Installation' },
						{ link: '/guide/cdn', text: 'CDN' },
						{ link: '/guide/hmr', text: 'HMR' },
						{ link: '/guide/dev', text: 'Dev' },
					],
				},
				{
					link: '/guide/usage',
					text: 'Usage',
				},
				{
					text: 'Materials',
					children: [
						{ link: '/guide/materials/', text: 'Introduction' },
						{ link: '/guide/materials/textures', text: 'Textures' },
					],
				},
				{
					link: '/guide/lights/',
					text: 'Lights',
				},
				{
					text: 'Meshes',
					children: [
						{ link: '/guide/meshes/', text: 'Introduction' },
						{ link: '/guide/meshes/geometries', text: 'Geometries' },
						{ link: '/guide/meshes/image', text: 'Image' },
						{ link: '/guide/meshes/instanced', text: 'InstancedMesh' },
						{ link: '/guide/meshes/sprite', text: 'Sprite' },
					],
				},
				{
					link: '/guide/shadows',
					text: 'Shadows',
				},
				{
					link: '/guide/postprocessing/',
					text: 'Postprocessing',
				},
				{
					link: '/guide/components/',
					text: 'Components',
				},
			],
		},
	},
};
