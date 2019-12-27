<template>
    <div>
        <b-navbar toggleable="lg" type="dark">
            <b-navbar-brand to="/" class="m-3"> 
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
                    <b-nav-item class="m-3" to="/about">About</b-nav-item>
                    <b-nav-item class="m-3" to="/skills">Skills</b-nav-item>
                    <b-nav-item class="m-3" to="/projects">Projects</b-nav-item>
                    <b-nav-item class="m-3" to="/contact">Contact</b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2 m-2" placeholder="Search..."></b-form-input>
                    </b-nav-form>
                    <b-button id="lang-button" class="m-2"><web-icon :size="48" /></b-button>
                    <b-popover target="lang-button" placement="bottom" variant="light" triggers="hover focus">
                        <b-list-group>
                            <b-list-group-item href="#">EN</b-list-group-item>
                            <b-list-group-item href="#">PL</b-list-group-item>
                        </b-list-group>
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
    }
}
</script>

<style scoped>
/* Logo and links normal font color */
.btn, .navbar-dark .navbar-nav .nav-link {
    color: #d1d1d1;
}

/* Logo and links on hover link color + shadow */
.btn:hover, .navbar-dark .navbar-brand:hover, .navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {
    color: #01ffa5;
    text-shadow: 1px 1px 1px #1d1f2b;
}

/* Disable */
.btn, .list-group-item, button {
    background: none;
    border: none;
}

.popover a:hover {
    color: #000;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
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