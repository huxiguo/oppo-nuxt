<script setup lang="ts">
import { ICategorys } from '~/store/type'

export interface IProps {
	category: ICategorys
}
const props = defineProps<IProps>()
</script>

<template>
	<SectionTitle :title="category.title!" />
	<GridView
		:product-detailss="category.productDetailss!"
		:category-url="category.url!"
	/>
</template>
