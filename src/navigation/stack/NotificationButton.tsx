/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import R from '@app/assets/R'
import { colors, dimensions, fonts } from '@app/theme'
import React, { useEffect, useMemo } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Animated,
  ViewStyle,
  StyleProp,
} from 'react-native'
import { useAppDispatch, useAppSelector } from '@app/store'

const height = dimensions.height
const width = dimensions.width
interface NotificationButtonProps {
  style?: StyleProp<ViewStyle>
}
const NotificationButton = (props: any) => {
  const { countNotification } = useAppSelector(
    state => state.NotificationReducer
  )
  const { style, focused } = props
  const shakeAnimation = new Animated.Value(1 / 6)
  const scaleAnimation = useMemo(() => new Animated.Value(1.2), [])
  const viewAnimation = useMemo(() => new Animated.Value(1.1), [])
  const rotation = React.useMemo(
    () =>
      shakeAnimation.interpolate({
        inputRange: [1 / 6, 2 / 6, 0.5, 4 / 6, 5 / 6, 1],
        outputRange: ['0deg', '-16deg', '16deg', '-16deg', '16deg', '0deg'],
      }),
    []
  )
  const startScaleIcon = (): any => {
    Animated.sequence([
      Animated.timing(scaleAnimation, {
        toValue: 1.2,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnimation, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start(() => startShake())
  }
  const startShake = (): any => {
    Animated.sequence([
      Animated.timing(shakeAnimation, {
        toValue: 1 / 6,
        duration: 0,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnimation, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start(() =>
      // setTimeout(() => {
      //   Animated.parallel([startScaleIcon(), startScaleView()])
      // }, 300)
      Animated.parallel([startScaleIcon(), startScaleView()])
    )
  }
  const startScaleView = () => {
    Animated.sequence([
      Animated.timing(viewAnimation, {
        toValue: 1.1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(viewAnimation, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
    ]).start()
  }

  useEffect(() => {
    // Animated.parallel([startScaleIcon(), startScaleView()])
    startScaleIcon()
    return () => { }
  }, [])

  return (
    <Animated.View
      style={[
        style,
        styles.noti_btn,
        // { transform: [{ scale: viewAnimation }] },
      ]}
    >
      <Animated.Image
        style={[
          styles.ic_noti,
          {
            transform: countNotification != 0 ? [{ rotate: rotation }] : [],
          },
        ]}
        source={focused ? R.images.ic_notification_focus : R.images.ic_notification}
        resizeMode={'contain'}
      />
      {countNotification != 0 &&
        <View style={styles.v_count_notification}>
          <Text style={styles.txt_count} children={countNotification} />
        </View>}
    </Animated.View>
  )
}

export default NotificationButton

const styles = StyleSheet.create({
  noti_btn: {
    width: width * 0.133,
    height: width * 0.133,
    // backgroundColor: colors.primary_e84,
    borderRadius: (width * 0.133) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ic_noti: {
    width: 25,
    height: 25
  },
  v_count_notification: {
    position: 'absolute',
    right: 5,
    top: 10,
    backgroundColor: colors.colorDefault.error,
    borderRadius: 10,
    minWidth: 18,
    alignItems: 'center'
  },
  txt_count: {
    color: colors.white,
    ...fonts.regular12,
    margin: 2
  }
})
