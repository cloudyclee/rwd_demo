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
	<div class="container">
		<Header />
		<div class="mt-74"></div>
		<router-view />
		<div class="mb-95"></div>
		<Navbar />
	</div>
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
		//max-width: 375px
		width: 100%
		height: 100%
		background-color: $bgc_white
		overflow-x: hidden
.mt-74
	width: 100%
	height: 23.125vw
	max-height: 104px
.mb-95
	width: 100%
	height: 80px
h1
	text-align: center
	margin-top: 50px

@media screen and (min-width: 500px)
	#app
		.container
			width: 90%
			max-width: $maxWidth
			header
				max-width: $maxWidth
</style>
