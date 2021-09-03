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
		const showSelected = (e) => {
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
			showSelected,
		};
	},
};
</script>

<template>
	<ul ref="ulRef">
		<li v-for="(item, idx) in data" :key="item.value">
			<a
				@click.prevent="showSelected"
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
@import "~@/assets/css/global.sass"
ul
	width: 120%
	position: relative
	list-style: none
	padding: 0
	margin: 0
	border-bottom: solid 2px $bgc_gray2
	white-space: nowrap
	li
		display: inline
		cursor: pointer
		user-select: none
		a
			position: relative
			display: inline-block
			padding-top: 8px
			padding-bottom: 3px
			width: 18%
			max-width: 65px
			text-align: center
			img
				display: block
				margin: 0 auto
				width: 30px
			span
				+text($fz: 17px, $c: $color_gray)
				display: block
				text-align: center
				margin-top: 10px
			&.selected-item
				position: relative
				span
					color: $color_black
				&::before
					+pseudo($tt: -52%)
					width: 50px
					height: 75px
					border-radius: 15px
					filter: drop-shadow(0 0 4px rgba(79,130,244,0.56))
					border: 1px solid
</style>
