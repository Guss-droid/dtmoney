import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

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

export function TransactionsTable() {

  const [transactions, setTrasactions] = useState<ITransactions[]>([])

  useEffect(() => {
    api.get<TransactionResponse>('transaction')
      .then(res => setTrasactions(res.data.transactions))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{new Intl.DateTimeFormat('pt-BR').format(
                new Date(transaction.createdAt)
              )}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}