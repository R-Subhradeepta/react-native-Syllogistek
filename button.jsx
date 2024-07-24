import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import ReusableButton from './reusableButton';

const Button = () => {
    const handlePress = () => {
        console.log('Button pressed');
    };

    return (
        <ImageBackground style={styles.background}>
            <Text style={styles.text}>The Reusable Buttons:</Text>
            <View style={styles.container}>
                <ReusableButton
                    iconName="star"
                    buttonText="Primary Button"
                    buttonColor="#6200ee"
                    onPress={handlePress}
                />
                <ReusableButton
                    iconName="angle-right"
                    buttonText="Secondary Button"
                    buttonColor="#6c757d"
                    onPress={handlePress}
                />
                <ReusableButton
                    iconName="check"
                    buttonText="Success Button"
                    buttonColor="green"
                    onPress={handlePress}
                />
                <ReusableButton
                    iconName="exclamation"
                    buttonText="Danger Button"
                    buttonColor="red"
                    onPress={handlePress}
                />
                <ReusableButton
                    iconName="warning"
                    buttonText="Warning Button"
                    buttonColor="orange"
                    onPress={handlePress}
                />
                <ReusableButton
                    iconName="info"
                    buttonText="info button"
                    buttonColor="#fedc56"
                    onPress={handlePress}
                />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 35,
        color: "pink",
        textAlign: 'center',
        paddingVertical: 50,
        fontWeight: '600',
    },
    background: {
        flex: 1,
        backgroundColor: 'navy',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
});

export default Button;