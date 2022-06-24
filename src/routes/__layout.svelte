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
		margin: 20px 5px;
	}

	:global {
		:root {
			font-size: 1.1rem;
		}
		body {
			background-color: colors.$nord6;
		}
		p,
		a,
		li {
			font-family: g.$font-body;
			line-height: 1.2;
			text-align: justify;
			color: colors.$nord0;
		}
		p, li {
			text-indent: 35px;
		}
		p.small {
			margin-top: 10px;
			font-size: 0.85rem;
		}
		ul,
		ol {
			line-height: 1.2;
		}
		ul {
			list-style-type: square;
			list-style-position: inside;
		}
		ol {
			list-style-type: decimal;
			list-style-position: inside;
		}
		p, ul, ol {
			padding: 2px 0px;
		}
		a {
			text-decoration: underline;
		}
		a:link {
			color: colors.$nord1;
		}
		a:visited {
			color: colors.$nord1;
		}
		a:hover {
			color: colors.$nord1;
		}
		h2 {
			font-weight: bold;
			font-size: 1.5rem;
		}
		h2,
		h5 {
			line-height: 1.8;
		}
		h3 {
			line-height: 1.2;
			font-weight: bold;
		}
		h2,
		h3,
		h5 {
			font-family: g.$font-head;
			color: colors.$nord0;
		}
		div.box {
			margin: 15px auto;
			border: 1px solid colors.$nord3;
			max-width: 80vw;
			padding: 5px;
			p {
				text-indent: 0px;
				font-size: medium;
			}
		}
		main div h2 {
			margin-bottom: 15px;
		}
		b {
			font-weight: 600;
		}

		@media only screen and (orientation: portrait) {
		}
	}
</style>
