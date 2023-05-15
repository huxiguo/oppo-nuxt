<script setup lang="ts">
import type { TabsPaneContext } from 'element-plus'
import { storeToRefs } from 'pinia'
import { useDetailStore } from '@/store/detail'
import type { IDetailProductType } from '~/service/detail'

const route = useRoute()
const detailStore = useDetailStore()

const { type } = route.query
const activeName = ref('')
detailStore.getDetailInfoData(type as IDetailProductType)
const { detailInfo } = storeToRefs(detailStore)

watchEffect(() => {
	activeName.value = detailInfo.value[0].title!
})
const handleClick = (tab: TabsPaneContext, event: Event) => {
	console.log(tab, event)
}
</script>
<template>
	<div class="bg-#fafafa p-b-60px p-t-8px">
		<div class="wrapper content">
			<el-tabs v-model="activeName" class="oppo-tabs" @tab-click="handleClick">
				<template v-for="item in detailInfo" :key="item.id">
					<el-tab-pane :label="item.title" :name="item.title">
						<GridView :product-detailss="item.productDetailss!" />
					</el-tab-pane>
				</template>
			</el-tabs>
			<NoMore />
		</div>
	</div>
</template>
<style lang="scss" scoped>
.content {
	.oppo-tabs {
		/* 背景 */
		:deep(.el-tabs__header) {
			background-color: white;
		}

		:deep(.el-tabs__nav-wrap) {
			height: 48px;
			padding: 0 52px;
			/* 底部线 */
			&::after {
				background-color: white;
			}
			/* 按钮 */
			.el-tabs__nav-prev,
			.el-tabs__nav-next {
				width: 48px;
				.el-icon,
				svg {
					width: 25px;
					height: 25px;
				}
				svg {
					position: relative;
					top: 10px;
				}
			}

			/* 移动线条激化样式 */
			.el-tabs__nav-next + .el-tabs__nav-scroll .el-tabs__active-bar {
				left: 0px;
			}
			.el-tabs__active-bar {
				background-color: $priceColor;
			}
		}

		:deep(.el-tabs__item) {
			height: 48px;
			opacity: 0.6;
			font-weight: 400;
			padding-top: 5px;

			position: relative;
			/* hover字体演示 */
			&:hover,
			&.is-active {
				color: $priceColor;
			}
		}
	}
}
</style>
