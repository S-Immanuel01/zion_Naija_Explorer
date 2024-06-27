import { StyleSheet, Text, View, Image, ActivityIndicator, TouchableOpacity, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import icons from '../constants/icons'
import { User } from '../data/User'
import { auth } from '../../firebaseConfig'
import { retrieveData } from '../data/Local_Storage'

type Props = {}

const Profile = (props: Props) => {
  const auth_user = auth.currentUser
  const currentUser = new User(auth_user!.email!, "09150791407", " ", "mainland")
  if (currentUser.email === null) {
    return (
      <View style={styles.activity_inidcator_container}>
        <ActivityIndicator size={'large'} color={'orange'} />
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profile_user_container}>
        <Image source={icons.FaceIcon} />
        <View>
          <Text style={styles.header_text}>{auth_user?.displayName}</Text>
          <Text style={styles.body_text}>09150791407</Text>
        </View>
      </View>

      
      <TouchableOpacity onPress={() => { auth.signOut() }}>
        <Text style={{
          marginTop: 20,
          fontFamily: 'Lobster',
          fontSize: 20,
          color: 'red'
        }}>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  profile_user_container: {
    flexDirection: 'row',
    gap: 20,
    backgroundColor: '#0009',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 10
  },

  header_text: {
    color: '#fff',
    fontFamily: 'Lobster',
    fontSize: 20
  },

  body_text: {
    color: '#fff',
    fontSize: 17
  },

  activity_inidcator_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000e'
  },

  recently_viewed_container: {
    flexDirection: 'column',
    padding: 20
  }
})