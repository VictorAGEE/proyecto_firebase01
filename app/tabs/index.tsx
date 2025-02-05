import { View, Text } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/theme/GlobalStyles'
import Button_custom from '../components/buttom_custom'
import { router } from 'expo-router'

const ScreenPrincipal = () => {
  return (
    <><View style={GlobalStyles.containerCentrado}>
      <Text style={[GlobalStyles.titulo,{marginTop:100}]}>Desconectarse</Text>
    <Button_custom nombre="Sign OUT" Estilo_Texto={{ fontWeight: 'bold', fontSize: 20}} Estilo_Caja={[{backgroundColor: 'green',marginBottom:170,marginTop:200}]} onPress={() => { router.push('/login') } }>
      </Button_custom>
      </View>
      </>
  )
}

export default ScreenPrincipal
