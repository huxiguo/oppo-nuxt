import { defineStore } from 'pinia'
import { getDetailInfo } from '~/service/detail'
import type { IDetailProductType } from '~/service/detail'
import { IDetailType } from '~/typing/detail'
export const useDetailStore = defineStore('detail', () => {
	const detailInfo = ref<IDetailType[]>([])
	async function getDetailInfoData(type: IDetailProductType) {
		const { data } = await getDetailInfo(type)
		detailInfo.value = data.value?.data || []
	}
	return {
		detailInfo,
		getDetailInfoData
	}
})
