// import React from 'react';
// import { View, FlatList, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
// import Card from './components/card';
// import CustomMenu from './components/menu';
// import SlidingHeader from './components/header';

// const data = [
  // { id: '1', title: 'ALBUMS', content: 'CLICK HERE TO SEE ALL THE ALBUMS BY BTS.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIezQn8OVcVta1mJfqvdRsCJDdoSWR_yJVuQ&s' },
  // { id: '2', title: 'SINGLES', content: 'CLICK HERE TO SEE ALL THE SINGLES BY BTS.', imageUrl: 'https://ibighit.com/bts/images/bts/discography/take-two/discography-cover.png' },
  // { id: '3', title: 'SOLO', content: 'CLICK HERE TO SEE ALL THE SOLO PROJECT BY BTS MEMBERS.', imageUrl: 'https://ibighit.com/bts/images/bts/discography/jimin/muse/discography-cover.png' },
  // { id: '5', title: 'JAPANESE ALBUMS', content: 'CLICK HERE TO SEE ALL THE JAPANESE ALBUMS BY BTS', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1e/BTS_-_BTS%2C_the_Best.png' },
  // { id: '4', title: 'FAN SONGS', content: 'CLICK HERE TO SEE ALL THE SONGS MADE BY FANS FOR BTS.', imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT4cSOPwltcSJ-GHOSRygH81DehX6PBSF7ip5LXNItv5BV1vNx7' },
//   { id: '6', title: 'Card 6', content: 'This is the content of card 6.', imageUrl: 'https://via.placeholder.com/150' },

// ];

// const HomeScreen = ({ navigation }) => {
  
//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.item}
//       onPress={() => {
//         if (index === 0) {
//           // Navigate to Albums only if it's the first card
//           navigation.navigate('Albums');
//         } else {
//           // Handle other card actions if needed
//           console.log('Card pressed:', item.title);
//         }
//       }}
//     >
//       <Card id={item.id} title={item.title} content={item.content} imageUrl={item.imageUrl} />
//     </TouchableOpacity>
//   );

//   return (

//     <View style={styles.container}>
//       <CustomMenu navigation={navigation} />
//       <SlidingHeader navigation={navigation} />
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         numColumns={2}
//         contentContainerStyle={styles.listContainer}

//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   listContainer: {
//     paddingBottom: 16,
//   },
//   item: {
//     flex: 1,
//     margin: 8,

//   },
// });

// export default HomeScreen;



// HomeScreen.js
import React from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Card from './components/card';
import SlidingHeader from './components/header';
import AlbumsScreen from './cardScreens/albums';
import CustomMenu from './components/menu';

const data = [
  { id: '1', title: 'ALBUMS', content: 'CLICK HERE TO SEE ALL THE ALBUMS BY BTS.', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIezQn8OVcVta1mJfqvdRsCJDdoSWR_yJVuQ&s', screen: 'ALBUMS' },
  { id: '2', title: 'SINGLES', content: 'CLICK HERE TO SEE ALL THE SINGLES BY BTS.', imageUrl: 'https://ibighit.com/bts/images/bts/discography/take-two/discography-cover.png', screen:'SINGLES' },
  { id: '3', title: 'SOLO', content: 'CLICK HERE TO SEE ALL THE SOLO PROJECT BY BTS MEMBERS.', imageUrl: 'https://ibighit.com/bts/images/bts/discography/jimin/muse/discography-cover.png', screen:'SOLO' },
  { id: '4', title: 'JAPANESE ALBUMS', content: 'CLICK HERE TO SEE ALL THE JAPANESE ALBUMS BY BTS', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1e/BTS_-_BTS%2C_the_Best.png',screen:'JAPANESE' },
  { id: '5', title: 'FAN SONGS', content: 'CLICK HERE TO SEE ALL THE SONGS MADE BY FANS FOR BTS.', imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT4cSOPwltcSJ-GHOSRygH81DehX6PBSF7ip5LXNItv5BV1vNx7',screen:'ARMY' },

];

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate(item.screen)}
          >
      <Card id={item.id} title={item.title} content={item.content} imageUrl={item.imageUrl} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
       <CustomMenu navigation={navigation} />
      <SlidingHeader/>
      <Card/>
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
    paddingBottom: 200,
  },
  item: {
    flex: 1,
    margin: 8,
    // width: (Dimensions.get('window').width / 2) - 16,
  },
});

export default HomeScreen;

