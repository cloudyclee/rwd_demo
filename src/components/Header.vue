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
@font-face
	font-family: DINPro Bold
	src: url("~@/assets/font/DINPro-Bold_13934.ttf") format("truetype")

header
	max-width: 710px
	margin: 0 auto
	padding-top: 40px
	height: 58px
	.logo_wrapper
		display: inline-block
		vertical-align: middle
		height: 58px
	.rest-amount
		display: inline-block
		width: calc(100% - 186px - 28px)
		vertical-align: middle
		text-align: right
		span
			margin-right: 20px
			font-family: DINPro Bold
			font-size: 30px
			color: rgb(79, 130, 244)
			letter-spacing: 1.32px
		img
			margin-right: 50px
	.btn_wrapper
		display: inline-block
		vertical-align: middle
		height: 28px
</style>
