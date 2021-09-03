<script>
export default {};
</script>

<template>
	<header>
		<div class="logo_wrapper">
			<img src="~@/assets/logo.png" alt="" />
		</div>
		<div class="rest-amount">
			<span>￥89963.58</span>
			<img src="~@/assets/refresh.png" alt="" />
		</div>
		<div class="btn_wrapper">
			<img src="~@/assets/alt.png" alt="" />
		</div>
	</header>
</template>

<style lang="sass" scoped>
@import "~@/assets/css/global.sass"

header
	+block
	position: fixed
	padding: 15px 0px
	z-index: 3000
	background-color: $bgc_white
	.logo_wrapper
		display: inline-block
		vertical-align: middle
		width: 45%
		margin-top: 10px
		img
			+imgSize(37.5vw, 186px)
	.btn_wrapper
		display: inline-block
		vertical-align: middle
		text-align: right
		width: 8%
		margin-top: 5px
		img
			margin-right: 5px
			width: 20px
	.rest-amount
		display: inline-block
		vertical-align: middle
		width: 47%
		span
			+text($fz: 20px, $c: $color_blue)
			display: inline-block
			font-family: DINPro Bold
			letter-spacing: 1.32px
			vertical-align: middle
		img
			display: inline-block
			vertical-align: middle
			width: 12px
			margin-top: 1px
			margin-left: 10px
@media screen and (min-width: 500px)
	header
		.logo_wrapper
			width: 40%
		.btn_wrapper
			width: 8%
		.rest-amount
			width: 42%
</style>
