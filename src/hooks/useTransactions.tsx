import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface ITransactions {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: Date;
}

interface TransactionResponse {
  transactions: ITransactions[];
}

interface ITransactionProvider {
  children: ReactNode;
}

interface ITransactionsContextData {
  transactionsData: ITransactions[]
  createTransaction: (transaction: TransactionInputProps) => Promise<void>
}

type TransactionInputProps = Omit<ITransactions, "id" | "createdAt">

const TransactionsContext = createContext({} as ITransactionsContextData)

export function TransactionProvider({ children }: ITransactionProvider) {
  const [transactionsData, setTransactions] = useState<ITransactions[]>([])

  useEffect(() => {
    api.get<TransactionResponse>("transaction")
      .then(res => setTransactions(res.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionInputProps) {
    const res = await api.post("/transaction", {
      ...transactionInput,
      createdAt: new Date(),
    })
    const { transactions } = res.data

    setTransactions([
      ...transactionsData,
      transactions
    ])
  }

  return (
    <TransactionsContext.Provider value={{ transactionsData, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}