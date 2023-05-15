<script setup lang="ts"></script>

<template>
	<div class="bg-#000 h-36px sticky top-0 z-100">
		<div class="wrapper h-100% flex flex-row flex-justify-between">
			<div
				class="flex flex-row flex-justify-between flex-justify-start flex-items-center"
			>
				<NuxtLink
					class="c-#fff text-12px mr-24px decoration-none cursor-pointer"
					to="/"
				>
					<span>OPPO官网</span>
				</NuxtLink>
				<NuxtLink class="link" to="/">
					<span>一加官网</span>
				</NuxtLink>
			</div>
			<div
				class="flex flex-row flex-justify-between flex-justify-end flex-items-center"
			>
				<a href="#" class="link download">
					<span>下载 OPPO 商城App</span>
					<div class="app">
						<img class="ecode" src="~/assets/images/ecode.png" alt="OPPO" />
						<div class="name">扫码下载 OPPO 商城 App</div>
					</div>
				</a>
				<NuxtLink class="link" to="/login" target="_blank">
					<Icon class="text-12px m-r-6px c-#fff op-100" icon="i-carbon-user" />
					<span>登录</span>
				</NuxtLink>
				<NuxtLink class="link" to="/register" target="_blank">
					<span>注册</span>
				</NuxtLink>
				<a href="" class="link">
					<Icon
						class="text-15px m-r-6px c-#fff op-100"
						icon="i-carbon-shopping-cart"
					/>
					<span>购物车 </span>
					<span>(0)</span>
				</a>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.link {
	color: white;
	text-decoration: none;
	height: 14px;
	line-height: 14px;
	padding: 0 14px;
	border-right: 1px solid #fff;
	font-size: 12px;
	cursor: pointer;
	i {
		margin-right: 6px;
	}
	.icon-user {
		font-size: 12px;
		opacity: 1;
	}
	.icon-shoppingcart {
		font-size: 15px;
		opacity: 1;
	}
}

.link:last-child {
	border-right: 1px solid #000;
}

.download {
	position: relative;
	.app {
		/* 默认隐藏 */
		display: none;
		position: absolute;
		top: 25px;
		left: 0;
		padding: 8px;
		box-shadow: 0 4px 8px 0 rgb(0 0 0 / 10%);
		z-index: 10000;
	}

	.ecode {
		width: 140px;
		height: 140px;
	}
	.name {
		color: #000;
		margin-top: 2px;
	}
}

.download:hover .app {
	display: block;
}
</style>
