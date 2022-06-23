<script lang="ts">
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
</script>

<svelte:head>
	<title>Shallomindo Building Solutions</title>
	<script src="https://kit.fontawesome.com/1d2b5b6db9.js" crossorigin="anonymous"></script>
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
		padding: 10px 35px;
		flex: 1 100vh;
	}

	:global {
		:root {
			font-size: 1.1rem;
		}
		body {
			background-color: colors.$nord6;
		}
		p, a, li {
			font-family: g.$font-body;
			line-height: 1.2;
			text-align: justify;
			color: colors.$nord0;
		}
		p.small {
			font-size: 0.85rem;
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
		}
		h2, h5 {
			line-height: 1.8;
			font-family: g.$font-head;
			color: colors.$nord0;
		}
		div.box {
        	margin-top: 15px;
        	border: 1px solid black;
        	max-width: 80vw;
        	padding: 5px;
    	}
	}

	:global() {
		@media only screen and (max-width: 570px) {
			
		}
	}
</style>
