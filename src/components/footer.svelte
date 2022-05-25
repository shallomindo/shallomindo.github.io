<footer>
    <div class="notice">
        <p class="copyright">&copy; 2022 PT. Shallomindo Eka Raja Abadi</p>
        <p class="credit">site by <a href="https://github.com/hikaruisasleep/">ben</a></p>
    </div>
    <div class="socials">
        <a href="/contact"><i class="fa-brands fa-whatsapp"></i></a>
        <a href="/contact">f</a>
    </div>
</footer>

<style lang="scss"> 
    @use 'src/components/style/g';

    footer {
        @extend %flex-horizontal;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 5px;
        padding: 0 5px;
    }
    
    .notice {
        @extend %flex-vertical;
        width: fit-content;

        .copyright {
            font-size: small;
        }
        .credit {
            font-size: x-small;
        }
    }

    .socials {
        @extend %flex-horizontal;
        width: fit-content;
    }
</style>
