<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useOnePlusStore } from '@/store/onePlus'
import { ICategorys } from '~/store/type'
const onePlusStore = useOnePlusStore()
onePlusStore.fetchHomeInfoData('onePlus')
const { banners, categorys } = storeToRefs(onePlusStore)
const handleTabCategoryItemClick = (item: ICategorys) => {
	console.log(item)
}
</script>

<template>
	<div class="bg-#fafafa">
		<div class="wrapper">
			<Swiper :banners="banners" />
			<TabCategory
				:categorys="categorys"
				@item-click="handleTabCategoryItemClick"
			/>
			<template v-for="item in categorys" :key="item.id">
				<SectionCategory
					:category="item"
					v-if="item.productDetailss && item.productDetailss.length"
				/>
			</template>
		</div>
	</div>
</template>
