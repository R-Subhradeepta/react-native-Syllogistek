// import React from 'react';
// import { View, FlatList, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';




// const headerData = [
//   { id: '1', title: 'RM', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReCVWFqZhEm-aMcTzEY8AqY7x63Gtg5s0Vbk4F9VqPVCUNyRm1bEScGdds_aCiAjE06pg&usqp=CAU', screen: 'RM' },
//   { id: '2', title: 'JIN', imageUrl: 'https://www.billboard.com/wp-content/uploads/2022/06/01-Jin-bts-billboard-1240.jpg?w=800', screen: 'JIN' },
//   { id: '3', title: 'SUGA', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3i0K62vxoogLkUcNUwA287tN-ISHO4QFgPef7eYfychnNscAq5FlKYTCNbBorNapBMTo&usqp=CAU', screen: 'SUGA' },
//   { id: '4', title: 'J-HOPE', imageUrl: 'https://www.billboard.com/wp-content/uploads/2022/06/01-j-hope-bts-billboard-1240.jpg?w=800', screen: 'JHOPE' },
//   { id: '5', title: 'JIMIN', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdGIcbEvHwB7Bx_DEGcSOAwv4uLV7yYlVIbQ&s', screen: 'JIMIN' },
//   { id: '6', title: 'V', imageUrl: 'https://www.billboard.com/wp-content/uploads/2022/06/V-bts-billboard-1240.jpg?w=800', screen: 'V' },
//   { id: '7', title: 'JUNGKOOK', imageUrl: 'https://www.billboard.com/wp-content/uploads/2022/06/01-Jungkook-bts-billboard-1548.jpg?w=800', screen: 'JUNGKOOK' },

// ];

// const SlidingHeader = ({ navigation }) => {
//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.headerItem}
//       onPress={() => navigation.navigate(item.screen)}
//     >
//       <Image source={{ uri: item.imageUrl }} style={styles.headerImage} />
//       <Text style={styles.headerItemText}>{item.title}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={headerData}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.headerListContainer}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     height: 130,
//   },
//   headerListContainer: {
//     paddingHorizontal: 8,
//   },
//   headerItem: {
//     alignItems: 'center',
//     marginHorizontal: 10,
//   },
//   headerImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginBottom: 5,
//   },
//   headerItemText: {
//     color: '#000',
//     fontSize: 15,
//   },
// });

// export default SlidingHeader;

// SlidingHeader.js
import React from 'react';
import { View, FlatList, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const headerData = [
  { id: '1', title: 'RM', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReCVWFqZhEm-aMcTzEY8AqY7x63Gtg5s0Vbk4F9VqPVCUNyRm1bEScGdds_aCiAjE06pg&usqp=CAU', screen: 'RM' },
  { id: '2', title: 'JIN', imageUrl: 'https://www.billboard.com/wp-content/uploads/2022/06/01-Jin-bts-billboard-1240.jpg?w=800', screen: 'JIN' },
  { id: '3', title: 'SUGA', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3i0K62vxoogLkUcNUwA287tN-ISHO4QFgPef7eYfychnNscAq5FlKYTCNbBorNapBMTo&usqp=CAU', screen: 'SUGA' },
  { id: '4', title: 'J-HOPE', imageUrl: 'https://www.billboard.com/wp-content/uploads/2022/06/01-j-hope-bts-billboard-1240.jpg?w=800', screen: 'JHOPE' },
  { id: '5', title: 'JIMIN', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdGIcbEvHwB7Bx_DEGcSOAwv4uLV7yYlVIbQ&s', screen: 'JIMIN' },
  { id: '6', title: 'V', imageUrl: 'https://www.billboard.com/wp-content/uploads/2022/06/V-bts-billboard-1240.jpg?w=800', screen: 'V' },
  { id: '7', title: 'JUNGKOOK', imageUrl: 'https://www.billboard.com/wp-content/uploads/2022/06/01-Jungkook-bts-billboard-1548.jpg?w=800', screen: 'JUNGKOOK' },

];

const SlidingHeader = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.headerItem}
      onPress={() => navigation.navigate(item.screen)}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.headerImage} />
      <Text style={styles.headerItemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>MEMBER PROFILES</Text>
      <FlatList
        data={headerData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.headerListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
  },
  headerListContainer: {
    paddingHorizontal: 8,
  },
  headerItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  headerImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 5,
  },
  headerItemText: {
    color: '#000',
    fontSize: 16,
  },
  heading: {
    fontSize: 19,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'left',
  },
});

export default SlidingHeader;
