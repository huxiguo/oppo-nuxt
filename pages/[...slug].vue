<script setup lang="ts">
definePageMeta({
	layout: '404'
})
</script>

<template>
	<div class="bg">
		<img src="~/assets/images/404.png" alt="" />
	</div>
</template>
<style scoped>
img {
	width: 800px;
	/* 屏幕居中 */
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.bg {
	height: 100vh;
	-webkit-animation: color-change-5x 8s linear infinite alternate both;
	animation: color-change-5x 8s linear infinite alternate both;
}
@-webkit-keyframes color-change-5x {
	0% {
		background: #19dcea;
	}
	25% {
		background: #b22cff;
	}
	50% {
		background: #ea2222;
	}
	75% {
		background: #f5be10;
	}
	100% {
		background: #3bd80d;
	}
}
@keyframes color-change-5x {
	0% {
		background: #19dcea;
	}
	25% {
		background: #b22cff;
	}
	50% {
		background: #ea2222;
	}
	75% {
		background: #f5be10;
	}
	100% {
		background: #3bd80d;
	}
}
</style>
