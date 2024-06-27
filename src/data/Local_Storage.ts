import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (data_key = "recentlyViewedItems", data: any) => {
    const storableData = JSON.stringify(data)
    await AsyncStorage.setItem(data_key, storableData)
}

const retrieveData = async () => {
     
    const data: string = await AsyncStorage.getItem("recentlyViewedItems")
    return JSON.parse(data)
}

export { storeData, retrieveData }