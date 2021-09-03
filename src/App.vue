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
		<div class="mt-74"></div>
		<router-view />
		<div class="mb-95"></div>
		<Navbar />
	</div>
	<div class="mask"></div>
</template>

<style lang="sass">
@import "~@/assets/css/global.sass"

html, body
	width: 100%
	max-height: 1625px
	margin: 0
	padding: 0
	background-color: $bgc_white

#app
	width: 100%
	height: 100%
	display: flex
	justify-content: center
	align-items: center
	.container
		max-width: 375px
		width: 100%
		height: 100%
		background-color: $bgc_white
		overflow-x: hidden
	.mask
		position: relative
		z-index: 3000
		height: 100%
		width: 100%
		max-width: calc((100% - 750px) / 2)
.mt-74
	width: 100%
	height: 74px
.mb-95
	width: 100%
	height: 80px
h1
	text-align: center
	margin-top: 50px
</style>
