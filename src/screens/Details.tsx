import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  FlatList,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import Animated, {
  FadeInLeft,
} from 'react-native-reanimated'
import Images from '../constants/images'
import images from '../constants/images'
import RestaurantData from '../data/Restaurants'
import OfflineVideoPlayer from '../components/OfflineVideoPlayer'
import StarGeneratorComponent from '../components/StarGeneratorComponent'
import ActiveDaysView from '../components/ActiveDaysView'
import icons from '../constants/icons'
import * as Linking from 'expo-linking'
import ImageGalleryComponent from '../components/GalleryComponent'
import { storeData } from '../data/Local_Storage'


type Props = {
  navigation: any,
  route: any
}

type daysParam = {
  monday: boolean | undefined
  tuesday: boolean | undefined
  wednesday: boolean | undefined
  thursday: boolean | undefined
  friday: boolean | undefined
  saturday: boolean | undefined
  sunday: boolean | undefined
}

type dataParams = {
  display_images: any
  image: any
  reservationLink: string | undefined
  name: string
  address: string
  reservation: boolean
  phoneNumber: string
  openingHours: string
  openingDays: daysParam
  rating: number
  imageUrl: string
  locationLink: string
  uberLink: string
  menu: any[]
  videoData: {
    local: string[]
    remote: string[]
  }
  images: any[]
}

