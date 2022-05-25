<script>
    import Nav from "./nav.svelte";
</script>

<header>
    <div id="title">
    <a href="/">
        <img alt="Shallomindo Building Solutions" src="/logo.svg" />
        Shallomindo Building Solutions
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
        background-color: goldenrod;
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
        color: colors.$brand;
    }
    a:visited {
        color: colors.$brand;
    }
    a:hover {
        color: colors.$brand;
    }
</style>
