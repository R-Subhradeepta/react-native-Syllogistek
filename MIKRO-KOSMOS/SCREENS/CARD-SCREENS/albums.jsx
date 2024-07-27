import React from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Card from '../components/card'; // Ensure this path is correct

const data = [
  { id: '1', title: '2 COOL 4 SKOOL', content: '.', imageUrl: 'https://ibighit.com/bts/images/bts/discography/2_cool_4_school/album-cover.jpg' },
  { id: '2', title: 'O!RUL8,2?', content: '.', imageUrl: 'https://ibighit.com/bts/images/bts/discography/o_rul8_2/album-cover.jpg' },
  { id: '3', title: 'SKOOL LUV AFFAIR', content: '.', imageUrl: 'https://ibighit.com/bts/images/bts/discography/skool_luv_affair/album-cover.jpg' },
  { id: '4', title: 'DARK & WILD', content: '.', imageUrl: 'https://ibighit.com/bts/images/bts/discography/dark_and_wild/album-cover.jpg' },
  { id: '5', title: 'THE MOST BEAUTIFUL MOMENT IN LIFE PT.1', content: '.', imageUrl: 'https://ibighit.com/bts/images/bts/discography/hwayangyeonhwa-pt1/album-cover.jpg' },
  { id: '6', title: 'THE MOST BEAUTIFUL MOMENT IN LIFE PT.2', content: '.', imageUrl: 'https://ibighit.com/bts/images/bts/discography/hwayangyeonhwa-pt1/album-cover.jpg' },
  { id: '7', title: 'THE MOST BEAUTIFUL MOMENT IN LIFE :YOUNG FOREVER', content: '.', imageUrl: 'https://ibighit.com/bts/images/bts/discography/hwayangyeonhwa-pt2/album-cover.jpg' },
  { id: '8', title: 'WINGS', content: '.', imageUrl: 'https://ibighit.com/bts/images/bts/discography/young_forever/album-cover.jpg' },
  {id: '9', title: 'YOU NEVER WALK ALONE', content: '.', imageUrl: 'https://ibighit.com/bts/images/bts/discography/wings/album-cover.jpg'},
  {id: '10', title: 'LOVE YOURSELF承 ‘HER’', content: '.', imageUrl: 'https://ibighit.com/bts/images/bts/discography/you_never_walk_alone/album-cover.jpg'},
  {id: '11', title: 'LOVE YOURSELF 轉 ‘TEAR’', content: '.', imageUrl: 'https://ibighit.com/bts/images/bts/discography/love_yourself-her/album-cover.jpg'},
  {id: '12', title: 'LOVE YOURSELF 結 ‘ANSWER’', content: '.', imageUrl: 'https://ibighit.com/bts/images/bts/discography/love_yourself-tear/album-cover.jpg'},
  { id: '13', title: 'MAP OF THE SOUL : PERSONA', content: '.', imageUrl: 'https://ibighit.com/bts/images/bts/discography/map_of_the_soul-persona/album-cover.jpg' },
  { id: '14', title: 'MAP OF THE SOUL : 7', content: '.', imageUrl: 'https://ibighit.com/bts/images/bts/discography/map_of_the_soul-7/img01.jpg' },
  { id: '15', title: 'BE', content: '.', imageUrl: 'https://ibighit.com/bts/images/bts/discography/be/rwXJxHlQ87gEiJJynB1pmScl.jpg' },
  { id: '16', title: 'BUTTER', content: '.', imageUrl: 'https://ibighit.com/bts/images/bts/discography/butter-2/butter-2-cover.jpg' },
  { id: '17', title: 'PROOF', content: '.', imageUrl: 'https://ibighit.com/bts/images/bts/discography/proof/discography-cover.png' },

];

const CardListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Details', { itemId: item.id })}
    >
      <Card
        title={item.title}
        content={item.content}
        imageUrl={item.imageUrl}
      />
    // </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listContainer: {
    paddingBottom: 100, // Adjust based on your design
  },
  item: {
    flex: 1,
    margin: 8,
    height: 200,
    width: (Dimensions.get('window').width / 2) - 24, // Adjust margin
  },
});

export default CardListScreen;
