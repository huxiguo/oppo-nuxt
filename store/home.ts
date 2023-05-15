import { defineStore } from 'pinia'
import type { HomeInfoType } from '~/service/home'
import { getHomeInfo } from '~/service/home'
import type { INavbar, IBanner, ICategorys } from '~/store/type'
export const useHomeStore = defineStore('home', () => {
	const navbars = ref<INavbar[]>([])
	const banners = ref<IBanner[]>([])
	const categorys = ref<ICategorys[]>([])
	async function fetchHomeInfoData(type: HomeInfoType) {
		const { data } = await getHomeInfo(type)
		navbars.value = data.value?.data.navbars || []
		banners.value = data.value?.data.banners || []
		categorys.value = data.value?.data.categorys || []
	}
	return {
		navbars,
		banners,
		categorys,
		fetchHomeInfoData
	}
})
