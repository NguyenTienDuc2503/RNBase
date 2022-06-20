import { StyleSheet, Text } from 'react-native'
import { View } from 'react-native'
import React from 'react'
import FstImage from '@app/components/FstImage/FstImage'
import R from '@app/assets/R'
import { colors } from '@app/theme'
import LinearGradient from 'react-native-linear-gradient'
import { TouchableOpacity } from 'react-native'
import NavigationUtil from '@app/navigation/NavigationUtil'
import { SCREEN_ROUTER_APP_CUSTOMER } from '@app/constant/Constant'
const colorLinear = ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.5)']
interface State {
  projectIntroduction?: any[]
}
const ProjectIntroductionLayout = (props: State) => {
  const { projectIntroduction } = props
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader} children={'Giới thiệu công trình'} />
      <View style={styles.viewHeader}>
        <TouchableOpacity
          style={styles.containerImage}
          onPress={() => {
            projectIntroduction &&
              NavigationUtil.navigate(SCREEN_ROUTER_APP_CUSTOMER.NEW_SCREEN, {
                item: projectIntroduction[0].children_category[0],
              })
          }}
        >
          <FstImage
            source={R.images.img_project_completed}
            style={styles.imgItem}
          />
          <LinearGradient colors={colorLinear} style={styles.linearGradient} />
          <Text
            children={`${
              projectIntroduction
                ? projectIntroduction[0].children_category[0].name
                : 'Đã hoàn thiện'
            }`}
            style={styles.textTitleItem}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.containerImage}
          onPress={() => {
            projectIntroduction &&
              NavigationUtil.navigate(SCREEN_ROUTER_APP_CUSTOMER.NEW_SCREEN, {
                item: projectIntroduction[0].children_category[1],
              })
          }}
        >
          <FstImage
            source={R.images.img_product_no_complete}
            style={styles.imgItem}
          />
          <LinearGradient colors={colorLinear} style={styles.linearGradient} />
          <Text
            children={`${
              projectIntroduction
                ? projectIntroduction[0].children_category[1].name
                : 'Đang thi công'
            }`}
            style={styles.textTitleItem}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.containerFooter}
        onPress={() => {
          projectIntroduction &&
            NavigationUtil.navigate(SCREEN_ROUTER_APP_CUSTOMER.NEW_SCREEN, {
              item: projectIntroduction[0].children_category[2],
            })
        }}
      >
        <FstImage source={R.images.img_project_home} style={styles.imgItem} />
        <LinearGradient colors={colorLinear} style={styles.linearGradient} />
        <Text
          children={`${
            projectIntroduction
              ? projectIntroduction[0].children_category[2].name
              : 'Dự án'
          }`}
          style={styles.textTitleItem}
        />
      </TouchableOpacity>
    </View>
  )
}
export default ProjectIntroductionLayout
const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 15,
    paddingVertical: 10,
  },
  textHeader: {
    color: '#073B4C',
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
  },
  textTitleItem: {
    position: 'absolute',
    bottom: 12,
    left: 18,
    color: colors.white,
    fontSize: 16,
    lineHeight: 24,
  },
  imgItem: {
    height: '100%',
    width: '100%',
    borderRadius: 12,
  },
  viewHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 16,
  },
  containerImage: {
    height: 124,
    width: '48%',
    borderRadius: 12,
  },
  containerFooter: {
    width: '100%',
    height: 106,
    borderRadius: 12,
    marginTop: 16,
  },
  linearGradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
})
