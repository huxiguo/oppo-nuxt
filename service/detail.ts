import { IDetailType } from '~/typing/detail'
import myRequest from './index'
import type { IResultData } from './index'
export type IDetailProductType = 'oppo' | 'air' | 'watch' | 'tablet'
export const getDetailInfo = (type: IDetailProductType) => {
	return myRequest.get<IResultData<IDetailType[]>>('/oppoDetail', {
		type: type
	})
}
