import React, { createContext, useState, useEffect } from 'react';

const staticTransactions = [
  { id: '1', date: '2024-10-01', description: 'Salary Payment', amount: 5000, type: 'credit' },
  { id: '2', date: '2024-10-05', description: 'Grocery Shopping', amount: -150, type: 'debit' },
  { id: '3', date: '2024-10-10', description: 'Utility Bill', amount: -75, type: 'debit' },
  { id: '4', date: '2024-10-12', description: 'Freelance Project', amount: 1200, type: 'credit' },
  { id: '5', date: '2024-10-15', description: 'Dining Out', amount: -60, type: 'debit' },
  { id: '6', date: '2024-10-18', description: 'Refund from Store', amount: 30, type: 'credit' },
  { id: '7', date: '2024-10-20', description: 'Transportation', amount: -20, type: 'debit' },
  { id: '8', date: '2024-10-22', description: 'Subscription Service', amount: -10, type: 'debit' },
  { id: '9', date: '2024-10-25', description: 'Investment Gain', amount: 200, type: 'credit' },
  { id: '10', date: '2024-10-28', description: 'Book Purchase', amount: -15, type: 'debit' },
  { id: '11', date: '2024-10-29', description: 'Cash Deposit', amount: 1000, type: 'credit' },
  { id: '12', date: '2024-10-30', description: 'Monthly Insurance Payment', amount: -120, type: 'debit' },
];

// Calculate summary
const calculateSummary = (transactions) => {
  const totalBalance = transactions.reduce((acc, txn) => acc + txn.amount, 0);
  const totalCredits = transactions.filter((txn) => txn.type === 'credit').reduce((acc, txn) => acc + txn.amount, 0);
  const totalDebits = transactions.filter((txn) => txn.type === 'debit').reduce((acc, txn) => acc + txn.amount, 0);

  return {
    totalBalance,
    totalCredits,
    totalDebits,
  };
};

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(staticTransactions);
  const [summary, setSummary] = useState({});

  useEffect(() => {
    const summaryData = calculateSummary(transactions);
    setSummary(summaryData);
  }, [transactions]);

  return (
    <TransactionContext.Provider value={{ transactions, summary }}>
      {children}
    </TransactionContext.Provider>
  );
};
