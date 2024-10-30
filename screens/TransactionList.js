// TransactionListScreen.js
import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { TransactionContext } from '../context/TransactionContext';

const TransactionListScreen = ({ navigation }) => {
  const { transactions } = useContext(TransactionContext);

  const renderTransaction = ({ item }) => (
    <TouchableOpacity
      style={styles.transactionRow}
      onPress={() => navigation.navigate('TransactionDetail', { transactionId: item.id })}
    >
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={[styles.amount, item.type === 'credit' ? styles.credit : styles.debit]}>
        {item.type === 'credit' ? '+' : '-'}${Math.abs(item.amount)}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transaction List</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={renderTransaction}
        ListEmptyComponent={<Text style={styles.emptyText}>No transactions available</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  transactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  date: {
    fontSize: 14,
    color: '#555',
  },
  description: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    marginLeft: 10,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  credit: {
    color: 'green',
  },
  debit: {
    color: 'red',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
    marginTop: 20,
  },
});

export default TransactionListScreen;
