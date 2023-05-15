<script setup lang="ts">
import type { IBanner } from '~/store/type'

export interface IProps {
	banners: IBanner[]
}
const props = withDefaults(defineProps<IProps>(), {
	banners: () => []
})

const currentIndex = ref(0)
const handleChange = (index: number) => {
	currentIndex.value = index
}
</script>

<template>
	<div class="p-t-36px relative">
		<el-carousel
			trigger="click"
			height="480px"
			indicator-position="none"
			@change="handleChange"
		>
			<el-carousel-item v-for="item in banners" :key="item.id">
				<img class="w100% h100% b-rd-10px" :src="item.picStr" alt="OPPO" />
			</el-carousel-item>
		</el-carousel>
		<!-- 指示器 -->
		<ul class="dots">
			<li
				v-for="(item, index) in banners"
				:class="['dot', currentIndex === index ? 'active' : '']"
				:key="item.id"
			></li>
		</ul>
	</div>
</template>

<style scoped lang="scss">
.dots {
	height: 40px;
	width: 100%;
	position: absolute;
	bottom: 0px;
	left: 0;
	text-align: center;

	.dot {
		display: inline-block;
		width: 10px;
		height: 10px;
		box-sizing: border-box;
		border-radius: 10px;
		margin-right: 10px;
		background-color: #fff;
		opacity: 0.8;
	}
	.active {
		background-color: transparent;
		border: 2px solid #fff;
		width: 12px;
		height: 12px;
		position: relative;
		top: 1px;
	}
}
</style>
