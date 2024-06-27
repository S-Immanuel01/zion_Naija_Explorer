import { StyleSheet, Text, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import Animated, { SharedValue, useAnimatedStyle, withSpring,withTiming } from 'react-native-reanimated'
import icons from '../constants/icons'
import { CustomAlert } from '../utils/CustomMessageAlert'
import { auth } from '../../firebaseConfig'

type dropDownItemType = {
    label: string,
    icon: any,
    index: number,
    dropDownItemsCount: number,
    isExpanded: SharedValue<boolean>,
    navigation: any
}

const DropdownListItem: React.FC<dropDownItemType> = ({label, icon, index, dropDownItemsCount, isExpanded, navigation}) => {
    const {width, height} = useWindowDimensions();
    const dropdownListItemHeight = (height - (dropDownItemsCount * 20)) / dropDownItemsCount;
    const margin = 10
    const fullDropdownItemsHeight = (dropdownListItemHeight + margin ) * dropDownItemsCount 
    const collapsedTop = fullDropdownItemsHeight / 2 - dropdownListItemHeight - (fullDropdownItemsHeight * 0.25)
    const expandedTop = ((dropdownListItemHeight + margin) *  index ) - height * 0.37
    const expandedScale = 1;
    const collapsedScale = 1 - index * 0.05;
    const expandedBackgroundColor = "#001"
    const opacity = index * 10
    const collapsedBackgroundColor = `rgba(22,${opacity},${opacity}, 1)`

    const animatedStyle = useAnimatedStyle(()=> {
        return {
            backgroundColor: withTiming(isExpanded.value ? expandedBackgroundColor : collapsedBackgroundColor),
            top: withSpring(isExpanded.value ? expandedTop  : collapsedTop),
            transform: [
                {
                    scale: withSpring(isExpanded.value ? expandedScale : collapsedScale)
                },
                {
                    translateY: fullDropdownItemsHeight / 2,
                },
                
            ]
        }
    })

    const isHeader = index === 0;

    const headerAnimatedStyle = useAnimatedStyle(()=> {
        return {  
            transform: [
                {
                    rotate: isHeader ? withSpring(isExpanded.value ? '90deg' : '0deg') : "0deg"
                }
            ]
        }
    })
    const isSignout = index === 7

  return (
    <Animated.View
    onTouchEnd={()=> {
        if (isExpanded.value === false) {

            if (isHeader)
                isExpanded.value= !isExpanded.value
        } else {
            if (isHeader)
                isExpanded.value= !isExpanded.value
            else if (index === 7) {
                CustomAlert("Logging Out?", "You would be unable to access this app without an account", [{text: "Cancel"}, {text: "Sign Out", onPress: () => {auth.signOut()}}])
            }
            else if (index === 2 ||index === 4 ||index === 5 || index === 6 ) {
                navigation.navigate('Home', {label: label})
            }
            else 
                // navigation.navigate('Home', {label: label})
                navigation.navigate('Selection', {label: label})
        }

    }}
        style={[{
            zIndex: dropDownItemsCount - index,
            width: width * .95,
            height: dropdownListItemHeight,
            borderRadius: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'absolute',
            flexDirection: 'row',
            padding: 20
        }, animatedStyle]}
    >
        <Image source={icon} style={{width: isHeader ? 40 : 30, height: isHeader ? 40 :30}} />
      <Text
        style={{
            fontWeight: isSignout? '400' : 'bold',
            fontSize: 20,
            fontFamily: isSignout? 'Lobster' : 'Arial',
            color: isSignout? 'red' : 'white'
        }}
      >{label}</Text>
      <Animated.Image source={isHeader ? icons.ArrowForwardIphoneIcon :icons.RightArrowIcon} style={[{width:  30, height: 30}, headerAnimatedStyle]} />
    </Animated.View>
  )
}

export default DropdownListItem

const styles = StyleSheet.create({})