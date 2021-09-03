<template>
	<div id="nested-nav">
		<router-link to="/lobby/today">今日</router-link>
		<router-link to="/lobby/morningGame">早盘</router-link>
		<router-link to="/lobby/ballGame">滚球</router-link>
		<router-link to="/lobby/mutiGames">串关</router-link>
	</div>
</template>

<style lang="sass" scoped>
@import "~@/assets/css/global.sass"

#nested-nav
	+block
	height: 50px
	background-color: $bgc_gray2
	display: flex
	justify-content: space-around
	align-items: center
	a
		+text($fz: 18px, $c: $color_black, $fw: bold, $lh: 48px)
		text-decoration: none
		&.router-link-active
			color: $color_blue
			position: relative
			&::after
				+pseudo($t: 99%, $tt: 0%)
				width: 42px
				height: 2px
				border-radius: 1px
				background-color: $color_blue
</style>
