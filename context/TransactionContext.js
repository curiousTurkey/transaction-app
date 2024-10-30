import { createContext, useState } from "react";

export const TransactionContext = createContext();

const initialTransactions = [
    { id: "TXN001", amount: 5000, type: "credit", description: "Salary Deposit", date: "2024-10-01" },
    { id: "TXN002", amount: -1500, type: "debit", description: "Electricity Bill", date: "2024-10-05" },
    { id: "TXN003", amount: -200, type: "debit", description: "Grocery Purchase", date: "2024-10-07" },
    { id: "TXN004", amount: 1000, type: "credit", description: "Refund from Vendor", date: "2024-10-10" },
    { id: "TXN005", amount: -500, type: "debit", description: "Restaurant", date: "2024-10-12" },
    { id: "TXN006", amount: -2500, type: "debit", description: "Monthly Rent", date: "2024-10-15" },
    { id: "TXN007", amount: 700, type: "credit", description: "Freelance Payment", date: "2024-10-18" },
  ];
  
  const initialAccountSummary = {
    accountHolderName: "John Doe",
    accountNumber: "123456789",
    accountType: "Savings",
    balance: 5200,
    lastUpdated: "2024-10-18",
    totalCredits: 6700,
    totalDebits: -5200,
  };

  export const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState(initialTransactions);
    const [accountSummary, setAccountSummary] = useState(initialAccountSummary);

    const addTransaction = (transaction) => {
        setTransactions((prevTransactions) => [...prevTransactions, transaction]);
        
        // Update account summary balance and totals
        if (transaction.type === "credit") {
          setAccountSummary((prevSummary) => ({
            ...prevSummary,
            balance: prevSummary.balance + transaction.amount,
            totalCredits: prevSummary.totalCredits + transaction.amount,
            lastUpdated: transaction.date,
          }));
        } else if (transaction.type === "debit") {
          setAccountSummary((prevSummary) => ({
            ...prevSummary,
            balance: prevSummary.balance + transaction.amount,
            totalDebits: prevSummary.totalDebits + transaction.amount,
            lastUpdated: transaction.date,
          }));
        }
      };
      return (
        <TransactionContext.Provider value = {{transactions, addTransaction, accountSummary}} >
            {children}
        </TransactionContext.Provider>
      );
  }
