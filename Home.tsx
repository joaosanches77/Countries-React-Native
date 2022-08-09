import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View, TextInput, Image, TouchableOpacity, FlatList, Switch } from 'react-native';
import { useState, useEffect} from 'react';
import SelectList from 'react-native-dropdown-select-list'
import Navigation from './Navigation';

export default function Home({ navigation }) {

const [country, setCountry] = useState('')
const [region, setRegion] = useState('')

const [selected, setSelected] = useState("");

const [list, setList] = useState([]);

const [data, setData] = useState([])


const [isEnabled1, setIsEnabled1] = useState(false);
const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

const dropdown = [
  {key:'All',value:'All'},
  {key:'Asia',value:'Asia'},
  {key:'Europe',value:'Europe'},
  {key:'Oceania',value:'Oceania'},
  {key:'Africa',value:'Africa'},
  {key:'Antarctic',value:'Antarctic'},
  {key:'Americas',value:'Americas'},
];


const dataset = async () => {


  let str = "https://restcountries.com/v3.1/all"

  const response = fetch(str).then((r) =>
      r.json()

  ).then((r1) => {
      setData(r1);
      setList(r1);
  }).catch(err => console.log(err));

}


useEffect(() => {
  dataset();
  if (selected === 'All'){
    setRegion("");
    if (country !== '') {
      setList(
        list.filter(
          (item) =>
            item.name.common.toLowerCase().indexOf(country.toLowerCase()) > -1
        )
      );
    }
  }
  else{
  if(region === ''){
    setList(data);
    //console.log(data)
  } else{
    setList(
      data.filter(
        (item) =>
          item.region.toLowerCase().includes(region.toLowerCase())
      )
    );
  }
  if (country !== '') {
    setList(
      list.filter(
        (item) =>
          item.name.common.toLowerCase().indexOf(country.toLowerCase()) > -1
      )
    );
  }
}
  
}, [country, region,data]);

if (isEnabled1 === (true)){



  return (
    <SafeAreaView style={styles.containerb}>
    <View style={styles.containerb}>
      <View style={styles.headerb}>
        <Text style={styles.textw}>Where in the world?</Text>
        <Switch
      trackColor={{ false: "#FFFFFF", true: "#000000" }}
      thumbColor={isEnabled1 ? "#FFFFFF" : "#FFFFFF"}
      onValueChange={toggleSwitch1}
      value={isEnabled1}
    />
      </View>
      <View>
      <TextInput
          style={styles.inputb}
          placeholder="Search for a country..."
          value={country}
          onChangeText={(t) => setCountry(t)}
        />
      </View>
      <View style={styles.dropdownb}>
      <SelectList setSelected={setSelected} search={false} placeholder="Filter by Region" data={dropdown} onSelect={() => setRegion(selected)} />

      </View >
     
      <View style={styles.list}>
      <FlatList
      data={list}
      renderItem={({ item }) => <ListItems navigation={navigation} paises={item} isEnabled1={isEnabled1} setIsEnabled1={setIsEnabled1} />}
      keyExtractor={(item) => item.population}
    />
    </View>



    </View>
    </SafeAreaView>
  );
}
else{

  return (
    <SafeAreaView style={styles.container}>
    <View>
      <View style={styles.header}>
        <Text style={styles.textb}>Where in the world?</Text>
        <Switch
      trackColor={{ false: "#FFFFFF", true: "000000" }}
      thumbColor={isEnabled1 ? "#FFFFFF" : "#FFFFFF"}
      onValueChange={toggleSwitch1}
      value={isEnabled1}
    />
      </View>
      <View>
      <TextInput
          style={styles.input}
          placeholder="Search for a country..."
          value={country}
          onChangeText={(t) => setCountry(t)}
        />
      </View>
      <View style={styles.dropdown}>
      <SelectList setSelected={setSelected} search={false} placeholder="Filter by Region" data={dropdown} onSelect={() => setRegion(selected)} />

      </View >
    
        <View style={styles.list}>
     
      <FlatList
      
      data={list}
      renderItem={({ item }) => <ListItems paises={item} navigation={navigation} isEnabled1={isEnabled1} />}
      keyExtractor={(item) => item.population}
    />
    </View>



    </View>
    </SafeAreaView>
  );

}
}

const ListItems = ({paises, isEnabled1, navigation}) => {




  if (isEnabled1 === (false)){


  return(
    <TouchableOpacity key={paises.name.common} onPress={() => {navigation.navigate('Details', {paises, isEnabled1})}}>
    <View key={paises.name.common} style={styles.components}>
    <Image
    style={styles.images}
    source={{uri:paises.flags.png}}
  />
  <Text style={styles.titleb}>{paises.name.common}</Text>
  <Text style={styles.textb}>Population: {paises.population}</Text>
  <Text style={styles.textb}>Region: {paises.region}</Text>
  <Text style={styles.textb}>Capital: {paises.capital}</Text>
  </View>
  </TouchableOpacity>
  )
  }
  else{

    return(
<TouchableOpacity key={paises.name.common} onPress={() => {navigation.navigate('Details', {paises, isEnabled1})}}>
  <View  style={styles.componentsb}>
  <Image
  style={styles.images}
  source={{uri:paises.flags.png}}
/>
<Text style={styles.title}>{paises.name.common}</Text>
<Text style={styles.textw}>Population: {paises.population}</Text>
<Text style={styles.textw}>Region: {paises.region}</Text>
<Text style={styles.textw}>Capital: {paises.capital}</Text>
</View>
</TouchableOpacity>
    
      )
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
    color: 'hsl(200, 15%, 8%)',
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
    marginLeft:30,
   marginRight:30,

},
dropdown: {
  color: 'hsl(200, 15%, 8%)',
  backgroundColor: 'hsl(0, 0%, 100%)',
  borderColor: 'hsl(0, 0%, 100%)',
  marginLeft:30,
  marginRight:30,

},
  textb: {
    color: 'hsl(200, 15%, 8%)',
    paddingHorizontal:10,
    paddingVertical:3,
},
  textw: {
      color: 'hsl(0, 0%, 100%)',
      paddingHorizontal:10,
      paddingVertical:3,
  },
  titleb: {
    paddingHorizontal:10,
    fontWeight: '800',
    color: 'hsl(200, 15%, 8%)',
    marginVertical:10,
},
  title: {
    paddingHorizontal:10,
    fontWeight: '800',
    color: 'hsl(0, 0%, 100%)',
    marginVertical:10,
},
  componentsb: {
    backgroundColor:'hsl(209, 23%, 22%)',
    marginTop:30,
    width:250,
    justifyContent:'center',
    alignItems:'flex-start',
    alignContent:'center',
    marginHorizontal:'auto',
    textAlign:'left',
  
  },
  components: {
    backgroundColor:'hsl(0, 0%, 100%)',
    marginTop:30,
    width:250,
    justifyContent:'center',
    alignItems:'flex-start',
    alignContent:'center',
    marginHorizontal:'auto',
    textAlign:'center',
  },
  images: {
    height:150,
    width:250,
  },
  list: {
    alignItems:'center',
  }
});
