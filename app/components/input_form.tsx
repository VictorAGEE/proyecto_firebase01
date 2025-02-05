import { Link } from "expo-router";
import { Pressable, StyleProp, Text,TextStyle,View, ViewStyle} from 'react-native';
import { GlobalStyles } from '@/theme/GlobalStyles'
import { TextInput } from "react-native-gesture-handler";

interface Props{
    TextoSeguro?:boolean
    nombre:string
    Estilo_Caja?:StyleProp<ViewStyle>,
    Estilo_Texto?:StyleProp<TextStyle>,

}

export default function Input_form({TextoSeguro,nombre,Estilo_Caja,Estilo_Texto}:Props) {


  return(
    
          <View style={[GlobalStyles.input_form_box,Estilo_Caja]}>
            <TextInput style={[GlobalStyles.input_form_text,Estilo_Texto]} secureTextEntry={TextoSeguro} placeholder={nombre}></TextInput>
          </View>

  )
}