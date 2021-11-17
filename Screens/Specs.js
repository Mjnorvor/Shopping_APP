import { StyleSheet, Text, View,ImageBackground,TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';


const specs=({ navigation,route })=>{
    const data = route.params;
    console.log(data);
    return(
        <View>
            <Text>{data.price}</Text>
            <Text>{data.title}</Text>
            </View>
    )
};

export default specs;