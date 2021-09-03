<script>
export default {};
</script>

<template>
	<div class="ad"></div>
</template>

<style lang="sass" scoped>
@import "~@/assets/css/global.sass"

.ad
	+block
	background-image: url("~@/assets/ad.png")
	background-size: 100% auto
	background-repeat: no-repeat
	height: 12vw
</style>
