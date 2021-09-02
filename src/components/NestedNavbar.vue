<template>
	<div id="nested-nav">
		<router-link to="/lobby/today">今日</router-link>
		<router-link to="/lobby/morningGame">早盘</router-link>
		<router-link to="/lobby/ballGame">滚球</router-link>
		<router-link to="/lobby/mutiGames">串关</router-link>
	</div>
</template>

<style lang="sass" scoped>
#nested-nav
	width: 100%
	height: 60px
	background-color: #f5f6fa
	display: flex
	justify-content: space-around
	align-items: center
	a
		font-size: 24px
		line-height: 58px
		font-weight: bold
		color: rgb(60, 74, 86)
		text-decoration: none
		&.router-link-active
			color: rgb(79, 130, 244)
			position: relative
			&::after
				content: ""
				display: block
				position: absolute
				left: 50%
				top: 100%
				transform: translateX(-50%)
				width: 42px
				height: 2px
				border-radius: 1px
				background-color: rgb(79, 130, 244)
				z-index: 10
</style>
