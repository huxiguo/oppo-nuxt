<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useHomeStore } from '~/store/home'
import type { ICategorys } from '~/store/type'

const homeStore = useHomeStore()
const { banners, categorys } = storeToRefs(homeStore)
// 子组件点击事件
const handleTabCategoryItemClick = (item: ICategorys) => {
	return navigateTo({
		path: '/detail',
		query: {
			type: item.type
		}
	})
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
				<SectionCategory :category="item" />
			</template>
		</div>
	</div>
</template>
