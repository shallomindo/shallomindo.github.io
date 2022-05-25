<script>
    import Nav from "./nav.svelte";
</script>

<header>
    <div class="nav">
        <Nav />
    </div>
    <div id="title">
    <a href="/">
        <img alt="Shallomindo Building Solutions" src="/logo.svg" />
        Shallomindo Building Solutions
    </a>
    </div>
</header>

<style lang="scss">
    @use 'src/components/style/g';

    header {
        @extend %flex-horizontal;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
        padding: 0.8rem 0;
        background-color: goldenrod;
    }
    a {
        text-decoration: none;
        @extend %flex-horizontal;
        @extend %centering;
        font-family: g.$font-logo;
        img {
            width: 3rem;
            margin-right: 5px;
        }
    }
</style>
