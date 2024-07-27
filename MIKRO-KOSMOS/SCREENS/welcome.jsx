// WelcomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomButton from './components/button';

const WelcomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.view}>
            <Image
              source={require("../assets/bt21-bgrm.png")}
              style={styles.img}
            />
          </View>
          <Text>
            WELCOME TO OUR WEBSITE!!!
          </Text>
    <CustomButton title="Log In" onPress={() => navigation.navigate('Login')} />
    <CustomButton title="Sign Up" onPress={() => navigation.navigate('Signup')} />
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default WelcomeScreen;
