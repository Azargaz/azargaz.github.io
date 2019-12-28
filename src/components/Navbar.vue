<template>
    <div>
        <b-navbar toggleable="lg" type="dark">
            <b-navbar-brand :to='`/${$i18n.locale}/`' class="m-3"> 
                <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <title>background</title>
                        <rect fill="none" id="canvas_background" height="52" width="52" y="-1" x="-1"/>
                        <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
                            <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/>
                        </g>
                    </g>
                    <g>
                        <title>HJ</title>
                        <text xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="63" id="svg_1" y="46.798002" x="2.251751" stroke-width="0" stroke="#000" fill="#01ffa5">H</text>
                        <text xml:space="preserve" text-anchor="start" font-family="Helvetica, Arial, sans-serif" font-size="63" id="svg_2" y="46.798001" x="15.158959" stroke-width="0" stroke="#000" fill="#ffffff">J</text>
                    </g>
                </svg>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item class="m-3" :to='`/${$i18n.locale}/about`'>{{ $t('navbar.about') }}</b-nav-item>
                    <b-nav-item class="m-3" :to='`/${$i18n.locale}/skills`'>{{ $t('navbar.skills') }}</b-nav-item>
                    <b-nav-item class="m-3" :to='`/${$i18n.locale}/projects`'>{{ $t('navbar.projects') }}</b-nav-item>
                    <b-nav-item class="m-3" :to='`/${$i18n.locale}/contact`'>{{ $t('navbar.contact') }}</b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2 m-2" :placeholder='$t("search") + "..."'></b-form-input>
                    </b-nav-form>
                    <button id="lang-button"><web-icon :size="48" /></button>
                    <!-- <b-popover target="lang-button" placement="bottom" variant="dark" triggers="hover">
                        <b-list-group>
                            <b-list-group-item @click='setLocale("en")' button>EN</b-list-group-item>
                            <b-list-group-item @click='setLocale("pl")' button>PL</b-list-group-item>
                        </b-list-group>
                    </b-popover> -->
                    <b-popover
                        target="lang-button"
                        triggers="hover click"
                        placement="bottom"
                    >
                        <div>
                            <b-list-group>
                                <b-list-group-item @click='setLocale("en")' button>{{$t('navbar.en')}}</b-list-group-item>
                                <b-list-group-item @click='setLocale("pl")' button>{{$t('navbar.pl')}}</b-list-group-item>
                            </b-list-group>
                        </div>
                        </b-popover>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import WebIcon from 'vue-material-design-icons/Web.vue';

export default {
    name: "navbar",
    components: {
        WebIcon
    },
    methods: {
        setLocale: function (locale) {
            this.$i18n.locale = locale
            this.$router.push({
                params: {
                    lang: locale
                }
            })
        }
    }
}
</script>

<style scoped>
/* Buttons, logo and links normal font color */
.btn, 
.navbar-dark .navbar-brand, 
.navbar-dark .navbar-nav .nav-link, 
#lang-button {
    color: #d1d1d1;
    outline: none;
}

.list-group-item {
    color: rgb(112, 112, 112);
}

.list-group-item:hover {
    color: #000;
}

/* Buttons, logo and links on hover/focus color + shadow */
.btn:hover,
.btn:focus,
.navbar-dark .navbar-brand:hover, 
.navbar-dark .navbar-brand:focus, 
.navbar-dark .navbar-nav .nav-link:hover, 
.navbar-dark .navbar-nav .nav-link:focus, 
#lang-button:hover {
    color: #01ffa5;
    text-shadow: 1px 1px 1px #1d1f2b;
}

/* On hover the popup language button */
/* .list-group-item:hover {
    color: black;
    text-shadow: 1px 1px 1px #01ffa5;
} */

/* Disable bg, borders and outlines */
.btn, .list-group-item, #lang-button {
    background: none;
    border: none;
    outline: none;
}

#lang-button {
    margin: 1rem;
}

/* .navbar-collapse.show, .navbar-collapse.collapsing {
    position: fixed;
    top: 0;
    left: 0;
    
    width: 50vw;
    height: 100vh;
    background-color: #1d1f2be7;
}
*/

.navbar-collapse.show *, .navbar-collapse.collapsing * {
    margin: 0 auto;
}

input[type="text"] {
    background-color: hsla(0,0%,100%,.1);
    border: none;
    color: #c7ccd8;
    width: 5rem;

    -webkit-transition: width 0.33s;
    transition: width 0.33s;
}

input[type="text"]:focus {
    width: 10rem;
}
</style>