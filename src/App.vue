<script>
import Navbar from "@/components/Navbar.vue";
import Header from "@/components/Header.vue";

export default {
	components: {
		Navbar,
		Header,
	},
	setup() {},
};
</script>

<template>
	<div class="mask"></div>
	<div class="container">
		<Header />
		<router-view />
		<Navbar />
	</div>
	<div class="mask"></div>
</template>

<style lang="sass">
@font-face
	font-family: "PingFang SC"
	src: url("//db.onlinewebfonts.com/t/05e476e067ffef74ca5686f229c40a63.eot")
	src: url("//db.onlinewebfonts.com/t/05e476e067ffef74ca5686f229c40a63.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/05e476e067ffef74ca5686f229c40a63.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/05e476e067ffef74ca5686f229c40a63.woff") format("woff"), url("//db.onlinewebfonts.com/t/05e476e067ffef74ca5686f229c40a63.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/05e476e067ffef74ca5686f229c40a63.svg#PingFang SC") format("svg")
@font-face
	font-family: DINPro Bold
	src: url("~@/assets/font/DINPro-Bold_13934.ttf") format("truetype")

*
	font-family: PingFang SC
	position: relative

html, body
	width: 100%
	height: 2010px
	margin: 0
	padding: 0
	background-color: #333

#app
	width: 100%
	height: 100%
	display: flex
	justify-content: center
	align-items: center
	.container
		max-width: 750px
		width: 100%
		height: 100%
		background-color: #fff
		overflow-x: hidden
	.mask
		position: relative
		z-index: 3000
		height: 100%
		width: 100%
		max-width: calc((100% - 750px) / 2)

h1
	text-align: center
	margin-top: 50px
</style>
