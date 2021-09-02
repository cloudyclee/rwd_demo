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
#nav
	width: 100%
	max-width: 750px
	height: 98px
	border-radius: 30px
	filter: drop-shadow(0 0 5px rgba(204, 204, 204, 0.8))
	background-color: #ffffff
	display: flex
	justify-content: space-around
	align-items: center
	position: fixed
	bottom: -15px
	padding: 5px 0px
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
				font-size: 20px
				color: rgb(183, 183, 183)
				line-height: 32px
	.router-link-active
		.nav-item
			span
				color: rgb(79, 130, 244)
</style>
