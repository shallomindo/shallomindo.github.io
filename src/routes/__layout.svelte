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
	@use 'src/components/style/colors';

	.container {
		@extend %flex-vertical;
		max-height: 100vh;
	}
	main {
		padding: 10px 15px;
		flex: 1 100vh;
	}

	:global {
		:root {
			font-size: 1.1rem;
		}
		p {
			font-family: g.$font-body;
			line-height: 1.2;
		}
		ul, ol {
			line-height: 1.2;
		}
		a {
			text-decoration: underline;
		}
		a:link {
        	color: colors.$link;
    	}
    	a:visited {
    	    color: colors.$link;
    	}
    	a:hover {
    	    color: colors.$link;
    	}
		h2 {
			font-weight: bold;
			font-size: 1.5rem;
			line-height: 1.8;
		}
		h5 {
			line-height: 1.8;
		}
	}
</style>
