import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MealsScreen from './screens/MealsScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavScreen from './screens/FavScreen';
import FavouriteContextProvider from './context/FavouriteContext';
import { Provider } from 'react-redux';
import { store } from './redux/store';


const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerScreen() {
  return <Drawer.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#351401'
    },
    headerTintColor: 'white',
    sceneContainerStyle: { backgroundColor: '#3f2f25' },
    drawerContentStyle: { backgroundColor: '#351401' },
    drawerActiveTintColor: '#351401',
    drawerInactiveTintColor: 'white',
    drawerActiveBackgroundColor: '#e4baa1'
  }}>
    <Drawer.Screen
      name='Categories'
      component={CategoryScreen}
      options={{
        title: 'All Categories'
      }}
    />
    <Drawer.Screen
      name='Fav'
      component={FavScreen}
      options={{
        title: 'Favourites'
      }}
    />
  </Drawer.Navigator>
}

export default function App() {

  return (
    <>
      <StatusBar style='light' />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: '#351401'
            },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' }
          }}>
            <Stack.Screen
              name='MealsCategory'
              component={DrawerScreen}
              options={{
                headerShown: false
              }} />
            <Stack.Screen
              name='MealsOverview'
              component={MealsScreen}
              options={({ route }) => ({ title: route.params.title })} />

            <Stack.Screen
              name='MealDetail'
              component={MealDetailScreen}
              options={({ route }) => ({ title: route.params.title })} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>

    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
});
