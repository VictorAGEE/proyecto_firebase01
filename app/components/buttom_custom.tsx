import { Link, Redirect } from "expo-router";
import { Pressable, StyleProp, Text,TextStyle,View, ViewStyle} from 'react-native';
import { GlobalStyles } from "@/theme/GlobalStyles";
import { TextInput } from "react-native-gesture-handler";

interface Props{

    nombre:string
    Estilo_Caja?:StyleProp<ViewStyle>,
    Estilo_Texto?:StyleProp<TextStyle>,
    onPress?: () => void;

}

export default function Button_custom({nombre,Estilo_Caja,Estilo_Texto,onPress}:Props) {


  return(
    
          <Pressable style={[GlobalStyles.button_box,Estilo_Caja]} onPress={onPress}>
            <Text style={[GlobalStyles.button_text,Estilo_Texto]}>{nombre}</Text>
          </Pressable>

  )
}