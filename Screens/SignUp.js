import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View,ImageBackground } from 'react-native';





function SignUp({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground style={styles.lback} source={require("../assets/logback.png")} />
          <View>
              <Text style={styles.hell}>Sign Up</Text>
          </View>
          <View>
              <TextInput style ={styles.newfir}placeholder="Enter your first name"/>
          </View>
          <View>
              <TextInput style ={styles.newla}placeholder="Enter your last name"/>
          </View>
          <View>
              <TextInput style ={styles.newem}placeholder="Enter an e-mail"/>
          </View>
          <View>
              <TextInput style={styles.newpass}placeholder="Enter a password"/>
          </View>
          <View style={styles.acctouch}>
          <TouchableOpacity style={styles.touch1} onPress={() => navigation.navigate('Login')}>
                  <Text>Sign Up</Text>
              </TouchableOpacity>
          </View>

        
    </View>
  );
}

<SignUp />;
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
  newfir:{
    width: 300,
    borderRadius: 5,
    height: 40,
    borderColor: "#f0f8ff",
    backgroundColor: "#f9f9f9",
    marginTop: 10

  },
  newem:{
    width: 300,
    borderRadius: 5,
    height: 40,
    borderColor: "#f0f8ff",
    backgroundColor: "#f9f9f9",
    marginTop: 10

  },
  newla:{
    width: 300,
    borderRadius: 5,
    height: 40,
    borderColor: "#f0f8ff",
    backgroundColor: "#f9f9f9",
    marginTop: 10

  },
  touch1:{
    backgroundColor: "#00FF00",
      width:100,
      height:30,
      borderRadius:5,
      alignItems: 'center', 
      justifyContent: 'center',
      marginTop:50
      
  },
  hell:{
      marginBottom: 20,
      fontSize: 30,
      fontWeight: "800",
      color: "black",
  },
  newacc:{
   
    width: 300,
    borderRadius: 5,
    height: 40,
    borderColor: "#f0f8ff",
    backgroundColor: "#f9f9f9",

  },
  newpass:{
    
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

export default SignUp;
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
