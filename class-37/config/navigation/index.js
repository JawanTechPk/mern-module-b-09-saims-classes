import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Signup } from '../../screens/Signup'
import { Login } from '../../screens/Login'
import { Home } from '../../screens/Home'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../../assets/Loader'
import auth from "@react-native-firebase/auth"
import { authAction } from '../../store/slices/authSlice'

const Stack = createNativeStackNavigator()
export const NavigationApp = () => {
  const authSlice = useSelector((state)=>state.auth)

  const dispatch = useDispatch()

  useEffect(() => {

    auth().onAuthStateChanged((user)=>{
      console.log(user)
      
      if(user){
        dispatch(authAction({auth:true, profile: user}))
      }
      else{
        dispatch(authAction({auth:false, profile: null}))

      }
  
    })
    
  
    
  }, [])
  

  

  return (
   authSlice.loading ? <Loader size='large' /> : <NavigationContainer>

       {authSlice.auth ? <Stack.Navigator >
            <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator> :
        <Stack.Navigator >
            <Stack.Screen name='Signup' component={Signup} />
            <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>}
    </NavigationContainer>
  )
}



const styles = StyleSheet.create({})