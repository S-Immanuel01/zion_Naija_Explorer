import React from "react";
import { View, Image, FlatList } from 'react-native'

type Props = {
    data: any[],
    width: number,
    height: number
}

const ImageGalleryComponent: React.FC<Props> = ({ data, width, height }) => {
    return (
        <View style={{
            width: width,
            height: 'auto',
            marginBottom: 5,
            alignItems: 'center',
            justifyContent: 'center',
            paddingRight: 20
        }}>
            <FlatList
                data={data}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{
                            width: width * .6,
                            height: height * 0.2,
                            overflow: 'hidden',
                            borderRadius: 10,
                            marginRight: 5,
                            marginBottom: 5,
                        }}
                            key={item}
                        >
                            <Image
                                source={item}
                                style={{
                                    resizeMode: 'stretch',
                                    width: '100%',
                                    height: '100%'
                                }}
                            />
                        </View>
                    )
                }}
                horizontal={true}
                keyExtractor={(item, index) => `dec-${index}`}
                showsHorizontalScrollIndicator ={false}
            />
        </View>
    )
}

export default ImageGalleryComponent