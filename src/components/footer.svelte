<footer>
    <div class="notice">
        <p class="copyright">&copy; 2022 PT. Shallomindo Eka Raja Abadi</p>
        <p class="credit">site by <a href="https://github.com/hikaruisasleep/">ben</a></p>
    </div>
    <div class="socials">
        <a href="tel:+62778472868"><i class="fa-solid fa-square-phone fa-2x"></i></a>
        <a href="https://wa.me/628179170200"><i class="fa-brands fa-whatsapp-square fa-2x"></i></a>
        <a href="/contact"><i class="fa-brands fa-facebook-square fa-2x"></i></a>
    </div>
</footer>

<style lang="scss"> 
    @use 'src/components/style/g';
    @use 'src/components/style/colors';

    footer {
        @extend %flex-horizontal;
        align-items: center;
        justify-content: space-between;
        padding: 5px 15px;
        background-color: colors.$nord0;
    }

    p, a {
        color: colors.$nord4;
    }
    
    .notice {
        @extend %flex-vertical;
        width: fit-content;

        .copyright {
            font-size: small;
        }
        .credit {
            font-size: 8.5px;
        }
    }

    .socials {
        @extend %flex-horizontal;
        width: fit-content;
        a {
            margin-left: 5px;
        }
    }
</style>
