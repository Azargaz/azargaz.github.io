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
	font-family: "Nunito", BlinkMacSystemFont, -apple-system, Segoe UI, 
	Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, 
	Helvetica Neue, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

body {
	background-color: #1d1f2b;
	margin: 0;
	padding: 0;
}

.navbar-bg {
	background-color: rgba(0,0,0,0);
	color: white;
	margin: 10px 50px;
}

.bg-img {
    height: 100vh;
    width: 100vw;

    background-image: url("./assets/code_bg.png");
    filter: blur(8px);
    -webkit-filter: blur(8px);

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
	background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
}

.jumbotron {
	padding: 5px;
	color: #fff;
    background-color: #1d1f2b;
    background-color: rgba(0,0,0,0);
}

.jumbotron .lead {
    color: #01ffa5;
}

</style>
