import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { TextInput } from 'react-native';
import CustomButton from './components/button';

export default function Signup({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  function onChangeName(text) {
    setName(text);
  }
  function onChangeEmail(text) {
    setEmail(text);
  }
  function onChangePassword(text) {
    setPassword(text);
  }

  function Register() {
    console.log(name);
    console.log(email);
    console.log(password);
    validation();
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
            <Image
              source={require("../assets/signup.jpg")}
              style={styles.img}
            />
          </View>
      <Text style={styles.title}>LOOK! A NEW MEMBER!!!</Text>
      <Text style={styles.title2}>Quicly Sign up and lets continue...</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        secureTextEntry
        autoCapitalize="none"
      />
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
      
      <CustomButton title="Sign Up" onPress={Register} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    paddingBottom:150,
    paddingTop: 150,
  },
  title: {
    fontFamily: "serif",
    paddingBottom: 0,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  title2: {
    fontFamily: "serif",
    fontSize:18,
    fontWeight: 'bold',
    marginBottom: 24,

  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 7,
  },
  view: {
    width: "50%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  img:{
    paddingTop: 30,
    width: "90%",
    height: "100%",
    padding: 15,
    marginLeft: 150,
  }
});
