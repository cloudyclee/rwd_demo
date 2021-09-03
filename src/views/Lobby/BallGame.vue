<script>
import DaySelector from "@/components/DaySelector.vue";
import GameSelector from "@/components/GameSelector.vue";
import Advertisement from "@/components/Ad.vue";
import OnlineAnchor from "@/components/OnlineAnchor.vue";
import GameInfo from "@/components/GameInfo.vue";
import { reactive, ref } from "vue";
export default {
	components: {
		DaySelector,
		GameSelector,
		Advertisement,
		OnlineAnchor,
		GameInfo,
	},
	setup() {
		const arr_bool = reactive([false, true, true]);
		const video_path = ref("video");
		const audio_path = ref("audio");
		return {
			arr_bool,
			video_path,
			audio_path,
		};
	},
};
</script>

<template>
	<DaySelector />
	<GameSelector />
	<Advertisement />
	<OnlineAnchor />
	<div class="blank"></div>
	<div class="title">
		<span>美洲冠军联赛</span>
		<span class="arrow">⌵</span>
	</div>
	<GameInfo :show-status="arr_bool[0]">
		☆ <strong>上半场</strong> 02:23
	</GameInfo>
	<GameInfo :show-status="arr_bool[1]" :path="video_path">
		☆ <strong>下半场</strong> 02:23
	</GameInfo>
	<GameInfo :show-status="arr_bool[2]" :path="audio_path">
		☆ <strong>下半场</strong> 02:23
	</GameInfo>
</template>

<style lang="sass" scoped>
@import "~@/assets/css/global.sass"

.blank
	width: 100%
	height: 5px
	background-color: lighten($color_blue, 30)
.title
	+block
	border-bottom: solid 2px $bgc_gray
	span
		display: inline-block
		width: 50%
		+text($fw: bold)
		&.arrow
			width: calc(50% - 5px)
			text-align: right
			color: $color_gray
			margin-right: 5px
</style>
