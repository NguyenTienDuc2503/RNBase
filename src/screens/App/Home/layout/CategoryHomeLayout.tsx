import { FlatList, View } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { TouchableOpacity } from 'react-native'
import { categoryState } from './interface/layoutHomeInterface'
import { Category } from '../HomeModel'
import FstImage from '@app/components/FstImage/FstImage'
import NavigationUtil from '@app/navigation/NavigationUtil'
import { SCREEN_ROUTER_APP_CUSTOMER } from '@app/constant/Constant'
// import reactotron from '@app/config/ReactotronConfig'
interface ItemState {
  item?: Category
}
const CategoryHomeLayout = (props: categoryState) => {
  const { listCategory } = props
  const renderItemCategory = (any: ItemState) => {
    const { item } = any
    // reactotron.log(item)
    const routeParams = () => {
      if (item?.CategoryAttributes?.length !== 0) {
        NavigationUtil.navigate(
          SCREEN_ROUTER_APP_CUSTOMER.PRODUCT_CATEGORY_DETAIL,
          {
            category_id: item?.id,
            children_category_id: item?.id,
            item_category: item,
          }
        )
      } else if (item?.children_category?.length !== 0) {
        NavigationUtil.navigate(
          SCREEN_ROUTER_APP_CUSTOMER.PRODUCT_CATEGORY_ONE,
          {
            item_category: item,
            filter: null,
          }
        )
      } else {
        NavigationUtil.navigate(SCREEN_ROUTER_APP_CUSTOMER.PRODUCT)
      }
    }
    const renderName = (name?: string) => {
      if (name && name?.length >= 15) {
        return name?.substring(0, 15) + '...'
      } else {
        return name
      }
    }
    return (
      <TouchableOpacity
        style={styles.containerItem}
        onPress={() => {
          routeParams()
        }}
      >
        <View>
          <FstImage
            source={{ uri: item?.icon_url || null }}
            style={styles.imgStyle}
          />
        </View>
        <Text
          children={`${item?.name}`}
          style={styles.textName}
          numberOfLines={2}
          ellipsizeMode="tail"
        />
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
        style={{ marginTop: 8 }}
        contentContainerStyle={{ flexGrow: 1 }}
        data={listCategory || []}
        keyExtractor={(item, index) => `${item.id} ${index}`}
        horizontal
        renderItem={renderItemCategory}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
export default CategoryHomeLayout
const styles = StyleSheet.create({
  container: {
    paddingLeft: 8,
    paddingVertical: 10,
  },
  containerItem: {
    maxWidth: 75,
    marginRight: 36,
    alignItems: 'center',
  },
  imgStyle: {
    width: 50,
    height: 50,
    borderRadius: 12,
    // backgroundColor: '#E9ECEF',
  },
  textName: {
    marginTop: 10,
    color: '#262626',
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
  },
})
