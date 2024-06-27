import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React from 'react'
import images from '../constants/images'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import Location from './Location'

type Props = {
  navigation: any
  route: any
}
const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)

const Selection = ({ navigation, route }: Props) => {
  const label = route.params.label
  const { width, height } = Dimensions.get("screen")
  const top = useSharedValue([-(height/2), (height)])
  const line = useSharedValue(0)

  React.useEffect(()=> {
    setTimeout(()=> {
      top.value = [0, 0]
      setTimeout(()=> {
        line.value = width * .7
      }, 250)
    }, 400)
  })

  const islandAnimatedStyle = useAnimatedStyle(() => {
    return {
        top: withTiming(top.value[0], {
          easing: Easing.bezier(1,1,0,0)
        }),
    }
  })

  const mainlandAnimatedStyle = useAnimatedStyle(() => {
    return {
      top: withTiming(top.value[1])
    }
  })

  const lineAnimationStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(line.value)
    }
  })
  
  return (
    <View style={styles.container}>
      <AnimatedTouchableOpacity style={[{
        alignSelf: 'flex-start',
        overflow: 'hidden'
      }, islandAnimatedStyle]}
      onPress={()=> {navigation.replace('Home', {label: label, location: "Island"})}}
      >
        <Image source={images.IslandImage} style={{ width: width, height: height * 0.5, resizeMode: 'stretch' }} />
        <View style={[StyleSheet.absoluteFillObject, { alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,.8)' }]}>
          <Text style={{ color: 'white', fontSize: 30, fontFamily: 'Lobster' }}>Island</Text>
        </View>
      </AnimatedTouchableOpacity>
      <AnimatedTouchableOpacity style={[{
        alignSelf: 'flex-start',
        overflow: 'hidden'
      }, mainlandAnimatedStyle]}
      onPress={() => {navigation.replace('Home', {label: label, location: "Mainland"})}}
      >
        <Image source={images.Mainland} style={{ width: width, height: height * 0.5, resizeMode: 'stretch' }} />
        <View style={[StyleSheet.absoluteFillObject, { alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,.5)' }]}>
          <Text style={{ color: 'white', fontSize: 30, fontFamily: 'Lobster' }}>MainLand</Text>
        </View>
      </AnimatedTouchableOpacity>
      <View style={[StyleSheet.absoluteFillObject, {width, height: height - 20, alignItems: 'center', justifyContent: 'center'}]} >
        <Animated.View style={[{ backgroundColor: 'white', height: 2 }, lineAnimationStyle]}/>
      </View>
    </View>
  )
}

export default Selection

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },

  imagesContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,.6)"
  }
})