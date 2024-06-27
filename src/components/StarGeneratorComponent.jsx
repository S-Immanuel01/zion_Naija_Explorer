import {View, Image} from 'react-native'
import icons from '../constants/icons'

export default function StarGeneratorComponent({rating, width, height}) {
    const stars = Array(rating).fill(1)
    const emptyStars = Array(5 - rating).fill(1)
    return (
        <View style={{flexDirection: 'row'}}>
          {
            stars.map((star, index) => {
              return (
                <Image key={index} source={icons.StarIcon} style={{ width: width, height: height, tintColor: 'yellow' }} />
              )
            })
          }
          {
             emptyStars.map((star, index) => {
              return (
                <Image key={index} source={icons.StarIcon} style={{ width: width, height: height, tintColor: 'lightgrey' }} />
              )
            })
          }
          </View>
    )
}