const Details: React.FC<Props> = ({ navigation, route }) => {
  const { index, label, location, use_data } = route.params
  // const use_data = (location: string) => {
  //   const allData = {
  //     "Restaurants": RestaurantData(location),
  //     "Hotels": HotelData(location),
  //     "Theaters": TheaterData(location),
  //     "Restaurant": RestaurantData(location),
  //     "Parks & Beaches": RestaurantData(location),
  //     "Art Gallery": RestaurantData(location),
  //     "Museum": RestaurantData(location)
  //   }
  //   return allData
  // }

  // // @ts-ignore
  const data = use_data[index]


  // @ts-ignore
  // const data: dataParams = RestaurantData(location)[index]
  const { width, height } = useWindowDimensions()


  const BrowseLink = async (link: string) => {
    if (await Linking.canOpenURL(link))
      Linking.openURL(link)
  }
  // console.log(`${label}-${index}`)
  return (
    <View
      style={styles.container}
    >
      <View
        style={{
          width: width,
          height: height * .4,
          // justifyContent: 'center',
          alignItems: 'center',

        }}
      >
        {
          data.image ?
            <Image
              source={data.image}
              style={{
                resizeMode: 'cover',
                width: '100%',
                height: '100%',
              }}
              blurRadius={4} /> :
            <Animated.Image
              source={{ uri: data.imageUrl }}
              style={{
                resizeMode: 'cover',
                width: '100%',
                height: '100%',
              }}
              blurRadius={4}
            // sharedTransitionTag={`${label}-${index}`}
            />}
        <View style={{ justifyContent: 'center', alignItems: 'center', gap: 1, position: 'absolute', bottom: height * .15 }}>
          <Animated.Text
            entering={FadeInLeft.duration(2000)}
            numberOfLines={1}
            style={{
              color: '#FFFFFF',
              position: 'absolute',
              top: '0%',
              fontSize: 29,
              fontWeight: 'bold',
              textAlign: 'center',
              letterSpacing: 1,
              textTransform: 'uppercase',
              textShadowColor: 'black',
              paddingHorizontal: 20,
            }}
          >{data.name}</Animated.Text>
          <Animated.Text
            entering={FadeInLeft.duration(1000).delay(500)}
            style={{
              color: '#FFFFFF',
              fontSize: 29,
              fontWeight: 'bold',
              textAlign: 'center',
              letterSpacing: 1,
              textTransform: 'uppercase',
              textShadowColor: 'black',
              paddingHorizontal: 20,

            }}
            numberOfLines={1}
          >{data.name}</Animated.Text>
          <View style={{ flexDirection: 'row' }}>
            <Image source={icons.LocationIcon} style={{ width: 20, height: 20 }} />
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 18,
                fontWeight: '200',
                textAlign: 'center',
                letterSpacing: 1,
                textTransform: 'uppercase',
                textShadowColor: 'black',
                paddingHorizontal: 10,
                shadowColor: 'black',
                textShadowRadius: 2,
                backgroundColor: 'black',
                opacity: 0.96
              }}
            >{data.address}</Text>
          </View>
          {data.phoneNumber && <View style={{ flexDirection: 'row', backgroundColor: 'black', paddingHorizontal: 10, paddingVertical: 5, gap: 10, marginBottom: 20 }}>
            <Image source={icons.PhoneIcon} style={{ width: 20, height: 20 }} />
            <Text style={{ color: 'white', fontSize: 17, fontWeight: '200' }}>{data.phoneNumber}</Text>
          </View>}
          <StarGeneratorComponent rating={data.rating} width={20} height={20} />
        </View>
      </View>
      <View
        style={styles.contentContainer}
      >

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            paddingBottom: 30,

          }}
        >

          {/* image display */}
          {data.display_images && <ImageGalleryComponent data={data.display_images} width={width} height={height} />}
          {

            // @ts-ignore
            data.videoData?.local.map((item, index) => (
              <OfflineVideoPlayer videoSource={item} width={width * .98} height={300} key={index} />
            ))
          }
          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}>
            {/* @ts-ignore */}
            {data.openingDays && <ActiveDaysView days={data.openingDays} />}

          </View>
          <Image
            source={images.HorLine}
            style={{ height: 10, alignSelf: 'center' }}
          />


          {/* copy write */}
          {
            data.copy_write && <Text
              style={{
                // fontFamily: 'Lobster',
                fontSize: 18,
                textAlign: 'justify',
                marginLeft: 20,
                marginRight: 20,
                backgroundColor: 'black',
                color: 'white',
                marginTop: 10
              }}
            >{data.copy_write}</Text>
          }


          {  // @ts-ignore
            data.menu &&
            <FlatList
              // @ts-ignore
              data={data.menu}
              renderItem={({ item, index }) => {
                return (
                  <View
                    style={{

                      width: width,
                      height: height * 0.6
                    }}
                  >
                    <Image
                      source={item}
                      style={{
                        width: "100%",
                        height: "100%",
                        resizeMode: 'cover',
                        borderTopRightRadius: 20
                      }}
                    />
                  </View>
                )
              }}
              showsVerticalScrollIndicator={false}
              scrollEnabled={false}
              keyExtractor={(index) => index.toString()}
              ListHeaderComponent={
                <Image
                  source={images.MenuImg}
                  style={{
                    alignSelf: 'center',
                    height: 100,
                    width: 150,
                    resizeMode: 'contain'
                  }}
                />
              }
              style={{
                marginTop: 20,
                borderRadius: 10
              }}
            />
          }
          <View style={{ height: 60 }} />
        </ScrollView>
        {/* Reservation */}
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 60,
            justifyContent: 'space-between',
            flex: 1,
            flexDirection: 'row',
            gap: 10,
            backgroundColor: 'white',
            padding: 10,
            elevation: 50,
            shadowColor: 'black'
          }}
        >
          {
            data.reservationLink &&
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: 'black',
                alignItems: 'center',
                borderRadius: 10,
                justifyContent: 'center'
              }}
              onPress={() => {

                BrowseLink(data.reservationLink!)
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 18,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}
              >Visit</Text>
            </TouchableOpacity>
          }
          {/* Location */}
          {data.locationLink && <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'flex-end' }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(0,0,0,0.8)',
                alignItems: 'center',
                borderRadius: 10,
                paddingHorizontal: 10,
                justifyContent: 'center'
              }}
              onPress={() => BrowseLink(data.locationLink!)}
            >
              <Image
                source={icons.LocationIcon}
                style={{
                  width: 20,
                  height: 30
                }} />
            </TouchableOpacity>
          </View>}
          {/* instagram */}
          {data.instagram && <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'flex-end' }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'purple',
                alignItems: 'center',
                borderRadius: 10,
                // paddingHorizontal: 10,
                justifyContent: 'center'
              }}
              onPress={() => BrowseLink(data.instagram!)}
            >
              <Image
                source={require('../../assets/images/ig.png')}
                style={{
                  width: 40,
                  height: 40
                }} />
            </TouchableOpacity>
          </View>}
        </View>
      </View>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black'
  },

  contentContainer: {
    height: '70%',
    backgroundColor: 'white',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    shadowColor: 'black',
    elevation: 10,
  }
})

export type { daysParam, dataParams }