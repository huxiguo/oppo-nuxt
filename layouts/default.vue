<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useHomeStore } from '@/store/home'
const homeStore = useHomeStore()
homeStore.fetchHomeInfoData('oppo')
const { navbars } = storeToRefs(homeStore)
</script>

<template>
	<div class="layout">
		<!-- header -->
		<AppHeader />
		<AppNavbar :navbars="navbars" />
		<slot />
		<!-- footer -->
		<AppFooter />
	</div>
</template>
