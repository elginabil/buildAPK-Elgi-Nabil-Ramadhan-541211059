import React from 'react';
import {View, Text, Image, Button, Linking, ScrollView} from 'react-native';

const dribbble = () => {
  const url = 'https://dribbble.com/ElgiNabil';
  Linking.openURL(url);
}
const canva = () => {
  const url = 'https://www.canva.com/p/fazzistudio/?utm_medium=referral&utm_source=creator_share&utm_campaign=creator_share';
  Linking.openURL(url);
}
const envato = () => {
  const url = 'https://elements.envato.com/user/tokomoo/graphic-templates';
  Linking.openURL(url);
}

const Portofolio = () => {
  return (
    <ScrollView>

    <View style={{backgroundColor:'#FAF9FF', flex:1}}>
      <View style={{alignItems:'center'}}>
        <Image style={{width:200, height:200, marginTop:120, marginBottom:32, borderRadius:100}} 
        source={require('./assets/I.png')} />
        <Text style={{marginBottom:12, textAlign:'center', color:'#1E1E1E', fontSize:40, fontFamily:'Manrope',
         fontWeight:'bold', marginHorizontal:40}}>Elgi Nabil Ramadhan</Text>
        <Text style={{marginBottom:120, textAlign: 'center', color: 'rgba(30, 30, 30, 0.40)', fontSize: 16,
         fontFamily: 'Manrope', fontWeight: '400', marginHorizontal:70}}>Halo saya siswa SMK Telkom Purwokerto 
         kelas XII RPL 2 trims, Lorem ipsum sit dolor amet</Text>
      </View>
      <View style={{marginBottom:200, paddingHorizontal:32, borderRadius:32}}>
        <Button title='About me' color='#828EFF' onPress={dribbble} />
      </View>

      <View style={{alignItems:'center'}}>
        <Text style={{marginBottom:12, textAlign:'center', color:'#1E1E1E', fontSize:24, fontFamily:'Manrope',
         fontWeight:'bold', marginHorizontal:40}}>Recent Portofolio</Text>

        <Image style={{width:320, height:200, marginTop:32, marginBottom:32, borderRadius:16}} 
        source={require('./assets/Infographic.png')} />
        <Text style={{marginBottom:4, textAlign:'center', color:'#1E1E1E', fontSize:20, fontFamily:'Manrope',
        fontWeight:'semibold', marginHorizontal:40}}>Canva Infographic Template</Text>
        <Text style={{marginBottom:20, textAlign: 'center', color: 'rgba(30, 30, 30, 0.40)', fontSize: 18,
         fontFamily: 'Manrope', fontWeight: '400', marginHorizontal:60}}>September 2023</Text>
      </View>
      <View style={{marginBottom:32, paddingHorizontal:32, borderRadius:32}}>
        <Button title='See detail' color='#828EFF' onPress={canva} />
      </View>

      <View style={{alignItems:'center'}}>
        <Image style={{width:320, height:200, marginTop:32, marginBottom:32, borderRadius:16}} 
        source={require('./assets/Landing.png')} />
        <Text style={{marginBottom:4, textAlign:'center', color:'#1E1E1E', fontSize:20, fontFamily:'Manrope',
        fontWeight:'semibold', marginHorizontal:40}}>Landing Page UI Design</Text>
        <Text style={{marginBottom:20, textAlign: 'center', color: 'rgba(30, 30, 30, 0.40)', fontSize: 18,
         fontFamily: 'Manrope', fontWeight: '400', marginHorizontal:60}}>July 2023</Text>
      </View>
      <View style={{marginBottom:32, paddingHorizontal:32, borderRadius:32}}>
        <Button title='See detail' color='#828EFF' onPress={envato} />
      </View>

      <View style={{alignItems:'center'}}>
        <Image style={{width:320, height:200, marginTop:32, marginBottom:32, borderRadius:16}} 
        source={require('./assets/Dashboard.png')} />
        <Text style={{marginBottom:4, textAlign:'center', color:'#1E1E1E', fontSize:20, fontFamily:'Manrope',
        fontWeight:'semibold', marginHorizontal:40}}>Dashboard Page UI Design</Text>
        <Text style={{marginBottom:20, textAlign: 'center', color: 'rgba(30, 30, 30, 0.40)', fontSize: 18,
         fontFamily: 'Manrope', fontWeight: '400', marginHorizontal:60}}>June 2023</Text>
      </View>
      <View style={{marginBottom:32, paddingHorizontal:32, borderRadius:32}}>
        <Button title='See detail' color='#828EFF' onPress={envato} />
      </View>

      <View style={{alignItems:'center'}}>
        <Image style={{width:320, height:200, marginTop:32, marginBottom:32, borderRadius:16}} 
        source={require('./assets/Mobile.png')} />
        <Text style={{marginBottom:4, textAlign:'center', color:'#1E1E1E', fontSize:20, fontFamily:'Manrope',
        fontWeight:'semibold', marginHorizontal:40}}>Mobile App UI Design</Text>
        <Text style={{marginBottom:20, textAlign: 'center', color: 'rgba(30, 30, 30, 0.40)', fontSize: 18,
         fontFamily: 'Manrope', fontWeight: '400', marginHorizontal:60}}>February 2023</Text>
      </View>
      <View style={{marginBottom:32, paddingHorizontal:32, borderRadius:32}}>
        <Button title='See detail' color='#828EFF' onPress={dribbble} />
      </View>
    </View>
    
    </ScrollView>
  );
}
export default Portofolio;