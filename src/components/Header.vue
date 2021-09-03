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
	max-width: $maxWidth
	position: fixed
	padding: 15px 0px
	height: 44px
	z-index: 3000
	background-color: $bgc_white
	.logo_wrapper
		display: inline-block
		vertical-align: middle
		width: 45%
		margin-top: 10px
		img
			width: 140px
	.btn_wrapper
		display: inline-block
		vertical-align: middle
		text-align: right
		height: 28px
		width: 8%
		img
			margin-right: 10px
	.rest-amount
		display: inline-block
		vertical-align: middle
		margin-right: 20px
		span
			+text($fz: 22px, $c: $color_blue)
			display: inline-block
			font-family: DINPro Bold
			letter-spacing: 1.32px
			vertical-align: middle
		img
			display: inline-block
			vertical-align: middle
			width: 16px
			margin-top: 1px
			margin-left: 10px
</style>
