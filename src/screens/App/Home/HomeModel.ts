export interface Children_Category {
  icon_url?: any;
  id?: number;
  name?: string;
  display_order?: number;
  children_category?: any[];
  CategoryAttributes?: any[];
}
export interface AttributeOptions {
  id?: any;
  name?: string;
  create_at: string;
}
export interface CategoryAttributes {
  id?: any;
  name?: string;
  create_at: string;
  AttributeOptions: AttributeOptions[];
}
export interface Category {
  icon_url?: any;
  id?: number;
  name?: string;
  parent_id: 24;
  enterprise_id?: any;
  level?: any;
  status?: 1;
  create_by?: any;
  update_by?: any;
  delete_by?: any;
  is_active?: 1;
  create_at?: string;
  update_at?: string;
  delete_at?: any;
  version?: number;
  display_order?: number;
  children_category?: Children_Category[];
  CategoryAttributes?: CategoryAttributes[];
}
export interface Row {
  id?: number;
  name?: string;
  category_id?: number;
  star?: any;
  create_at?: any;
  category_name?: string;
  media_url?: any;
  min_max_buy_price?: any;
  price?: any;
  quantity_items?: number;
  Category?: Children_Category;
  ProductMedia?: any[];
  percent?: number;
}
export interface Category_children_post {
  icon_url?: any;
  id?: number;
  name?: string;
  parent?: number;
  display_order?: number;
  create_at?: any;
  status?: number;
}
export interface CategoryPost {
  id?: number;
  name?: string;
  imageUrl?: string;
  orderIndex?: number;
}
export interface FlashSaleProduct {
  id?: any;
  flashsale_id?: number;
  product_id?: number;
  flashsale_enterprise_id?: number;
  quantity?: number;
  category_id?: number;
  FlashSaleConfig?: any;
}
export interface FlashSale {
  id?: any;
  name?: string;
  product_remain: number;
  product_quantity: number;
  flashsale_price: any;
  flashsale_quantity: number;
  flashsale_remain: number;
  media_url?: any;
  flashsale_percent?: number;
  FlashSaleProducts?: FlashSaleProduct[];
}
export interface ItemBanner {
  urlImage?: any;
  newsID?: any;
}
export interface Banner {
  count?: number;
  rows?: ItemBanner[];
}
export interface HomeProps {
  rows?: Row[];
  listCategory?: Category[];
  listCategoryPost: CategoryPost[];
  listFlashSale: any[];
  listBanner: Banner;
  flashSalePending: any[];
}

export interface StateHomeData {
  isLoading?: boolean;
  data?: HomeProps;
  error?: boolean;
  isLoadMore?: boolean;
  isLastPage?: boolean;
}
