<script setup lang="ts">
import { ICategorys } from '~/store/type'

export interface IProps {
	categorys: ICategorys[]
}

const props = withDefaults(defineProps<IProps>(), {
	categorys: () => []
})

const emits = defineEmits<{
	(e: 'itemClick', item: ICategorys): void
}>()
const handleItemClick = (item: ICategorys) => {
	emits('itemClick', item)
}
</script>

<template>
	<div class="m-t-40px flex flex-items-center">
		<template v-for="(item, index) in categorys" :key="index">
			<div class="h100% cursor-pointer" @click="handleItemClick(item)">
				<img class="w80px h80px" :src="item.picStr" :alt="item.title" />
				<div class="m-t-16px text-16px text-center h24px max-w-120px">
					{{ item.title }}
				</div>
			</div>
		</template>
	</div>
</template>
