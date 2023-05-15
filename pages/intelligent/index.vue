<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useIntelligentStore } from '@/store/intelligent'
import { ICategorys } from '~/store/type'
const intelligentStore = useIntelligentStore()
intelligentStore.fetchHomeInfoData('intelligent')
const { banners, categorys } = storeToRefs(intelligentStore)
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
