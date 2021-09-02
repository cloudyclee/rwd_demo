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
			<img src="../assets/teamR.png" alt="" />
			<span>莫塔瓜</span>
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
span, .title-text
	display: inline-block
	vertical-align: middle
	font-size: 22px
	line-height: 32px
	color: rgb(126, 137, 166)
img
	display: inline-block
	vertical-align: middle
.title-row
	width: 100%
	max-width: 710px
	margin: 0 auto
	border-bottom: solid 2px #efefef
	.title, .more
		display: inline-block
		width: 50%
	.more
		text-align: right
		span
			color: #a4a9b4
			font-size: 18px
			margin-right: 10px
.status-row
	width: 100%
	max-width: 710px
	display: flex
	justify-content: center
	align-items: center
	margin: 0 auto
	padding: 25px 0px
	.teamB, .teamR
		width: 30%
		text-align: center
		span
			margin-left: 15px
			font-size: 24px
			line-height: 32px
			font-weight: bold
			color: rgb(60, 74, 86)
	.score
		width: 10%
		text-align: center
		span
			font-size: 24px
			line-height: 32px
			font-weight: bold
			color: rgb(79, 130, 244)
.info-row
	width: 100%
	max-width: 710px
	margin: 0 auto
	display: flex
	justify-content: center
	align-items: center
	border-bottom: solid 2px #efefef
	.anchor, .game
		width: 50%
		max-width: 200px
		height: 280px
		border-bottom: solid 27.2px #fff
	.game
		.teamB, .teamR
			display: flex
			justify-content: space-between
			align-items: center
			margin-top: 30px
			span
				margin-left: 15px
				font-size: 24px
				line-height: 32px
				font-weight: bold
				letter-spacing: 1.32px
				color: rgb(60, 74, 86)
			.score
				font-size: 24px
				line-height: 32px
				font-weight: bold
				margin-right: 15px
				color: rgb(79, 130, 244)
		.teamR
			margin-top: 40px
			margin-bottom: 100px
		.play
			img
				display: inline-block
				margin-left: 10px



	.anchor
		background-color: #666
		span
			position: absolute
			bottom: 46px
			margin-bottom: 5px
			&.anchor_name
				font-size: 24px
				line-height: 32px
				color: #ffffff
				font-weight: 500
				margin-left: 10px
			&.live_status
				right: 0%

		&::after
			content: "点击观看"
			display: block
			position: absolute
			width: 100%
			height: 46px
			left: 0
			top: 100%
			transform: translateY(-100%)
			background-color: rgba(#000, 0.86)
			font-size: 22px
			line-height: 32px
			color: #90b1ff
			font-weight: bold
			text-align: center
			line-height: 46px
	.info
		position: relative
		table
			display: inline-block
			vertical-align: top
		th
			//width: 158px
			height: 53px
			font-size: 24px
			line-height: 32px
			font-weight: bold
			color: rgb(60, 74, 86)
			background-color: #f7f8fc
			text-align: center
			border: solid 2.5px #fff
		td
			//width: 158px
			height: 67px
			background-color: #f7f8fc
			text-align: center
			font-size: 24px
			line-height: 32px
			font-weight: bold
			color: #7e89a6
			border: solid 2.5px #fff
			&.rs3
				height: 105.5px
			span
				font-size: 24px
				&.red
					color: #db6372
				&.green
					color: #69c969
		.score
			font-size: 22px
			line-height: 32px
			color: #7e89a6
			font-weight: bold
			font-family: DIN Pro
			span
				font-size: 24px
				color: #404656
		.tabs
			margin-bottom: 3px
			text-align: center
			.tab
				width: 10px
				height: 5px
				border-radius: 2px
				background-color: #eceef2
				margin-right: 5px
				&.selected
					width: 20px
					background-color: #bbc3e4
		.double_arrow
			position: absolute
			left: 97%
			top: 50%
			transform: translateY(20%)

.mt-10
	margin-top: 10px
@media screen and (min-width: 768px)
	.info-row
		.info
			td, th
				width: 158px
</style>
