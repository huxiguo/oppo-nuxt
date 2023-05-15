<script setup lang="ts">
export interface IProps {
	title: string
}
const props = defineProps<IProps>()
</script>

<template>
	<div class="p-t-60px m-b-24px text-24px font-medium">{{ title }}</div>
</template>
