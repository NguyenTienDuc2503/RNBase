import { Category, FlashSale, Row } from '../../HomeModel'

export interface Product {
  id?: any
  price?: number
  name?: string
  status?: any
}
export interface categoryState {
  listCategory?: Category[]
}
export interface productSellingState {
  listProductSelling?: Row[]
  onMomentumScrollBegin?: any
  handleLoadMore?: any
  isLoadMore?: boolean
  onRefresh?: any
}
export interface productFlashSaleState {
  listProductFlashSale: FlashSale[]
  time?: any
  getData: Function
  isShowMessage?: any
  setIsShowMessage?: any
  data?: any[]
  listFlashSalePending: any
}
export interface KeyState {
  listKey: any[]
}
