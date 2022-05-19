<script lang="ts">
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
</script>

<svelte:head>
	<title>Shallomindo Building Solutions</title>
</svelte:head>

<div class="container">
	<Header />
	<main><slot /></main>
	<Footer />
</div>

<style lang="scss">
	@use 'src/components/style/g';

	.container {
		@extend %flex-vertical;
		max-height: 100vh;
		padding: 0 15px;
	}
	main {
		flex: 1 100vh;
	}
</style>
