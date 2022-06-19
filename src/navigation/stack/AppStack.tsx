import ImageViewerScreen from '@app/components/ImageViewerScreen'
import MediaViewer from '@app/components/MediaSwiper/RNMediaViewer'
import { SCREEN_ROUTER_APP_CUSTOMER } from '@app/constant/Constant'
import AddressAccountScreen from '@app/screens/App/Account/AdressAccountScreen'
import ListAddressAccount from '@app/screens/App/Account/ListAdressScreen'
import RequestQuoteScreen from '@app/screens/App/Account/RequestQuoteScreen'
import RightsIntroduceScreen from '@app/screens/App/Account/RightsIntroduceScreen'
import UpdateAccountScreen from '@app/screens/App/Account/UpdateAccountScreen'
import WalletPointScreen from '@app/screens/App/Account/WalletPointScreen'
import CartScreen from '@app/screens/App/Cart/CartScreen'
import CreateCartScreen from '@app/screens/App/Cart/CreateCartScreen'
import SelectAddressScreen from '@app/screens/App/Cart/SelectAddressScreen'
import SelectPaymentsScreen from '@app/screens/App/Cart/SelectPaymentsScreen'
import ListVoucherScreen from '@app/screens/App/Gift/ListVoucherScreen'
import VoucherDetailScreen from '@app/screens/App/Gift/VoucherDetail'
import BannerDetailScreen from '@app/screens/App/Home/BannerDetailScreen'
import IntroduceScreen from '@app/screens/App/Home/InstructScreen'
import NewScreen from '@app/screens/App/Home/NewScreen'
import NewsDetailScreen from '@app/screens/App/Home/NewsDetailScreen'
import SearchScreen from '@app/screens/App/Home/SearchScreen'
import LocationScreen from '@app/screens/App/Location/LocationScreen'
import NotificationScreen from '@app/screens/App/Notification/NotificationScreen'
import OrderDetailScreen from '@app/screens/App/Order/OrderDetailScreen'
import OrderReviewDetailScreen from '@app/screens/App/Order/OrderReviewDetailScreen'
import OrderScreen from '@app/screens/App/Order/OrderScreen'
import ReviewOrderScreen from '@app/screens/App/Order/ReviewOrder'
import DetailGiftScreen from '@app/screens/App/Point/DetailGiftScreen'
import ExchangePoint from '@app/screens/App/Point/ExchangePoint'
import HistoryCardScreen from '@app/screens/App/Point/history/HistoryCardScreen'
import HistoryGiftScreen from '@app/screens/App/Point/history/HistoryGiftScreen'
import HistoryPointScreen from '@app/screens/App/Point/history/HistoryPointScreen'
import HistoryGivePointScreen from '@app/screens/App/Point/HistoryGivePointScreen'
import MemberShipScreen from '@app/screens/App/Point/MenberShipScreen'
import PointHistoryScreen from '@app/screens/App/Point/PointHistoryScreen'
import ProductDetailScreen from '@app/screens/App/Product/ProductDetailScreen'
import ProductScreen from '@app/screens/App/Product/ProductScreen'
import QrCodeScreen from '@app/screens/App/QR_Code/QrCodeScreen'
import PolicyRankScreen from '@app/screens/App/Rank/PolicyRankScreen'
import RankMemberScreen from '@app/screens/App/Rank/RankMemberScreen'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

const {
  PRODUCT,
  NOTIFICATION,
  PRODUCT_DETAIL,
  MEDIA_VIEWER,
  EVALUATE,
  NEWS_DETAIL_SCREEN,
  CART,
  CREATE_CART,
  SEARCH_SCREEN,
  ADDRESS_ACCOUNT,
  LIST_ADDRESS,
  UPDATE_ACCOUNT,
  LIST_VOUCH,
  VOUCHER_DETAIL,
  ORDER_DETAIL,
  REVIEW_ORDER_SCREEN,
  NEW_SCREEN,
  RANK_MEMBER,
  REVIEW_DETAIL,
  POLICY_RANK,
  WALLET_POINT,
  INTRODUCE,
  RIGHTS_INTRODUCE,
  BANNER_DETAIL_SCREEN,
  REQUEST_QUOTE,
  SEARCH_LOCATION,
  IMAGE_VIEWER,
  SELECT_ADDRESS,
  SELECT_PAYMENT,
  QR_CODE,
  ORDER_SCREEN,
  EXCHANGE_POINT,
  HISTORY_POINT,
  MEMBERSHIP,
  DETAIL_GIFT,
  HISTORY_GIFT,
  HISTORY_CARD,
  POINT_HISTORY,
  HISTORY_GIVE_POINT,
  INSTRUCT,
} = SCREEN_ROUTER_APP_CUSTOMER
const Stack = createStackNavigator()

const mainScreen = {
  [PRODUCT]: ProductScreen,
  [NOTIFICATION]: NotificationScreen,
  [PRODUCT_DETAIL]: ProductDetailScreen,
  [MEDIA_VIEWER]: MediaViewer,
  [NEWS_DETAIL_SCREEN]: NewsDetailScreen,
  [CART]: CartScreen,
  [SEARCH_SCREEN]: SearchScreen,
  [ADDRESS_ACCOUNT]: AddressAccountScreen,
  [LIST_ADDRESS]: ListAddressAccount,
  [UPDATE_ACCOUNT]: UpdateAccountScreen,
  [LIST_VOUCH]: ListVoucherScreen,
  [VOUCHER_DETAIL]: VoucherDetailScreen,
  [ORDER_DETAIL]: OrderDetailScreen,
  [CREATE_CART]: CreateCartScreen,
  [REVIEW_ORDER_SCREEN]: ReviewOrderScreen,
  [NEW_SCREEN]: NewScreen,
  [RANK_MEMBER]: RankMemberScreen,
  [REVIEW_DETAIL]: OrderReviewDetailScreen,
  [POLICY_RANK]: PolicyRankScreen,
  [WALLET_POINT]: WalletPointScreen,
  [RIGHTS_INTRODUCE]: RightsIntroduceScreen,
  [BANNER_DETAIL_SCREEN]: BannerDetailScreen,
  [REQUEST_QUOTE]: RequestQuoteScreen,
  [SEARCH_LOCATION]: LocationScreen,
  [IMAGE_VIEWER]: ImageViewerScreen,
  [SELECT_ADDRESS]: SelectAddressScreen,
  [SELECT_PAYMENT]: SelectPaymentsScreen,
  [QR_CODE]: QrCodeScreen,
  [ORDER_SCREEN]: OrderScreen,
  [EXCHANGE_POINT]: ExchangePoint,
  [HISTORY_POINT]: HistoryPointScreen,
  [HISTORY_GIFT]: HistoryGiftScreen,
  [HISTORY_CARD]: HistoryCardScreen,
  [MEMBERSHIP]: MemberShipScreen,
  [DETAIL_GIFT]: DetailGiftScreen,
  [POINT_HISTORY]: PointHistoryScreen,
  [HISTORY_GIVE_POINT]: HistoryGivePointScreen,
  [INSTRUCT]: IntroduceScreen,
}

export const StackAppScreen = () => {
  return (
    <>
      {Object.keys(mainScreen).map((item, index) => (
        <Stack.Screen key={index} name={item} component={mainScreen[item]} />
      ))}
    </>
  )
}
