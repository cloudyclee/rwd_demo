<script>
export default {};
</script>

<template>
	<nav id="nav">
		<router-link to="/lobby">
			<div class="nav-item">
				<img src="~@/assets/lobby.png" alt="" />
				<span>大厅</span>
			</div>
		</router-link>
		<router-link to="/games">
			<div class="nav-item">
				<img src="~@/assets/games.png" alt="" />
				<span>主播赛事</span>
			</div>
		</router-link>
		<router-link to="/rankings">
			<div class="nav-item">
				<img src="~@/assets/rankings.png" alt="" />
				<span>排行</span>
			</div>
		</router-link>
		<router-link to="/records">
			<div class="nav-item">
				<img src="~@/assets/records.png" alt="" />
				<span>投注记录</span>
			</div>
		</router-link>
		<router-link to="/user">
			<div class="nav-item">
				<img src="~@/assets/user.png" alt="" />
				<span>我的</span>
			</div>
		</router-link>
	</nav>
</template>

<style lang="sass" scoped>
@import "~@/assets/css/global.sass"

#nav
	+block
	position: fixed
	display: flex
	justify-content: space-around
	align-items: flex-end
	height: 70px
	left: 0
	bottom: -15px
	border-radius: 20px
	padding: 5px 0px
	padding-bottom: 20px
	background-color: $bgc_white
	filter: drop-shadow(0 0 5px rgba(204, 204, 204, 0.8))
	z-index: 1000
	a
		display: inline-block
		text-decoration: none
		.nav-item
			display: flex
			flex-direction: column
			justify-content: center
			align-items: center
			span
				+text($fz: 14px, $c: $color_gray, $lh: 25px)
			img
				transform: scale(0.6)
	.router-link-active
		.nav-item
			span
				color: $color_blue
</style>
