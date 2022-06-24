<script>
	import Nav from './nav.svelte';
</script>

<header>
	<div id="title">
		<a href="/">
			<img alt="Shallomindo Building Solutions" src="/logo.svg" />
			<p class="name">Shallomindo Building Solutions</p>
		</a>
	</div>
	<div class="nav">
		<Nav />
	</div>
</header>

<style lang="scss">
	@use 'src/components/style/g';
	@use 'src/components/style/colors';

	header {
		@extend %flex-horizontal;
		align-items: center;
		justify-content: space-around;
		padding: 0.8rem 0;
		background-color: colors.$nord0;
	}

	@media only screen and (orientation: portrait) {
		p.name {
			display: none;
		}
	}

	a {
		text-decoration: none;
		@extend %flex-horizontal;
		@extend %centering;
		img {
			width: 5rem;
			margin-right: 5px;
		}
	}

	p,
	a {
		color: colors.$nord9;
		font-family: g.$font-logo;
		font-size: 1.5rem;
	}
</style>
