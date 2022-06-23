<div class="container">
    <h2>Contact Us</h2>
    <div class="buttons">
        <p><a href="tel:+62778472868"><i class="fa-solid fa-square-phone"></i> Telepon: +62 (778) 472 868</a></p>
        <p><a href="https://wa.me/628179170200"><i class="fa-brands fa-whatsapp-square"></i> Hubungi kami melalui WhatsApp</a></p>
        <p><a href="/contact"><i class="fa-brands fa-facebook-square"></i> Kunjungi Page Facebook</a></p>
    </div>
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
        }
    }
</style>
