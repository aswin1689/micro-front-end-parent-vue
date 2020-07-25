<template>
	<div>
		<MicroFrontEnd
			history="{}"
			host="http://localhost:5002"
			name="ReactApp"
		/>
	</div>
</template>
<script>
import MicroFrontEnd from '../components/MicroFrontEnd';

export default {
    name: 'ReactMicroFE',
    components: {
        MicroFrontEnd
    }
};
</script>
