import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import ActiveDaysItem from './ActiveDaysItem'
type dayParamProp = {
    monday: boolean,
    tuesday: boolean,
    wednesday: boolean,
    thursday: boolean,
    friday: boolean,
    saturday: boolean,
    sunday: boolean,
}

type Props = {
    days: dayParamProp
}

const ActiveDaysView = ({ days }: Props) => {
    const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } = days
    const daysToList = [monday, tuesday, wednesday, thursday, friday, saturday, sunday]

    return (
        <View
            style={{
                flexDirection: 'row',
                flex: 1,
                gap: 10,
                alignSelf: 'stretch',
                paddingLeft: "2%",
                marginTop: 10
            }}>
            {daysToList.map((day, index) => {
                return (
                    <ActiveDaysItem day index={index} key={index} />
                )})
            }
        </View>
    )
}

export default ActiveDaysView

const styles = StyleSheet.create({})