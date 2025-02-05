import { Platform, StatusBar, StyleSheet } from "react-native"

export const GlobalStyles = StyleSheet.create({
    containerCentrado: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 22
    },
    pantallaPrincipal: {

        alignItems: "center",
        backgroundColor: "#c0ffdc",
        paddingTop:120,
        paddingBottom:500
    },
    form_login:{
        marginTop:-43,
        borderRadius:40,
        paddingTop:40,
        alignItems:  'center',
        justifyContent: 'center',
        paddingBottom:15,
        width:"100%"
    },fila: {
        flexDirection: 'row',
        justifyContent: "center",
    
      },
      input_form_box:{
        backgroundColor:'#682424',
        borderRadius:100,
        paddingTop:5,
        paddingBottom:5,
        paddingRight:35,
        paddingLeft:35,
        width:'80%',
        marginTop:10,
        marginBottom:10,
      },
      input_form_text: {
        color:'white',
        fontSize:20,
      },
      button_box:{
        backgroundColor:'blue',
        borderRadius:100,
        paddingTop:12,
        paddingBottom:12,
    
        width:'45%',
        marginTop:10,
        marginBottom:10,
        flex:1,
        alignItems:"center",
        alignContent:"center",
        textAlign:"center",
    
      },
      button_text:{
        color:'white',
        fontSize:25,}
})