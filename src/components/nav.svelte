<nav>
	<ul>
		<li><a href="/about">About Us</a></li>
		<li><a href="/products">Products</a></li>
		<li><a href="/contact">Contact Us</a></li>
	</ul>
</nav>

<style lang="scss">
	@use 'src/components/style/g';
	@use 'src/components/style/colors';

	a {
		text-decoration: none;
		color: colors.$nord9;
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

	nav ul li {
		margin-bottom: 5px;
		:last-of-type {
			margin-bottom: 0px;
		}
		list-style-type: none;
		list-style-position: outside;
	}
</style>
