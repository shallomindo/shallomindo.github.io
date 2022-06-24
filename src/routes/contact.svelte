<script>
    import MediaQuery from 'svelte-media-query';
</script>

<div class="container">
    <h2>Contact Us</h2>

    <MediaQuery query="(orientation: landscape)" let:matches>
        {#if matches}
            <div class="buttons">
                <p><a href="tel:+62778472868"><i class="fa-solid fa-square-phone fa-xl"></i> Telepon: +62 (778) 472 868</a></p>
                <p><a href="https://wa.me/628179170200"><i class="fa-brands fa-whatsapp-square fa-xl"></i> Hubungi kami melalui WhatsApp</a></p>
                <p><a href="/contact"><i class="fa-brands fa-facebook-square fa-xl"></i> Kunjungi Page Facebook</a></p>
            </div>
        {/if}
    </MediaQuery>

    <MediaQuery query="(orientation: portrait)" let:matches>
        {#if matches}
            <div class="buttons">
                <p><a href="tel:+62778472868"><i class="fa-solid fa-square-phone fa-lg"></i> Telepon: +62 (778) 472 868</a></p>
                <p><a href="https://wa.me/628179170200"><i class="fa-brands fa-whatsapp-square fa-lg"></i> Hubungi kami melalui WhatsApp</a></p>
                <p><a href="/contact"><i class="fa-brands fa-facebook-square fa-lg"></i> Kunjungi Page Facebook</a></p>
            </div>
        {/if}
    </MediaQuery>
</div>

<style lang="scss">
    @use 'src/components/style/g';

    .buttons {
        @extend %flex-vertical;
        justify-content: space-around;
        align-items: center;
        margin: 25px auto;
        p {
            margin: 10px auto;
            font-size: x-large;
            text-indent: 0px;
        }
    }

    @media only screen and (orientation: portrait) {
        .buttons p {
            font-size: large;
        }
	}
</style>
