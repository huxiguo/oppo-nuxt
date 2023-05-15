<script setup lang="ts">
import Search from '~/components/Search.vue'
import type { INavbar } from '~/store/type'
export interface IProps {
	navbars: INavbar[]
}
const props = withDefaults(defineProps<IProps>(), {
	navbars: () => []
})

// 当前选中
const currentIndex = ref<number>(0)
// 点击切换
const handleItemClick = (index: number) => {
	currentIndex.value = index
}
// 获取切换路由
const getPagePath = computed(() => {
	return (item: INavbar) => {
		let path = '/'
		if (item.type !== 'oppo') {
			path += item.type
		}
		return path
	}
})
</script>

<template>
	<div class="navbar h-84px z-99 b-b-solid b-b-1 bg-#fff">
		<div class="wrapper h-100% flex justify-start flex-items-center">
			<NuxtLink to="/" class="inline-block w-250px h-50px">
				<img src="~/assets/images/logo.png" class="h-100%" alt="" />
				<h1 class="h-0 w-0">OPPO官网</h1>
			</NuxtLink>
			<ul class="flex w-530px m-l-60px">
				<template v-for="(item, index) in navbars" :key="index">
					<li>
						<NuxtLink
							:active-class="currentIndex === index ? 'active' : ''"
							class="text-14px op-55 hover:op-100 text-#000"
							:to="getPagePath(item)"
							@click="handleItemClick(index)"
						>
							{{ item.title }}
						</NuxtLink>
					</li>
				</template>
			</ul>
			<Search m-r-50px></Search>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.navbar {
	height: $navBarHeight;
	border-bottom-color: rgba(0, 0, 0, 0.06);
	@include elementSticky(36px);
	h1 {
		text-indent: -1000px;
	}
	.active {
		opacity: 1;
		color: #000;
	}
}
</style>
