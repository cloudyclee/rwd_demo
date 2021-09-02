<script>
import NestedNavbar from "../components/NestedNavbar.vue";
export default {
	components: { NestedNavbar }
};
</script>

<template>
	<NestedNavbar />
	<div class="lobby">
		<router-view />
	</div>
</template>

<style></style>
