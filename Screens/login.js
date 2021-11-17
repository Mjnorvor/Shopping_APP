import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View,ImageBackground } from 'react-native';





function DetailsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground style={styles.lback} source={require("../assets/logback.png")} />
          <View>
              <Text style={styles.hell}>Hello User</Text>
          </View>
          <View>
              <TextInput style ={styles.user}placeholder="Enter username or e-mail"/>
          </View>
          <View>
              <TextInput style={styles.pass}placeholder="Enter password"/>
          </View>
          <View style={styles.tv}>
              <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate('Details')}>
                  <Text>Login</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.acctouch}>
            <Text style={styles.acc}>Don't have an account?</Text>
          </View>
          <View style={styles.acctouch}>
          <TouchableOpacity style={styles.touch1} onPress={() => navigation.navigate('SignUp')}>
                  <Text>Sign Up</Text>
              </TouchableOpacity>
          </View>

        
    </View>
  );
}

<DetailsScreen />;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  acc:{
    color: "white", 
    marginTop: 30
  },
  acctouch:{
    
  },
  touch1:{
    backgroundColor: "#00FF00",
      width:100,
      height:30,
      borderRadius:5,
      alignItems: 'center', 
      justifyContent: 'center',
      marginBottom:50
      
  },
  hell:{
    
      marginBottom: 20,
      fontSize: 30,
      fontWeight: "800",
      color: "black"

  },
  user:{
   
    width: 300,
    borderRadius: 5,
    height: 40,
    borderColor: "#f0f8ff",
    backgroundColor: "#f9f9f9",

  },
  pass:{
    
    width: 300,
    borderRadius: 5,
    height: 40,
    borderColor: "#f0f8ff",
    backgroundColor: "#f9f9f9",
    marginTop: 10

  },
  touch:{
      backgroundColor: "#00FF00",
      width:200,
      height:30,
      borderRadius:5,
      alignItems: 'center', 
      justifyContent: 'center'

  },
  tv:{
    
      marginTop:15
  },
  lback:{
    width: "100%",
    height: "100%",
    position:"absolute",
    resizeMode:"cover",
  },

});

export default DetailsScreen;
