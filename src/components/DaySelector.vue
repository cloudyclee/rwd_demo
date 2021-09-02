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
			display: inline-block
			padding-top: 16px
			padding-bottom: 5px
			width: 18%
			max-width: 135px
			font-size: 22px
			line-height: 32px
			text-align: center
			color: rgb(164, 169, 180)
			font-weight: 500
			&.selected-item
				color: rgb(60, 74, 86)
				position: relative
				&::after
					content: ""
					display: block
					position: absolute
					left: 50%
					top: calc(100% - 2px)
					transform: translateX(-50%)
					width: 55px
					height: 2px
					background-color: rgb(60, 74, 86)
					z-index: 10
@media screen and (max-width: 768px)
	ul
		li
</style>
