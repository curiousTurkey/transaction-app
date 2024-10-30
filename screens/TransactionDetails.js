
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TransactionContext } from '../context/TransactionContext';

const TransactionDetailScreen = ({ route, navigation }) => {
  
  const { transactionId } = route.params;

  
  const { transactions } = useContext(TransactionContext);
  const transaction = transactions.find((txn) => txn.id === transactionId);

  if (!transaction) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Transaction not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Button title="Back" onPress={() => navigation.goBack()} />
        <Text style={styles.heading}>Details</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailLabel}>Transaction ID:</Text>
        <Text style={styles.detailValue}>{transaction.id}</Text>

        <Text style={styles.detailLabel}>Date:</Text>
        <Text style={styles.detailValue}>{transaction.date}</Text>

        <Text style={styles.detailLabel}>Description:</Text>
        <Text style={styles.detailValue}>{transaction.description}</Text>

        <Text style={styles.detailLabel}>Type:</Text>
        <Text style={[styles.detailValue, transaction.type === 'credit' ? styles.credit : styles.debit]}>
          {transaction.type === 'credit' ? 'Credit' : 'Debit'}
        </Text>

        <Text style={styles.detailLabel}>Amount:</Text>
        <Text style={styles.detailValue}>${Math.abs(transaction.amount)}</Text>
      </View>
    </View>
  );
};

export default TransactionDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  detailsContainer: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  detailLabel: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 12,
  },
  detailValue: {
    fontSize: 16,
    color: '#555',
    marginTop: 4,
  },
  credit: {
    color: 'green',
  },
  debit: {
    color: 'red',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});
