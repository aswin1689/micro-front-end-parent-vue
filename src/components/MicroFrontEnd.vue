<template>
	<main :id="name + '-container'" />
</template>

<script>
export default {
	name: 'MicroFrontend',
	props: ['history', 'name', 'host'],
	created() {
		// console.log('in mount');
		const { name, host } = this;
		const { document } = window;
		// console.log(name, host, document, this);
		const scriptId = `micro-frontend-script-${name}`;
		if (document.getElementById(scriptId)) {
			this.renderMicroFrontend();
			return;
		}

		fetch(`${host}/asset-manifest.json`)
			.then((res) => res.json())
			.then((manifest) => {
				const script = document.createElement('script');
				script.id = scriptId;
				script.crossOrigin = '';
				// console.log(
				// 	host,
				// 	manifest,
				// 	`${host}${manifest.files['main.js']}`
				// );
				script.src = `${host}${manifest.files['main.js']}`;
				// console.log(script.src, this.renderMicroFrontend);
				script.onload = this.renderMicroFrontend;
				document.head.appendChild(script);
			});
	},
	destroyed() {
		const { name } = this;
		window[`unmount${name}`](`${name}-container`);
	},
	methods: {
		renderMicroFrontend: function() {
			const { name, history } = this;
			// console.log('in render', this, window, name, `render${name}`);
			window[`render${name}`](`${name}-container`, history);
		},
	},
};
</script>
