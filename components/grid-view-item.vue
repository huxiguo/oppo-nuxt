<script setup lang="ts">
import { IProductDetailss } from '~/store/type'

export interface IProps {
	productDetail: IProductDetailss
}

const props = defineProps<IProps>()
</script>

<template>
	<div class="grid-view-item text-center bg-#fff b-rd-8px">
		<!-- img -->
		<div>
			<img
				class="h150px w130px m-t-14px m-b-7px"
				:src="productDetail.url"
				alt=""
			/>
		</div>
		<!-- title -->
		<div class="p-0-20 m-t-2px font-medium text-15px text-center text-el">
			{{ productDetail.title }}
		</div>
		<!-- labels -->
		<div class="h45px flex-center">
			<template v-for="item in productDetail.activityList" :key="item.type">
				<span
					class="inline-block p-1-2 text-#f34141 text-13px border-1px border-#f34141 b-solid m-r-4px m-b-4px"
				>
					{{ item.activityInfo }}
				</span>
			</template>
		</div>
		<!-- price -->
		<div p-b-40px>
			<span class="text-#f34141 text-13px">
				{{ productDetail.priceInfo?.prefix }}
				{{ productDetail.priceInfo?.currencyTag }}
			</span>
			<span class="text-#f34141 text-20px line-height-none">
				{{ productDetail.priceInfo?.buyPrice }}
			</span>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.grid-view-item {
	transition: all 0.2s linear;
	&:hover {
		@include hoverEffect();
	}
}
</style>
