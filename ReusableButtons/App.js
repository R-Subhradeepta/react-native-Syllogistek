import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ReusableButton from './components/reusableButton';
import Buttons from './components/button';



export default function App() {
  
  return (
    <View style={styles.container}>
  
      <Buttons/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "violet",
    
  },
 

});