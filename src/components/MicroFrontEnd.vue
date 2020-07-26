<template>
	<main :id="name + '-container'" />
</template>

<script>
export default {
	name: 'MicroFrontend',
	props: ['history', 'name', 'host'],
	mounted() {
		const { name, host } = this;
		const { document } = window;
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
				script.src = `${host}${manifest.files['main.js']}`;
				script.onload = this.renderMicroFrontend;
				document.head.appendChild(script);
			});
	},
	methods: {
		renderMicroFrontend: function() {
			const { name, history } = this;
			window[`render${name}`](`${name}-container`, history);
		},
	},
};
</script>
