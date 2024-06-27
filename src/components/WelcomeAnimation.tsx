import { Image, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import Animated,
{ Extrapolate, SharedValue, interpolate, useAnimatedStyle } from 'react-native-reanimated'
import icons from '../constants/icons'

type Props = {
    data: any
    index: number
    x: SharedValue<number>
}

const UserWelcomeScreenAnimation = ({ data, index, x }: Props) => {
    const { width, height } = useWindowDimensions()
    const circleAnimation = useAnimatedStyle(() => {
        const scale = interpolate(
            x.value,
            [
                (index - 1) * width,
                index * width,
                (index + 1) * width
            ],
            [1, 2, 4],
            Extrapolate.CLAMP
        )
        return {
            transform: [{ scale: scale }]
        }
    })
    return (
        <View style={[styles.container, { width: width }]}>
            <View style={styles.circleContainer}>
                <Animated.View style={[{
                    width: width,
                    height: width,
                    backgroundColor: data.backgroundColor,
                    borderRadius: width
                }, circleAnimation]} />
            </View>
            <View>
                <LottieView source={data.animation} style={{
                    width: width,
                    height: height * 0.6,
                    alignSelf: 'center'
                }}
                    autoPlay
                    loop={false}
                />
            </View>
            <View>
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 44,
                        fontWeight: '200',
                        color: 'reds',
                        paddingHorizontal: 20,
                        marginBottom: 20
                    }}
                >{data.header}</Text>
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 33,
                        fontWeight: '100',
                        color: 'white',
                        paddingHorizontal: 20,
                        fontFamily: 'Lobster'
                    }}
                >{data.description}</Text>
            </View>

        </View>
    )
}

export default UserWelcomeScreenAnimation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    circleContainer: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
})