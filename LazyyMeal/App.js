import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Home from './src/screens/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Videos from './src/screens/Videos';
const Drawer = createDrawerNavigator();
import { createContext, useState } from 'react';
import CustomDrawer from './src/CustomDrawer';
import MealOrder from './src/screens/MealOrder';
import MealInformation from './src/screens/MealInformation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Player from './src/screens/Player';
import { channelIDA, channelIDR, getOrderTitle, channelIDNYT, channelIDY } from './src/services/apiServices';
import Favorites from './src/screens/Favorites';
import GoogleAuth from './src/screens/GoogleAuth';

const AppContext = createContext();

function App() {
  const [filterText, setFilterText] = useState();
  const [filterItems, setFilterItems] = useState([]);

  const changeFilterItems = (text) => {
    setFilterText(text);
  }

  const fetchData = async () => {
    let filterItemsNY = await getOrderTitle(filterText, channelIDNYT);
    let filterItems = await getOrderTitle(filterText, channelIDR);
    let filterItemsY = await getOrderTitle(filterText, channelIDY);
    let filterItemsA = await getOrderTitle(filterText, channelIDA);

    let combinedFilterItems = [...filterItemsNY, ...filterItems, ...filterItemsA];

    setFilterItems(combinedFilterItems);
  }

  React.useEffect(() => {
    fetchData();
  }, [filterText]);

  React.useEffect(() => {
    // Burada filterItems ile yapılacak ekstra işlemler olabilir
  }, [filterItems]);

  return (
    <AppContext.Provider value={{ filterText, changeFilterItems, filterItems }}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="GoogleAuth"
          drawerContent={props => <CustomDrawer {...props} />}
          screenOptions={{ headerShown: false, drawerLabelStyle: { marginLeft: 0 }, drawerActiveBackgroundColor: '#F9F3CC', drawerActiveTintColor: 'black', drawerInactiveTintColor: 'black' }}
        >
          <Drawer.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              drawerIcon: ({ color }) => (
                <Ionicons name="home-outline" size={22} color={color} />
              ),
              title: 'Ana Sayfa'
            }}
          />
          <Drawer.Screen
            name="Videos"
            component={Videos}
            options={{
              headerShown: false, drawerIcon: ({ color }) => (
                <Ionicons name="videocam-outline" size={22} color={color} />
              ),
              title: 'Videolar'
            }}
          />
          <Drawer.Screen
            name="Favorite"
            component={Favorites}
            options={{
              headerShown: false, drawerIcon: ({ color }) => (
                <Ionicons name="heart-outline" size={22} color={color} />
              ),
              title: 'Favoriler'
            }}
          />
          <Drawer.Screen
            name="MealInformation"
            component={MealInformation}
            options={{ headerShown: false, drawerItemStyle: { height: 0 } }}
          />
          <Drawer.Screen
            name="MealOrder"
            component={MealOrder}
            options={{ headerShown: false, drawerItemStyle: { height: 0 } }}
          />
          <Drawer.Screen
            name="Generate"
            component={Videos}
            options={{ headerShown: false, drawerItemStyle: { height: 0 } }}
          />
          <Drawer.Screen
            name="Player"
            component={Player}
            options={{ headerShown: false, drawerItemStyle: { height: 0 } }}
          />
          <Drawer.Screen
            name="FavoriteOrders"
            component={Favorites}
            options={{ headerShown: false, drawerItemStyle: { height: 0 } }}
          />
          <Drawer.Screen
            name="GoogleAuth"
            component={GoogleAuth}
            options={{ headerShown: false, drawerItemStyle: { height: 0 } }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

export default App;
export { AppContext };
