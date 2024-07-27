
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import WelcomeScreen from './screens/welcome';
import LoginScreen from './screens/login';
import SignupScreen from './screens/signup';
import HomeScreen from './screens/homescreen';

import AlbumScreen from './screens/cardScreens/albums';
import ARMY from './screens/cardScreens/army';
import JAPANESE from './screens/cardScreens/japanese';
import SINGLES from './screens/cardScreens/single';
import SOLO from './screens/cardScreens/solo';


import UserProfileScreen from './screens/components/userProfile';
import FavouritesScreen from './screens/favourites';
import { FavoritesProvider } from './screens/context';
import EditProfileScreen from './screens/components/editProfile';
import MENU from './screens/components/menu';


import RM from './screens/memberProfiles/rm';
import JIN from './screens/memberProfiles/jin';
import SUGA from './screens/memberProfiles/suga';
import JHOPE from './screens/memberProfiles/jhope';
import JIMIN from './screens/memberProfiles/jimin';
import V from './screens/memberProfiles/v';
import JUNGKOOK from './screens/memberProfiles/jungkook';




const Stack = createStackNavigator();


export default function App() {


  return (
    <NavigationContainer>

        <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen}/> 
        <Stack.Screen name="RM" component={RM} />
        <Stack.Screen name="JIN" component={JIN} />
        <Stack.Screen name="SUGA" component={SUGA}/>
        <Stack.Screen name="JHOPE" component={JHOPE} />
        <Stack.Screen name="JIMIN" component={JIMIN} />
        <Stack.Screen name="V" component={V}/>
        <Stack.Screen name="JUNGKOOK" component={JUNGKOOK} />
        <Stack.Screen name="ALBUMS" component={AlbumScreen} />
        <Stack.Screen name="ARMY" component={ARMY}/>
        <Stack.Screen name="JAPANESE" component={JAPANESE} />
        <Stack.Screen name="SINGLES" component={SINGLES} />
        <Stack.Screen name="SOLO" component={SOLO}/>
        <Stack.Screen name="USER" component={UserProfileScreen}/>         
        <Stack.Screen name="MENU" component={MENU}/>         
         
      </Stack.Navigator>
      </NavigationContainer>
    
  );
}







