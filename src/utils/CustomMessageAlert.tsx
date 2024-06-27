import { Alert } from "react-native"

const CustomAlert = (title: string, message: string, actions: object[]) => {
    return Alert.alert(
        title,
        message,
        actions,
        { cancelable: true }
    )
    
}

export {CustomAlert}