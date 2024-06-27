import { StyleSheet, Text, View, FlatList, useWindowDimensions, Image, TouchableOpacity, TouchableWithoutFeedback, ImageBackground, Dimensions, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
import images from '../constants/images'
import StarGeneratorComponent from './StarGeneratorComponent'
import icons from '../constants/icons'
import { dataParams } from '../screens/Details'
import { retrieveData } from '../data/Local_Storage'


type itemStructure =  dataParams

type Props = {
    data: itemStructure[],
    navigation: any,
    label: string,
    location: string
}

const ParallaxListView: React.FC<Props> = ({ data, navigation, label, location }) => {
    const { width, height } = Dimensions.get("screen")
    const WIDTH = width * .7
    const HEIGHT = height * 0.5
    const scrollX = React.useRef(new Animated.Value(0)).current

    const icon = {
        "Restaurants": icons.RestaurantIconFilled,
        "Art Gallery": icons.StarIcon,
        "Arcade": icons.ArcadeIcon,
        "Museum": icons.MuseumIcon,
        "Parks & Beaches": icons.ParkIcon,
        "Hotels": icons.HotelIconFilled,
        "Theaters": icons.TheaterIcon,
    }

    return (
        <View style={styles.container}>
            <View style={[
                StyleSheet.absoluteFillObject]}>
                {
                    data.map((item, index) => {
                        const inputRange = [
                            (index - 1) * width,
                            index * width,
                            (index + 1) * width]

                        const opacity = scrollX.interpolate(
                          {  inputRange,
                            outputRange: [0, 1, 0]
                        })

                       

                        return (
                            <>{item.image ? 
                                
                                <Animated.Image
                                key={`${label}bg + ${item.name}`}
                                style={[StyleSheet.absoluteFillObject, {opacity, resizeMode: 'stretch', height: '100%'}]}
                                source={item.image}
                                blurRadius={20}
                                
                            />

                                :
                                <Animated.Image
                                key={`${label}bg + ${item.name}`}
                                style={[StyleSheet.absoluteFillObject, {opacity,resizeMode: 'stretch', height: '100%'}]}
                                source={ {uri: item.imageUrl}}
                                blurRadius={20}
                            />}</>
                        )
                    })
                }
            </View>
            <Animated.FlatList
                data={data}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{
                            width: width,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <View style={{ flexDirection: 'row' }} key={index}>
                                <Text
                                    style={{
                                        color: 'black',
                                        fontSize: 25,
                                        marginBottom: 1,
                                        overflow: 'hidden',
                                        textAlign: 'center',
                                        fontWeight: '200',
                                        fontFamily: 'Lobster',
                                        width: width * .6

                                    }}
                                    numberOfLines={1}
                                >{item.name}</Text>
                                {/* @ts-ignore */}
                                <Image source={icon[label]} style={{ width: 40, height: 40, tintColor: 'black' }} />
                            </View>
                            <Text
                                style={{
                                    color: 'black',
                                    fontSize: 18,
                                    marginBottom: 10,
                                    paddingHorizontal: 30,
                                    overflow: 'hidden',
                                    textAlign: 'center',

                                }}
                                numberOfLines={1}
                            >{item.address}
                            </Text>

                            <TouchableWithoutFeedback
                                onPress={() => {
                                    navigation.navigate('Details', { index: index, label: label, location: location, use_data: data})
                                }}
                            >
                                <View
                                    style={{
                                        width: WIDTH,
                                        height: HEIGHT,
                                        overflow: 'hidden',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 18,
                                        borderWidth: 10,
                                        shadowColor: 'black',
                                        elevation: 6,

                                    }}
                                >

                                    {item.image ?
                                        <Image
                                            source={item.image}
                                            style={{
                                                width: WIDTH,
                                                height: HEIGHT,
                                                resizeMode: 'cover'
                                            }}

                                        /> :
                                        <Image
                                            source={{ uri: item.imageUrl }}
                                            style={{
                                                width: WIDTH,
                                                height: HEIGHT,
                                                resizeMode: 'cover'
                                            }}

                                        />}
                                    <View
                                        style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            right: 0,
                                            left: 0,
                                            backgroundColor: 'rgba(0,0,0,.6)',
                                            alignItems: 'center',
                                            padding: 10,
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            gap: 10
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: 'white',
                                                fontSize: 18,
                                                fontWeight: '500'
                                            }}
                                        >
                                            {`${item.rating}.0`}
                                        </Text>
                                        <StarGeneratorComponent rating={item.rating} width={20} height={20} />
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    )
                }}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                // keyExtractor={(item, index) => `${label} + ${index}`}

            />
        </View>
    )
}

export default ParallaxListView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
})