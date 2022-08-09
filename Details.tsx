import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View, TextInput, Image, TouchableOpacity, FlatList, Switch } from 'react-native';

function Details({route, navigation}) {

    
    var data:Array = route.params

    var isEnabled1:Boolean = data.isEnabled1
    

    var languages:string = Object.values(data.paises.languages)[0];
    var currencies:string = Object.values(data.paises.currencies)[0];
    var nativeName:string = Object.values(data.paises.name.nativeName)[0];


    if (data.paises.borders !== undefined){

    return (
        <SafeAreaView style={styles.containerb}>
    <View>
      <View style={styles.headerb}>
        <Text style={styles.textw}>Where in the world?</Text>
      </View>
      
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.button} >
            <Text style={styles.textw}>Back</Text>
            </View>
        </TouchableOpacity>
      </View>
      <View style={styles.imagebox}>
      <Image style={styles.images} source={{uri:data.paises.flags.png}}/>
 </View>

<View  style={styles.componentsb}>
    <Text style={styles.title}>{data.paises.name.common}</Text>
    <Text style={styles.textw}>Native Name: {nativeName.official}</Text>
    <Text style={styles.textw}>Population: {data.paises.population}</Text>
    <Text style={styles.textw}>Region: {data.paises.region}</Text>
    <Text style={styles.textw}>Sub Region: {data.paises.subregion}</Text>
    <Text style={styles.textw}>Capital: {data.paises.capital}</Text>
</View>

<View  style={styles.componentsb}>
    <Text style={styles.textw}>Top Level Domain:</Text>
    <Text style={styles.textw}>Currencies: {currencies.name}</Text>
    <Text style={styles.textw}>Languages: {languages}</Text>
</View>

<View  style={styles.componentsb}>
    <Text style={styles.title}>Border Coutries:</Text>
    <View style={styles.buttons}>
    {data.paises.borders.map(fronteira => (
    <Text key={fronteira} style={styles.borderbtn}>{fronteira}</Text>
    ))}
    </View>

</View>

</View>
</SafeAreaView>
    );
}
else{
    return (
        <SafeAreaView style={styles.containerb}>
    <View>
      <View style={styles.headerb}>
        <Text style={styles.textw}>Where in the world?</Text>
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.button}>
            <Text style={styles.textw}>Back</Text>
            </View>
        </TouchableOpacity>
      </View>
      <View style={styles.imagebox}>
      <Image style={styles.images} source={{uri:data.paises.flags.png}}/>
 </View>

<View  style={styles.componentsb}>
    <Text style={styles.title}>{data.paises.name.common}</Text>
    <Text style={styles.textw}>Native Name: {nativeName.official}</Text>
    <Text style={styles.textw}>Population: {data.paises.population}</Text>
    <Text style={styles.textw}>Region: {data.paises.region}</Text>
    <Text style={styles.textw}>Sub Region: {data.paises.subregion}</Text>
    <Text style={styles.textw}>Capital: {data.paises.capital}</Text>
</View>

<View  style={styles.componentsb}>
    <Text style={styles.textw}>Top Level Domain:</Text>
    <Text style={styles.textw}>Currencies: {currencies.name}</Text>
    <Text style={styles.textw}>Languages: {languages}</Text>
</View>

<View  style={styles.componentsb}>
    <Text style={styles.title}>Border Coutries:</Text>
    
   
    <Text style={styles.textw}>none</Text>
   

</View>

</View>
</SafeAreaView>
    );
}
}

const styles = StyleSheet.create({
    containerb: {
      flex: 1,
      backgroundColor: 'hsl(207, 26%, 17%)',
      color: 'hsl(0, 0%, 100%)',
      
      
    },
    container: {
      flex: 1,
      backgroundColor: 'hsl(0, 0%, 98%)',
      color: 'hsl(0, 0%, 100%)',
      
    },
    headerb: {
      paddingHorizontal:15,
      paddingVertical: 20,
      marginBottom: 10,
      flexDirection:'row',
      justifyContent:'space-between',
      color: 'hsl(0, 0%, 100%)',
      backgroundColor:'hsl(209, 23%, 22%)'
    },
    header: {
      paddingHorizontal:15,
      paddingVertical: 20,
      marginBottom: 10,
      flexDirection:'row',
      justifyContent:'space-between',
      color: 'hsl(0, 0%, 100%)',
      backgroundColor:'hsl(0, 0%, 100%)',
    },
    inputb: {
        color: 'hsl(0, 0%, 100%)',
        height: 45,
        marginVertical: 20,
        marginLeft: 30,
        marginRight: 30,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'hsl(209, 23%, 22%)',
        textAlign: 'center',
        marginHorizontal:'auto',
    },
    input: {
      color: 'hsl(0, 0%, 100%)',
      height: 45,
      marginVertical: 20,
      marginLeft: 30,
      marginRight: 30,
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor:'hsl(0, 0%, 100%)',
      textAlign: 'center',
      marginHorizontal:'auto',
  },
    dropdownb: {
      color: 'hsl(200, 15%, 8%)',
      backgroundColor: 'hsl(209, 23%, 22%)',
      borderColor: 'hsl(209, 23%, 22%)',
  
  },
  dropdown: {
    color: 'hsl(200, 15%, 8%)',
    backgroundColor: 'hsl(0, 0%, 100%)',
    borderColor: 'hsl(0, 0%, 100%)',
  
  },
    textb: {
      color: 'hsl(200, 15%, 8%)',
      paddingHorizontal:30,
      paddingVertical:3,
  },
    textw: {
        color: 'hsl(0, 0%, 100%)',
        paddingHorizontal:30,
        paddingVertical:3,
    },
    titleb: {
      paddingHorizontal:30,
      fontWeight: '900',
      color: 'hsl(200, 15%, 8%)',
      marginVertical:10,
  },
    title: {
      paddingHorizontal:30,
      fontWeight: '900',
      color: 'hsl(0, 0%, 100%)',
      marginVertical:10,
  },
    componentsb: {
      marginTop:30,
      width:400,
      justifyContent:'center',
      alignItems:'flex-start',
      alignContent:'center',
      marginHorizontal:'auto',
      textAlign:'left',
    
    },
    components: {
      marginTop:30,
      width:400,
      justifyContent:'center',
      alignItems:'flex-start',
      alignContent:'center',
      marginHorizontal:'auto',
      textAlign:'center',
    },
    imagebox:{
        marginTop:50,
        textAlign:'center',
        alignItems:'center',
        alignContent:'center',
        marginHorizontal:'auto',
    },
    images: {
       
        height:220,
         width:320,
    },
    list: {
      alignItems:'center',
   },
   buttons:{
    flexDirection:'row',
    marginHorizontal:30,
   },
   button: {
    color:'hsl(0, 0%, 100%)',
    width:100,
    backgroundColor: 'hsl(209, 23%, 22%)',
    marginLeft:30,
    marginTop:20,
    paddingVertical:5,

 },
 borderbtn: {
    color:'hsl(0, 0%, 100%)',
    width:100,
    backgroundColor: 'hsl(209, 23%, 22%)',
    marginTop:5,
    marginRight:5,
    paddingVertical:5,
    textAlign:'center'

 },
  });

export default Details;