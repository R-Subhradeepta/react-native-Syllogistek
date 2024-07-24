import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ReusableButton = ({ iconName, buttonText, buttonColor, onPress }) => (
    <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: buttonColor }]} onPress={onPress}>
        <View style={styles.buttonContent}>
            <Icon name={iconName} size={30} color="#fff" />
            <Text style={styles.buttonText}>{buttonText}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    buttonContainer: {
        marginBottom: 20,
        borderRadius: 7,
        paddingVertical: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        color: "white",
        fontSize: 25,
        marginLeft: 15,
    },
});

export default ReusableButton;