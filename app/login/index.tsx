import { Link, router } from "expo-router";
import { Pressable, Text, View, Image } from 'react-native';
import { GlobalStyles } from '@/theme/GlobalStyles'
import Input_form from '../components/input_form'
import { ScrollView } from "react-native-gesture-handler";
import Button_custom from "../components/buttom_custom";


export default function Index() {
    return(
    <ScrollView
      contentContainerStyle={[GlobalStyles.pantallaPrincipal]}>
       
      

       
        <Text style={{fontSize:25,fontWeight:'bold',color:'#682424'}}>Pantalla de Acceso</Text>
        <Text style={{fontWeight:'bold',color:'#682424'}}>FIREBASE</Text>
  
        <View style={[GlobalStyles.form_login,{marginTop:10}]}>
            <Text>Introduce tus datos</Text>
            
          
          <Input_form nombre="Email"></Input_form>
          <Input_form nombre="Contraseña" TextoSeguro={true}></Input_form>
          <View style={[GlobalStyles.fila,{width:'80%'}]}>
          <Button_custom nombre="Login" Estilo_Texto={{fontWeight:'bold',fontSize:22}} Estilo_Caja={[{backgroundColor:'green',marginRight:20}]} onPress={()=>{router.push('/tabs')}}>
            </Button_custom>
            <Button_custom nombre="Registrarse" Estilo_Texto={{fontWeight:'bold',fontSize:22}} Estilo_Caja={[{backgroundColor:'green'}]} onPress={()=>{router.push('./tabs')}}>

            </Button_custom>
          </View>
        </View>
      
 
    
  </ScrollView>
)}