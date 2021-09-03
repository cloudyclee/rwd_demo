<script>
import { reactive, ref } from "vue";
export default {
	setup() {
		const ulRef = ref(null);
		const data = reactive([
			{ value: "今日", selected: false },
			{ value: "3/05", selected: true },
			{ value: "3/06", selected: false },
			{ value: "3/07", selected: false },
			{ value: "3/08", selected: false },
			{ value: "3/09", selected: false },
		]);
		const showSelectedBar = (e) => {
			const index = e.target.dataset.num;
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
		<li v-for="(item, idx) in data" :key="item.value" class="day-selector">
			<a
				@click.prevent="showSelectedBar"
				:class="{ 'selected-item': item.selected }"
				:data-num="idx"
				>{{ item.value }}</a
			>
		</li>
	</ul>
</template>

<style lang="sass" scoped>
@import "~@/assets/css/global.sass"

ul
	position: relative
	list-style: none
	padding: 0
	margin: 0
	border-bottom: solid 2px $bgc_gray2
	white-space: nowrap
	li:nth-child(1)
		a
			font-family: PingFang SC
	li
		display: inline
		cursor: pointer
		user-select: none
		a
			+text($fz: 17px, $c: $color_gray)
			display: inline-block
			padding-top: 8px
			padding-bottom: 3px
			width: 18%
			text-align: center
			font-family: DINPro Medium
			&.selected-item
				color: rgb(60, 74, 86)
				position: relative
				&::after
					+pseudo($t: calc(100% - 2px), $tt: 0%)
					width: 55px
					height: 2px
					background-color: $color_black
</style>
