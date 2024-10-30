import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TransactionProvider } from './context/TransactionContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionListScreen from './screens/TransactionList';
import TransactionDetailScreen from './screens/TransactionDetails';

function transactionStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='TransactionList' component={TransactionListScreen} options={{headerShown: false}}/>
      <Stack.Screen name='TransactionDetail' component={TransactionDetailScreen} options={{headerTitle : "Transaction Details"}}/>
    </Stack.Navigator>
  );
}
export default function App() {

  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  return (
    <TransactionProvider>
       <View style={styles.container}>
       <Tab.Navigator>
        <Tab.Screen name='Transactions' component={transactionStack} />
        <Tab.Screen name='Summary' component={TransactionDetailScreens} />
       </Tab.Navigator>
       <StatusBar style="auto" />
       </View>
    </TransactionProvider>
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
