<script>
import { reactive, ref } from "vue";
export default {
	props: ["showStatus", "path"],
	setup(props) {
		const full_path =
			props.path === "video"
				? reactive({ path: require("../assets/liveVideo.png") })
				: reactive({ path: require("../assets/liveAudio.png") });
		return {
			full_path,
		};
	},
};
</script>

<template>
	<div class="title-row">
		<div class="title">
			<span>
				<slot></slot>
			</span>
		</div>
		<div class="more">
			<span>55+</span>
			<img src="../assets/arrow.png" alt="" />
		</div>
	</div>
	<div class="status-row" v-if="showStatus">
		<div class="teamB">
			<img src="../assets/teamB.png" alt="" />
			<span>亚特兰大联</span>
		</div>
		<div class="score">
			<span>2 - 0</span>
		</div>
		<div class="teamR">
			<span>莫塔瓜</span>
			<img src="../assets/teamR.png" alt="" />
		</div>
	</div>
	<div class="info-row">
		<div class="game" v-if="!showStatus">
			<div class="teamB">
				<div class="name">
					<img src="../assets/teamB.png" alt="" />
					<span>亚特兰大联</span>
				</div>
				<div class="score">2</div>
			</div>
			<div class="teamR">
				<div class="name">
					<img src="../assets/teamR.png" alt="" />
					<span>莫塔瓜</span>
				</div>
				<div class="score">0</div>
			</div>
			<div class="play">
				<img src="../assets/court.png" alt="" />
				<img src="../assets/play.png" alt="" />
			</div>
		</div>
		<div class="anchor" v-if="showStatus">
			<span class="anchor_name">米儿</span>
			<span class="live_status">
				<img :src="full_path.path" alt="" />
			</span>
		</div>
		<div class="info">
			<table :class="{ 'mt-10': !showStatus }">
				<thead>
					<tr>
						<th>全场独贏</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td rowspan="2">主胜<br /><span>3.25</span></td>
					</tr>
					<tr></tr>
					<tr>
						<td rowspan="2">
							客胜
							<br />
							<span class="red">▴ 3.45</span>
						</td>
					</tr>
					<tr></tr>
					<tr>
						<td rowspan="2">
							和局
							<br />
							<span class="green">▾ 2.25</span>
						</td>
					</tr>
					<tr></tr>
				</tbody>
			</table>
			<table :class="{ 'mt-10': !showStatus }">
				<thead>
					<tr>
						<th>全场让球</th>
						<th>全场大小</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td rowspan="3" class="score rs3">
							-0.5/1
							<br />
							<span>1.94</span>
						</td>
						<td rowspan="3" class="score rs3">
							-0.5/1
							<br />
							<span>1.94</span>
						</td>
					</tr>
					<tr></tr>
					<tr></tr>
					<tr>
						<td rowspan="3" class="score rs3">
							-0.5/1
							<br />
							<span>1.94</span>
						</td>
						<td rowspan="3" class="score rs3">
							-0.5/1
							<br />
							<span>1.94</span>
						</td>
					</tr>
					<tr></tr>
					<tr></tr>
				</tbody>
			</table>
			<div class="tabs">
				<span class="tab selected"></span>
				<span class="tab"></span>
			</div>
			<div class="double_arrow">
				<img src="~@/assets/doubleArrow.png" alt="" />
			</div>
		</div>
	</div>
</template>

<style lang="sass" scoped>
@import "~@/assets/css/global.sass"

span, .title-text
	+text($fz: 17px, $c: $color_gray2)
	display: inline-block
	vertical-align: middle
img
	display: inline-block
	vertical-align: middle
.title-row
	+block
	border-bottom: solid 2px $bgc_gray
	.title, .more
		display: inline-block
		width: 50%
	.more
		text-align: right
		span
			margin-right: 10px
		img
			width: 7px
.status-row
	+block
	display: flex
	justify-content: center
	align-items: center
	padding: 15px 0px
	.teamB, .teamR
		width: calc(85% / 2)
		text-align: center
		img
			width: 20px
		span
			+text($fz: 18px, $fw: bold, $c: $color_black)
	.teamB
		span
			margin-left: 10px
	.teamR
		span
			margin-right: 10px
	.score
		width: 15%
		text-align: center
		span
			+text($fz: 18px, $fw: bold, $c: $color_blue)
.info-row
	+block
	display: flex
	justify-content: center
	align-items: center
	border-bottom: solid 2px $bgc_gray
	.anchor, .game
		width: 35%
		height: 247.8px
		border-bottom: solid 27.2px $bgc_white
	.game
		width: 35%
		.teamB, .teamR
			display: flex
			justify-content: space-between
			align-items: center
			margin-top: 15px
			img
				width: 20px
			span
				+text($fz: 16px, $fw: bold, $c: $color_black)
				margin-left: 5px
				letter-spacing: 1.32px
			.score
				+text($fz: 16px, $fw: bold, $c: $color_blue)
				margin-right: 5px
		.teamR
			margin-top: 25px
			margin-bottom: 100px
		.play
			img
				display: inline-block
				margin-left: 10px
				width: 18px
	.anchor
		background-color: lighten($color_black, 10)
		span
			position: absolute
			bottom: 30px
			&.anchor_name
				+text($fz: 16px, $c: $bgc_white)
				margin-left: 5px
			&.live_status
				right: 0%
			img
				width: 70px
		&::after
			+pseudo($t: 100%)
			+text($fz: 16px, $c: $color_blue2, $fw: bold)
			content: "点击观看"
			width: 100%
			height: 30px
			left: 0
			transform: translateY(-100%)
			background-color: rgba($bgc_black, 0.86)
			text-align: center
			line-height: 30px
	.info
		width: 65%
		position: relative
		table
			width: 33%
			display: inline-block
			vertical-align: top
		table:nth-child(2)
			width: 66%
		th
			+text($fz: 16px, $fw: bold, $c: $color_black)
			width: $maxWidth
			background-color: $bgc_gray2
			text-align: center
			border: solid 1px $bgc_white
		td
			+text($fz: 16px, $fw: bold, $c: $color_gray2)
			width: $maxWidth
			background-color: $bgc_gray2
			text-align: center
			border: solid 1px $bgc_white
			&.rs3
				height: 100.8px
			span
				font-size: 18px
				font-family: DINPro bold
				&.red
					color: #db6372
				&.green
					color: #69c969
		.score
			+text($fz: 16px, $fw: bold, $c: $color_gray2)
			font-family: DINPro bold
			span
				font-size: 18px
				color: #404656
				font-family: DINPro bold
		.tabs
			margin-bottom: 3px
			text-align: center
			.tab
				width: 10px
				height: 5px
				border-radius: 2.5px
				background-color: darken($bgc_gray2, 5)
				margin-right: 5px
				&.selected
					width: 20px
					background-color: $color_gray2
		.double_arrow
			position: absolute
			left: 97%
			top: 50%
			transform: translateY(20%)
.mt-10
	margin-top: 7px
</style>
