import React from 'react';
import { StyleSheet, Text, View,ImageBackground,TouchableOpacity, FlatList,SafeAreaView,Image } from 'react-native';

const DATA = [
    {
      id:1,
      title: 'All-City Bike',
      image:require("../assets/bike1.png"),
      price: "GHS 950.00",
      Size: "29-inches",
      Review: "Good Quality"
    },
    {
      id: 2,
      title: 'Brompton Bike',
      image:require("../assets/bike2.png"),
      price: "GHS 1050.00",
      Size: "26-inches",
      Review: "Good Quality"
    },
    {
      id: 3,
      title: 'Colnago Bike',
      image:require("../assets/bike3.png"),
      price: "GHS 950.00",
      Size: "28-inches",
      Review: "Good Quality"
    },
    {
        id: 4,
        title: '3T Bike',
        image:require("../assets/bike4.png"),
        price: "GHS 750.00",
        Size: "26.5-inches",
        Review: "Good Quality"
      },
      {
        id: 5,
        title: 'Bianchi Bike',
        image:require("../assets/bike5.png"),
        price: "GHS 700.00",
        Size: "29-inches",
        Review: "Good Quality"
      },
      {
        id: 6,
        title: 'Alchemy Bike',
        image:require("../assets/bike6.png"),
        price: "GHS 800.00",
        Size: "27-inches",
        Review: "Good Quality"
      },
  ];
  
  
  
  const Details = ({ navigation }) => {

    const Item = ({ data }) => {
      return(
      <TouchableOpacity style={styles.items} onPress={() => navigation.navigate('specs',data)}>
        <Image style={styles.bike1} source={data.image}  />
        <Text >{data.title}</Text>
      </TouchableOpacity>
    )};


    const renderItem = ({ item }) =><Item data={item} />;
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
        numColumns={2}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:5
    },
    bike1:{
        
        width: 170,
        height: 150,
        resizeMode: "contain",
        
    },
    view1:{
        flexDirection: "row",

    },
    view2:{
        flexDirection: "row",


    },
    items:{
        
        top:100,
        flex:1,
        paddingTop:5,

    },
    bike3:{
        width: 170,
        height: 190,
        marginTop: 200,
        position: "absolute", 
        resizeMode: "contain"
           
    },
    bike4:{
        width: 180,
        height: 400,
        marginBottom: 200 ,
        marginTop: 90,
        position: "absolute",
        marginLeft: 180,
        resizeMode: "contain",       
    },
    view3:{
        flexDirection: "row"

    },
    bike5:{
        width: 180,
        height: 160,
        position: "absolute",
        resizeMode: "contain",
        marginTop: 400,
        

    },
    bike6:{
        width: 180,
        height: 160,
        position: "absolute",
        resizeMode: "contain",
        marginTop: 400,
        marginLeft: 180,




    },
    
    txt:{
        textAlign: "center",
        fontSize: 20,
        fontWeight: "500"

    },
});


export default Details;