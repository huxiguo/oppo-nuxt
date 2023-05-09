<script setup lang="ts">
const props = defineProps({
	icon: {
		type: String,
		required: true
	},
	class: {
		type: String,
		default: ''
	}
})
</script>

<template>
	<div class="icon-container" :class="[props.class, props.icon]" />
</template>

<style>
.icon-container {
	display: inline-block;
	vertical-align: middle;
	line-height: 1em !important;
}
</style>
