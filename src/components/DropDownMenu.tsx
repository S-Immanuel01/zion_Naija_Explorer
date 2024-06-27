import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DropdownListItem from './DropdownListItem'
import { useSharedValue } from 'react-native-reanimated'

type dropDownItemType = {
    label: string,
    icon: any
}
type Props = {
    header: dropDownItemType,
    options: dropDownItemType[],
    navigation: any
}

const DropDownMenu:React.FC<Props> = ({header, options, navigation}) => {
    const dropDownItems = [header, ...options]
    const isExpanded = useSharedValue(false);
  return (
    <>
      {
        dropDownItems.map((item, index) => (
            <DropdownListItem key={index} label={item.label} icon={item.icon} index={index} dropDownItemsCount={dropDownItems.length} isExpanded={isExpanded} navigation={navigation}/>
        ))
      }
    </>
  )
}


export default DropDownMenu
