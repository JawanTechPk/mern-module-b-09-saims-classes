import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

export const Home = () => {

  const authSlice = useSelector((state)=>state.auth)
  return (
    <View>
      <Text>{authSlice.email}</Text>
    </View>
  )
}

