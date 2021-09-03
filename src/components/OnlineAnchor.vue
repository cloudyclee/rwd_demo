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
@import "~@/assets/css/global.sass"

.title-row
	+block
	padding: 3px 3px
	border-bottom: solid 1px $bgc_gray
	img
		display: inline-block
		vertical-align: middle
		width: 24px
	span
		+text($fz: 17px, $c: $color_black)
		display: inline-block
		vertical-align: middle
		margin-left: 5px
	.title
		display: inline-block
		width: 50%
	.more
		display: inline-block
		width: 50%
		text-align: right
		span
			color: $color_gray
			margin-right: 10px
		img
			width: 7px

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
			padding: 8px 0px
			padding-bottom: 5px
			width: 14.28%
			max-width: 65px
			.anchor_pic
				position: relative
				width: 40px
				height: 40px
				margin: 0 auto
				border-radius: 100%
				background-color: $color_black
				border: 1.5px solid $color_pink
				&::after
					+pseudo($t: 105%)
					+text($fz: 14px, $lh: 19px, $c: $bgc_white)
					transform: translate(-50%, -50%) scale(0.7)
					content: attr(data-value)
					height: 19px
					padding: 0px 5px
					background-color: $color_pink
					border-radius: 5px
					border: 3px solid $bgc_white
					text-align: center
					z-index: 50
			span
				+text($fz: 12px, $lh: 25px, $c: $color_black)
				display: block
				text-align: center
				margin-top: 6px
</style>
