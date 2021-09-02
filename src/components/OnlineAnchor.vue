<script>
import { reactive } from "vue";
export default {
	setup() {
		const data = reactive([
			{
				value: "Living",
				name: "KIMI",
			},
			{
				value: "直播中",
				name: "KIMI",
			},
			{
				value: "直播中",
				name: "KIMI",
			},
			{
				value: "直播中",
				name: "KIMI",
			},
			{
				value: "直播中",
				name: "KIMI",
			},
			{
				value: "直播中",
				name: "KIMI",
			},
			{
				value: "直播中",
				name: "KIMI",
			},
		]);

		return {
			data,
		};
	},
};
</script>

<template>
	<div class="title-row">
		<div class="title">
			<img src="../assets/anchor.png" alt="" />
			<span>在线主播</span>
		</div>
		<div class="more">
			<span>更多</span>
			<img src="../assets/arrow.png" alt="" />
		</div>
	</div>
	<ul>
		<li v-for="(item, idx) in data" :key="item.value">
			<a>
				<div class="anchor_pic" :data-value="item.value"></div>
				<span>{{ item.name }}</span>
			</a>
		</li>
	</ul>
</template>

<style lang="sass" scoped>
.title-row
	width: 100%
	max-width: 704px
	margin: 0 auto
	padding: 8px 3px
	border-bottom: solid 1px #efefef
	img
		display: inline-block
		vertical-align: middle
	span
		display: inline-block
		vertical-align: middle
		font-size: 22px
		line-height: 32px
		color: rgb(60, 74, 86)
		font-weight: 500
		margin-left: 10px
	.title
		display: inline-block
		width: 50%
	.more
		display: inline-block
		width: 50%
		text-align: right
		span
			color: rgb(164, 169, 180)
			margin-right: 10px

ul
	width: 112%
	position: relative
	list-style: none
	padding: 0
	margin: 0
	white-space: nowrap
	li
		display: inline
		cursor: pointer
		user-select: none
		a
			position: relative
			display: inline-block
			padding: 16px 0px
			padding-bottom: 10px
			width: 14.28%
			max-width: 135px
			z-index: 10
			.anchor_pic
				position: relative
				width: 86px
				height: 86px
				margin: 0 auto
				border-radius: 43px
				background-color: #000000
				border: 3px solid #ff008a
				&::after
					content: attr(data-value)
					display: block
					position: absolute
					left: 50%
					top: 100%
					transform: translate(-50%, -50%)
					width: 52px
					height: 19px
					border-radius: 3px
					background-color: #ff008a
					border: 2px solid #ffffff
					z-index: 50
					text-align: center
					color: #fff
					font-size: 14px
					line-height: 19px
			span
				display: block
				font-size: 20px
				line-height: 25px
				text-align: center
				color: rgb(60, 74, 86)
				font-weight: 500
				margin-top: 13px
</style>
