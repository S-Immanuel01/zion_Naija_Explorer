import { NavigationAction } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Image, Text, StyleSheet, ImageBackground, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import images from '../constants/images';
import icons from '../constants/icons';
import DropdownMenu from '../components/DropDownMenu';
import { SafeAreaView } from 'react-native-safe-area-context';

type choiceScreenParams = {
    navigation: any
}

// resturant 
// 2 ) park &beach 
// 3) art galleries 
// 4)movie theaters 
// 5) hotels 
// 6)arcade 
// 7) museum

const options = [
    { label: "Restaurants", icon: icons.RestaurantIconFilled },
    { label: "Hotels", icon: icons.HotelIconFilled },
    { label: "Theaters", icon: icons.TheaterIcon },
    { label: "Parks & Beaches", icon: icons.ParkIcon },
    { label: "Art Gallery", icon: icons.StarIcon },
    { label: "Museum", icon: icons.MuseumIcon },
    {label: "Sign Out", icon: icons.signOut },
]

const header = {
    label: "Directions",
    icon: icons.DirectonIcon
}
const ChoiceScreen: React.FC<choiceScreenParams> = ({ navigation }) => {
    const { width, height } = Dimensions.get('screen')
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageBackground}>

                <Image source={images.LocationBg} 
                style={{width, height}}
                blurRadius={12}
                />
            </View>
                <DropdownMenu header={header} options={options} navigation={navigation} />
            <StatusBar style='light' backgroundColor='black' />
        </SafeAreaView>
    )
}


const styles =

 StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    imageBackground: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        alignItems: 'center',
        
    }
})

export default ChoiceScreen