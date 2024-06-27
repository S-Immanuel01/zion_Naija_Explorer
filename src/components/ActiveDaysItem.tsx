import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

type Props = {
    index: number,
    day: boolean
}

const ActiveDaysItem = ({index, day}: Props) => {
    const screenWidth = Dimensions.get("screen").width
    const itemWidth = (screenWidth - 95) / 7
    const daysOfWeek = ["M", "T", "W", 'Th', "F", "S", 'Su']
    const topHeight = useSharedValue(47)

    React.useEffect(()=>{
        setTimeout(()=>{
            topHeight.value = withSpring(day ? 10 : 47, {damping: index === 0 ?  1.5: index + 1})
        },900)
    },[])

    const animatedStyle = useAnimatedStyle(()=> {
        return {
            top: topHeight.value
        }
    })
    return (
     
            <View
                key={index}
                style={{
                    width: itemWidth,
                    backgroundColor: day ? "black" : "rgba(225, 255, 255, 0.5)",
                    alignItems: "center",
                    borderRadius: 50,
                    marginBottom: 20,
                    justifyContent: 'flex-end',
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    // shadowColor: '#fff0',
                    elevation: day ? 5 : 0,
                    height: 80
                }}
            >
                <Text
                    style={{
                        color: day ? 'white' : 'black',
                        fontSize: 18
                    }}
                >{daysOfWeek[index]}</Text>
                    <Animated.View
                        style={[{
                            backgroundColor: 'white',
                            width: 25,
                            height: 25,
                            borderRadius: 50,
                            position: 'absolute',
                            elevation: 5
                        }, animatedStyle]}
                    ></Animated.View>
            </View>
     
    )
}

export default ActiveDaysItem

const styles = StyleSheet.create({})