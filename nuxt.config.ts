// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: [
		'normalize.css',
		'@unocss/reset/normalize.css',
		'@/assets/css/global.scss'
	],
	modules: [
		'@unocss/nuxt',
		'@nuxt/devtools',
		'@pinia/nuxt',
		'@element-plus/nuxt',
		'@vueuse/nuxt'
	],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: "@use '~/assets/css/variables.scss' as *;"
				}
			}
		}
	},
	app: {
		head: {
			meta: [
				{
					name: 'description',
					content: 'OPPO专区，官方正品，最新最全的OPPO手机产品以及配件在线抢购!'
				},
				{
					name: 'keywords',
					content: 'OPPO商城，OPPO专区, OPPO手机，OPPO配件，OPPO, OPPO官网商城'
				},
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
			],
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
			noscript: [{ children: 'Javascript is required' }]
		}
	}
})
