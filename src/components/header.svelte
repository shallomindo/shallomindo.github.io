<script>
    import Nav from "./nav.svelte";
</script>

<header>
    <div id="title">
    <a href="/">
        <img alt="Shallomindo Building Solutions" src="/favicon.png" />
        Shallomindo Building Solutions
    </a>
    </div>
    <Nav/>
</header>

<style lang="scss">
    @use 'src/components/style/g';

    header {
        @extend %flex-horizontal;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 10px;
    }
</style>
