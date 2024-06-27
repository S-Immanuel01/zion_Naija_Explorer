import { 
  Image, ImageBackground, StyleSheet, Text, View, Dimensions,KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator, 
} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import images from '../constants/images'
import { ErrorFn, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebaseConfig'
import { CustomAlert } from '../utils/CustomMessageAlert'

type Props = {
    navigation: any
}

const UserRegisteration: React.FC<Props> = ({navigation}) => {
    const { width, height } = Dimensions.get('window')
    const [ email, setEmail] = React.useState<string>()
    const [password, setPassword] = React.useState<string>()
    const [loading, setLoading] = React.useState<boolean>(false)

   

    const SignIn = async () => {
        setLoading(true)
        try {
            if (email != undefined && password != undefined)
                if (password.length > 5)
                    await signInWithEmailAndPassword(auth, email, password)
                else 
                    CustomAlert('Error', "Password must be at least 6 characters", [{text: 'Ok'}])
                
        } catch (error) {
            CustomAlert('Error', "Email or Password incorrect", [{text: 'Ok'}])
        }
        finally {
            setLoading(false)
        }
    }
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/images/food.jpg')} style={styles.imageBackground} width={width}>
        <KeyboardAvoidingView style={styles.container}>
            <View style={[styles.contentContainer, {width: width * 0.8, height: 'auto'}]}>
                <Text style={styles.signTxt}>Welcome Back</Text>
                <Text style={styles.signSubtitle}>you've been missed</Text>
                <TextInput style={styles.signInput} value={email} placeholder='Email' onChangeText={(text) => setEmail(text)} autoCapitalize={'none'}/>
                <TextInput style={styles.signInput} value={password} placeholder='Password' onChangeText={(text: string) => setPassword(text)} secureTextEntry autoCapitalize='none' spellCheck={false}/>
                <View style={{flexDirection: 'row', gap: 10, marginTop: 10}}>
                    <Text>Don't have an Account?</Text>
                    <View style={{justifyContent: 'center', alignItems:'center'}}>
                        <Image source={images.Paintbg} style={{width: 100, height: 40, position: 'absolute'}} />
                        <TouchableOpacity onPress={()=>{
                            navigation.navigate('SignUp')
                        }}>
                            <Text style={{textAlign: 'center', fontWeight: '900', fontSize: 17, color: 'white'}}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity onPress={SignIn} style={styles.signBtn}>
                    <Text style={{textAlign: 'center', fontWeight: '900', fontSize: 17, color: 'white'}}>SIGN IN</Text>
                </TouchableOpacity>
                {
                    loading &&
                    <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator size='large' color='orange' />
                    </View>
                }
            </View>
        </KeyboardAvoidingView>
      </ImageBackground>
      <StatusBar style='light' />
    </View>
  )
}

export default UserRegisteration

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    },

    imageBackground: { 
      flex: 1,
      resizeMode: 'repeat',
      justifyContent: 'center',
      alignItems: 'center',
  },

  contentContainer: {
      backgroundColor: '#fff1f1',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      padding: 20,
      opacity: .95,
      borderColor: '#fff',
      borderWidth: 5
  },

  signTxt: {
      fontSize: 30,
      fontWeight: '300',
      textAlign: 'left'
  },

  signSubtitle: {
      fontWeight: 'bold',
      fontSize: 17,
      textAlign: 'left'
  },

  signInput: {
      width: '80%',
      paddingHorizontal: 10,
      paddingVertical: 10,
      backgroundColor: '#ffff1',
      borderRadius: 10, 
      marginBottom: 10,
      borderBottomColor: 'white',
      borderBottomWidth: 3       
  },

  signBtn: {
      width: '80%',
      paddingHorizontal: 10,
      paddingVertical: 10,
      backgroundColor: 'orange',
      borderRadius: 10, 
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
      
  }
})