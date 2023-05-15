// uno.config.ts
import { defineConfig, presetUno, presetIcons, presetAttributify } from 'unocss'

export default defineConfig({
	rules: [
		[
			'flex',
			{
				display: 'flex',
				'flex-direction': 'row',
				'justify-content': 'space-between'
			}
		],
		[
			'flex-start',
			{
				display: 'flex',
				'flex-direction': 'row',
				'justify-content': 'flex-start'
			}
		],
		[
			'flex-center',
			{
				display: 'flex',
				'justify-content': 'center',
				'align-items': 'center'
			}
		],
		['p-0-20', { padding: '0 20px' }],
		['p-1-2', { padding: '1px 2px' }],
		[
			'text-el',
			{
				overflow: 'hidden',
				'text-overflow': 'ellipsis',
				'white-space': 'nowrap'
			}
		]
	],
	presets: [
		presetUno(),
		presetIcons({
			scale: 1.2,
			cdn: 'https://esm.sh/'
		}),
		presetAttributify()
	]
})
