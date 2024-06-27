import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer, useRoute } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserRegisteration from './src/screens/UserRegisteration'
import Details from './src/screens/Details'
import Choice from './src/screens/Choice'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import Location from './src/screens/Location'
import UserSignUp from './src/screens/UserSignUp'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebaseConfig'
import Home from './src/screens/Home'
import Profile from './src/screens/Profile'
import Selection from './src/screens/Selection'


type Props = {}


type StackParamProp = {
  Registeration: undefined,
  Welcome: undefined,
  Authenticated: undefined,
  Details: undefined
  Choice: undefined
  Location: undefined
  SignUp: undefined

}


const Stack = createNativeStackNavigator<StackParamProp>();


SplashScreen.preventAutoHideAsync()
const App: React.FC<Props> = ({ }) => {
  const [user, setUser] = React.useState<any>()
  const [fontsLoaded] = useFonts({
    "Lobster": require('./assets/fonts/Lobster-Regular.ttf')
  })

 
  React.useEffect(() => {
    onAuthStateChanged(auth, (userCredential) => {
      setUser(userCredential)
      if (fontsLoaded){
          setTimeout(()=> {
          SplashScreen.hideAsync()
        }, 300)}
    })
  
  }, [user, fontsLoaded])

  type SignedInStackParams = {
    Home: undefined,
    Profile: undefined,
    Details: undefined,
    Location: undefined,
    Selection: undefined
  }

  const signedInStack: React.FC<SignedInStackParams> = () => {
    return (
      <Stack.Navigator >
        {/* @ts-ignore */}
      <Stack.Screen name='Choices' component={Choice} options = {{
        headerShown: false
      }}/>
      {/* @ts-ignore */}
       <Stack.Screen name='Home' component={Home} options={({route}) => ({
        headerTintColor: '#FFFFFF',
        headerStyle: {
          backgroundColor: 'black'
          
        },
        // @ts-ignore
        title: route.params.label
       })}/>
      <Stack.Screen name='Details' component={Details} options={{
        headerShown: false
      }}/>
      <Stack.Screen name='Location' component={Location} options={{
        headerShown: false
      }}/>
      {/* @ts-ignore */}
      <Stack.Screen name='Profile' component={Profile} options={{
        headerShown: false
      }}/>
      {/* @ts-ignore */}
      <Stack.Screen name='Selection' component={Selection} options={{
        headerShown: false
      }} />
  
    </Stack.Navigator>
    )
  }

  const signedOutStack = () => {
   return (
    <Stack.Navigator >
    <Stack.Screen name='Registeration' component={UserRegisteration}  options={{
      headerShown: false
    }}/>
    <Stack.Screen name='SignUp' component={UserSignUp} options={{
      headerShown: false
    }}/>
  </Stack.Navigator>
   )
  }
  return (
    <NavigationContainer>
      {
        user
        // @ts-ignore
         ? signedInStack()
          : signedOutStack()
      }
    </NavigationContainer>
  )
}

export default App

