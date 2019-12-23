<template>
	<div id="app">
		<div class="bg-img"></div>
		<Navbar class="navbar-bg" />
		<router-view class="router-view"></router-view>
	</div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"

export default {
	name: "app",
	components: {
		Navbar
	}
};
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	/* margin-top: 60px; */
}

body {
	background-color: black;
}

.navbar-bg {
	background-color: white;
}

.bg-img {
    height: 100vh;
    width: 100vw;

    background-image: url("./assets/code_bg.png");
    filter: blur(3px);
    -webkit-filter: blur(3px);

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
}

.jumbotron {
    color: white;
	text-shadow: 0.1rem 0.1rem 0.1rem black;

    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0);
}

</style>
