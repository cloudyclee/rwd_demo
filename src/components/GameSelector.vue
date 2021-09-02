<script>
import { reactive, ref } from "vue";
export default {
	setup() {
		const ulRef = ref(null);
		const data = reactive([
			{
				value: "手球",
				selected: false,
				img: require("../assets/handball.png"),
			},
			{
				value: "足球",
				selected: true,
				img: require("../assets/soccer.png"),
			},
			{
				value: "篮球",
				selected: false,
				img: require("../assets/basketball.png"),
			},
			{
				value: "排球",
				selected: false,
				img: require("../assets/volleyball.png"),
			},
			{
				value: "乒乓球",
				selected: false,
				img: require("../assets/tabletennis.png"),
			},
			{
				value: "网球",
				selected: false,
				img: require("../assets/tennis.png"),
			},
		]);
		const showSelectedBar = (e) => {
			const index = e.currentTarget.dataset.num;
			data.forEach((item) => {
				item.selected = false;
			});
			data[index].selected = true;
			if (index === "4") {
				ulRef.value.style.left = `-${20 / 6}%`;
			} else if (index === "5") {
				ulRef.value.style.left = `-${40 / 6}%`;
			} else {
				ulRef.value.style.left = "0px";
			}
		};

		return {
			ulRef,
			data,
			showSelectedBar,
		};
	},
};
</script>

<template>
	<ul ref="ulRef">
		<li v-for="(item, idx) in data" :key="item.value">
			<a
				@click.prevent="showSelectedBar"
				:class="{ 'selected-item': item.selected }"
				:data-num="idx"
			>
				<img :src="item.img" alt="" />
				<span>{{ item.value }}</span>
			</a>
		</li>
	</ul>
</template>

<style lang="sass" scoped>
ul
	width: 120%
	position: relative
	list-style: none
	padding: 0
	margin: 0
	border-bottom: solid 2px #f5f6fa
	white-space: nowrap
	li
		display: inline
		cursor: pointer
		user-select: none
		a
			position: relative
			display: inline-block
			padding: 16px 0px
			width: 18%
			max-width: 135px
			z-index: 10
			img
				display: block
				margin: 0 auto
			span
				display: block
				font-size: 22px
				line-height: 32px
				text-align: center
				color: rgb(164, 169, 180)
				font-weight: 500
				margin-top: 10px
			&.selected-item
				color: rgb(60, 74, 86)
				position: relative
				&::before
					content: ""
					display: block
					position: absolute
					left: 50%
					top: 50%
					transform: translate(-50%, -52%)
					// background-image: url("~@/assets/selected.png")
					// background-repeat: no-repeat
					// background-position: center
					width: 86px
					height: 86px
					border-radius: 15px
					filter: drop-shadow(0 0 4px rgba(79,130,244,0.56))
					background-color: #ffffff
					border: 1px solid
</style>
