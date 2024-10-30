import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TransactionProvider } from './context/TransactionContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionListScreen from './screens/TransactionList';
import TransactionDetailScreen from './screens/TransactionDetails';
import { NavigationContainer } from '@react-navigation/native';
import SummaryScreen from './screens/SummaryScreen';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

//
function TransactionStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='TransactionList' component={TransactionListScreen} options={{headerShown: false, title : ""}}/>
      <Stack.Screen name='TransactionDetail' component={TransactionDetailScreen} options={{headerShown: true}}/>
    </Stack.Navigator>
  );
}
//
export default function App() {
  return (
    <NavigationContainer>
      <TransactionProvider>
       <Tab.Navigator initialRouteName=''>
        <Tab.Screen options={{tabBarIcon: () => {
          return (<FontAwesome name="list" size={24} color="black" />);
        }}} name='Transactions' component={TransactionStack} />
        <Tab.Screen options={{tabBarIcon: () => {
          return(<FontAwesome name="money" size={24} color="black" />);
        }}} name='Summary' component={SummaryScreen} />
       </Tab.Navigator>
       <StatusBar style="auto" />
    </TransactionProvider>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
