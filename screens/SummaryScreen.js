import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TransactionContext } from '../context/TransactionContext';

const SummaryScreen = () => {
  const { transactions } = useContext(TransactionContext);

  // Calculate total balance, total credits, and total debits
  const totalBalance = transactions.reduce((acc, txn) => acc + txn.amount, 0);
  const totalCredits = transactions
    .filter((txn) => txn.type === 'credit')
    .reduce((acc, txn) => acc + txn.amount, 0);
  const totalDebits = transactions
    .filter((txn) => txn.type === 'debit')
    .reduce((acc, txn) => acc + txn.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Account Summary</Text>
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Total Balance: ${totalBalance.toFixed(2)}</Text>
        <Text style={styles.summaryText}>Total Credits: ${totalCredits.toFixed(2)}</Text>
        <Text style={styles.summaryText}>Total Debits: ${totalDebits.toFixed(2)}</Text>
      </View>
      <Text style={styles.transactionHeader}>Recent Transactions</Text>
      {transactions.slice(0, 9).map((txn) => (
        <View key={txn.id} style={styles.transactionItem}>
          <Text style={styles.transactionDate}>{txn.date}</Text>
          <Text style={styles.transactionDesc}>{txn.description}</Text>
          <Text
            style={[
              styles.transactionAmount,
              txn.type === 'credit' ? styles.credit : styles.debit,
            ]}
          >
            {txn.type === 'credit' ? '+' : '-'}${Math.abs(txn.amount).toFixed(2)}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default SummaryScreen;

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
    textAlign: 'flex-start',
  },
  summaryContainer: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f3f3f3',
    marginBottom: 20,
  },
  summaryText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 8,
  },
  transactionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  transactionDate: {
    fontSize: 16,
    color: '#888',
  },
  transactionDesc: {
    fontSize: 16,
    color: '#555',
    flex: 1,
    marginLeft: 10,
  },
  transactionAmount: {
    fontSize: 16,
  },
  credit: {
    color: 'green',
  },
  debit: {
    color: 'red',
  },
});
