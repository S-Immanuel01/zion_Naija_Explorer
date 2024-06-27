import { 
    Image, ImageBackground, StyleSheet, Text, View, Dimensions,KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    ActivityIndicator, 
  } from 'react-native'
  import React from 'react'
  import { StatusBar } from 'expo-status-bar'
  import images from '../constants/images'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../firebaseConfig'
import { CustomAlert } from '../utils/CustomMessageAlert'
  
  
  type Props = {
      navigation: any
  }
  
  const UserSignUp: React.FC<Props> = ({navigation}) => {
      const { width, height } = Dimensions.get('screen')
      const [ email, setEmail] = React.useState<string>()
      const [password, setPassword] = React.useState<string>()
      const [name, setName] = React.useState<string>()
      const [loading, setLoading] = React.useState<boolean>(false)
  
      const SignUp = async () => {
        setLoading(true)
        if (email != null && password != null && name != null)
            if (password.length > 6)
                await createUserWithEmailAndPassword(auth, email.trim(), password.trim()).then((userCredentials)=> {
                    if (userCredentials.user) {
                        updateProfile(auth.currentUser!, {
                        displayName: name!.trim()
                        })
                    }
                })
            else
                CustomAlert("Registeration Failed", "Password must be at least 6 characters", [{
            text: ""}])
        else {
            CustomAlert("Registeration Failed", "All fields must be filled", [])
        }
        setLoading(false)
            
      }
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/sign_in_bg.jpg')} style={styles.imageBackground} width={width}>
            <View style={{
                position: 'absolute',
                width: width,
                height: height,
                backgroundColor: 'black',
                opacity: 0.45,
                justifyContent: 'center',
                alignItems: 'center'
            }}/>
          <KeyboardAvoidingView style={styles.container}>
              <View style={[styles.contentContainer, {width: width * 0.8, height: 'auto'}]}>
                  <Text style={styles.signTxt}>Welcome</Text>
                  <Text style={styles.signSubtitle}>Glad to have you</Text>
                  <TextInput style={styles.signInput} value={name} placeholder='Name' onChangeText={(text: string) => setName(text)} autoCapitalize='sentences'/>
                  <TextInput style={styles.signInput} value={email} placeholder='Email' onChangeText={(text) => setEmail(text)}/>
                  <TextInput style={styles.signInput} value={password} placeholder='Password' onChangeText={(text: string) => setPassword(text)} secureTextEntry/>
                  <View style={{flexDirection: 'row', gap: 10, marginTop: 10}}>
                      <Text>Already have an Account?</Text>
                      <View style={{justifyContent: 'center', alignItems:'center'}}>
                          <Image source={images.Paintbg} style={{width: 100, height: 40, position: 'absolute'}} />
                          <TouchableOpacity onPress={()=>{
                            navigation.navigate('Registeration')
                          }}>
                              <Text style={{textAlign: 'center', fontWeight: '900', fontSize: 17, color: 'white'}}>Sign In</Text>
                          </TouchableOpacity>
                      </View>
                  </View>
                  <TouchableOpacity onPress={SignUp} style={styles.signBtn}>
                      <Text style={{textAlign: 'center', fontWeight: '900', fontSize: 17, color: 'white'}}>SIGN Up</Text>
                  </TouchableOpacity>
                  {
                    loading &&
                    <View style={{
                        position: 'absolute',
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <ActivityIndicator size='large' color='black' />
                    </View>
                  }
              </View>
          </KeyboardAvoidingView>
        </ImageBackground>
        <StatusBar style='light' backgroundColor='black'/>
      </View>
    )
  }
  
  export default UserSignUp
  
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