import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Animated, { useAnimatedRef, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import UserWelcomeScreenAnimation from '../components/WelcomeAnimation'
import { StatusBar } from 'expo-status-bar'
import LottieView from 'lottie-react-native'
import icons from '../constants/icons'

type Props = {
  navigation: any
}

type lottieAnimationParams = {
  animation: any
  description: string
  backgroundColor: string
}

const UserWelcome = ({navigation}: Props) => {
  const lottieAnimations = [{
    animation: require("../../assets/videos/lottie_animation/food.json"),
    description: "Get recommended your new favourite Restaurant in Lagos",
    backgroundColor: 'lightgreen',
    header: "foodie"
  },
  {
    animation: require("../../assets/videos/lottie_animation/map.json"),
    description: "Integrated with Google map location service ",
    backgroundColor: 'pink',
    header: "Map"
  },
  {
    animation: require("../../assets/videos/lottie_animation/uber.json"),
    description: "Automatic communiction with Uber",
    backgroundColor: 'yellow',
    header: "Uber"
  }
  ]

  const flatListRef = useAnimatedRef<FlatList<lottieAnimationParams>>()
  let x = useSharedValue(0)
  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x
    }
  })

  const arrowWidth = useSharedValue(40)
  const height = useSharedValue(arrowWidth.value)

  const arrowAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: arrowWidth.value,
      height: height.value
    }
  })
  const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)

  const lastPage = x.value > 705
  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        data={lottieAnimations}
        onScroll={onScroll}
        renderItem={({ item, index }) => {
          return (
            <UserWelcomeScreenAnimation data={item} index={index} x={x} />
          )
        }}
        horizontal
        scrollEventThrottle={16}
        bounces={false}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled
        onScrollToIndexFailed={()=> {}}
      />
      <View style={styles.continueContainer}>
        <AnimatedTouchableOpacity style={[{
          backgroundColor: 'black',
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 20,
        }, arrowAnimatedStyle]}
        onPress={()=> {
          const flatListIndex = x.value / 360
          if (flatListIndex < lottieAnimations.length -1) {
            flatListRef.current?.scrollToIndex({index: (flatListIndex )+ 1})
            if (lottieAnimations.length - flatListIndex == 2) {
              arrowWidth.value = withSpring(100)
              height.value = withSpring(40)
            }
          }else {
            navigation.navigate("Registeration")
          }
        }}
        >
          {x.value/360 === 2 ?
            <Image source={icons.RightArrowIcon} style={{
            tintColor: 'white',
            width: 20,
            height: 20,
            resizeMode: 'contain',
            alignSelf: 'center'
          }} />: <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontWeight: 'bold',
              
            }}
          >Continue</Text>}
        </AnimatedTouchableOpacity>
      </View>
      <StatusBar style='dark' />
    </View>
  )
}

export default UserWelcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  continueContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    margin: 20
  }
})