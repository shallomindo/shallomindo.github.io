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
		margin-bottom: 10px;
		padding: 0.8rem 0;
		background-color: colors.$nord0;
	}
	a {
		text-decoration: none;
		@extend %flex-horizontal;
		@extend %centering;
		font-family: g.$font-logo;
		font-size: 1.5rem;
		img {
			width: 5rem;
			margin-right: 5px;
		}
	}
	a:link {
		color: colors.$nord9;
	}
	a:visited {
		color: colors.$nord9;
	}
	a:hover {
		color: colors.$nord9;
	}

    @media only screen and (max-width: 570px) {
        p.name {
            display: none;
        }
	}
</style>
