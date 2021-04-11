import React from 'react';
import { SafeAreaView, View , StyleSheet, Touchable, TouchableOpacity, Text,Image, TextInput, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome"
export default class Login extends React.Component
{
    render(){
        return(
            <SafeAreaView style={style.body}>
                <ScrollView>
                <View style={style.header}>
                    <Text style={style.title}>Sign In</Text>
                </View>
                <View style={style.logo_area}>
                    <Image style={style.sizef} resizeMode={"contain"} source={require('../../../assets/images/home.png')}/>
                </View>
                <View style={style.board}>
                    <View style={style.item}>
                        <TextInput
                        placeholder={"UserName"}
                        style={style.input}/>
                    </View>
                    <View style={style.item}>
                        <TextInput
                        placeholder={"Password"}
                        style={style.input}/>
                        <TouchableOpacity style={{position:'absolute',right:10,top:15}}>
                           <Icon name={"eye-slash"} size={20} /> 
                        </TouchableOpacity>
                    </View>
                    <View style={style.item,{flexDirection:'row',justifyContent:'flex-end'}}>
                        <Text style={{color:'#525464',fontSize:13}}>Forget your password?</Text>
                    </View>
                    <View style={style.item}>
                        <TouchableOpacity style={style.button}>
                            <Text style={style.button_text}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[style.item,{justifyContent:'center',alignItems:'center'}]}>
                        <Text style={{color:'#525464'}}>Or</Text>
                    </View>
                    <View style={style.social}>
                        <TouchableOpacity style={style.social_item}>
                            <Text style={style.social_item}>
                                <Icon name={"facebook-f"} color={'#3b5999'} size={14}></Icon>
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={style.item}>
                    <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}>
                         <Text style={{fontSize:17, fontWeight:'500',color:'#525464'}}>Don't have an account?<Text style={{color:'#FFB19D',fontWeight:'700'}}>Sign Up</Text> </Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </SafeAreaView> //öyle özlediim ki seni yerler buralarda
        )
    }
} 
const style = StyleSheet.create({
body:{backgroundColor:'white',flex:1},
header:{padding:15,justifyContent:'center',alignItems:'center'},
title:{fontWeight:'700',fontSize:20,color:'#525464'}, 
logo_area:{alignItems:'center'},
sizef:{width:200,height:200,borderRadius:40},
board:{marginTop:5,paddingHorizontal:30},
item:{marginBottom:10},
input:{borderWidth:1,borderColor:'#B0B0C3', backgroundColor:'#F7F7F7',paddingVertical:10,paddingHorizontal:10,height:50},
button:{backgroundColor:'#20C3AF',paddingVertical:15,borderRadius:5,justifyContent:'center',alignItems:'center'},
button_text:{textAlign:'center',color:'white',fontSize:17,fontWeight:'600'},
social:{flexDirection:'row',justifyContent:'center',marginBottom:10},
social_item:{padding:7,borderWidth:1,borderColor:'#E2E2E0'},
})