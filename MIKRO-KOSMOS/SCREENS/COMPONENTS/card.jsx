import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


const Card = ({ id, title, content, imageUrl, onPress , screen }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.headerItem}
      onPress={() => navigation.navigate(item.screen)}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
      <Text style={styles.car}>{item.title}</Text>
    </TouchableOpacity>
  );
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={{ uri: imageUrl }} style={styles.cardImage} />
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{content}</Text>
    </View>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    margin: 5,
    flex: 1,
    height: 200,
    width: 150, // Adjust height as needed
  },
  cardImage: {
    width: '100%',
    height: '70%', // Adjust height ratio as needed
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardContent: {
    padding: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 10,
    color: '#666',
  },
});
export default Card;

