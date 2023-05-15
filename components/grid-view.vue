<script setup lang="ts">
import { IProductDetailss } from '~/store/type'

export interface IProps {
	productDetailss: IProductDetailss[]
	categoryUrl?: string
}
const props = defineProps<IProps>()
</script>

<template>
	<div class="flex-start w1266px flex-wrap">
		<!-- 第一个item -->
		<div
			class="first w20% p-r-18px m-b-18px h300px box-border bg-#fafafa cursor-pointer"
			v-if="categoryUrl"
		>
			<img :src="categoryUrl" alt="" />
		</div>
		<template v-for="item in productDetailss" :key="item.id">
			<div
				class="w20% p-r-18px m-b-18px h300px box-border bg-#fafafa cursor-pointer"
			>
				<GridViewItem :product-detail="item" />
			</div>
		</template>
	</div>
</template>
<style lang="scss" scoped>
.first {
	width: 40%;
	& > img {
		height: 100%;
		width: 100%;
		transition: all 0.2s linear;
		&:hover {
			@include hoverEffect();
		}
	}
}
</style>
