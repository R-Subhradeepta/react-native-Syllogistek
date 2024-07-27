import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { TextInput } from 'react-native';
import CustomButton from './components/button';


export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  

  const validation = () => {
    let error = {};

    if (!email) {
      error.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error.email = "Email is invalid.";
    }
    if (!password) error.password = "Password is required";

    setError(error);
    return Object.keys(error).length == 0;
  };

  const Login = () => {
    console.log(email);
    console.log(password);
    validation();
    navigation.navigate("Home");
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
            <Image
              source={require("../assets/login.png")}
              style={styles.img}
            />
          </View>
      <Text style={styles.title}>Log In</Text>
      <Text style={styles.title2}>LOOK WHO'S BACK!!</Text>
      <Text style={styles.title2}>QUICKLY LOG IN TO CONTINUE!!</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      <CustomButton title="Log In" onPress={Login} />
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    paddingBottom: 150,
    paddingTop:150,
  },
  title: {
    fontFamily:"serif",
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  title2: {
    fontFamily:"serif",
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  img:{
    height: "80%",
    width: "105%",
    align:"center",
    marginBottom:4,
    paddingLeft:150,
  },
});