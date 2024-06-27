import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import ParallaxListView from '../components/ParallaxListView'
import RestaurantData from '../data/Restaurants'
import HotelData from '../data/Hotels'
import TheaterData from '../data/Theater'
import ArtData from '../data/Art_Gallery'
import ParkData from '../data/Parks'
import MuseumData from '../data/Museum'

type Props = {
  navigation: any,
  route: any
}

const Home: React.FC<Props> = ({route, navigation}: Props) => {
  const {label , location }= route.params

  const data = (location: string) => {
    const allData = {
      "Restaurants": RestaurantData(location),
      "Hotels": HotelData(location),
      "Theaters": TheaterData(location),
      "Parks & Beaches": ParkData(location),
      "Art Gallery": ArtData(location),
      "Museum": MuseumData(location)
    }
    return allData
  }
  return (
    // @ts-ignore
    <ParallaxListView data={data(location)[label]}  navigation={navigation} label={label} location={location}/>
  )
}

export default Home

const styles = StyleSheet.create({})