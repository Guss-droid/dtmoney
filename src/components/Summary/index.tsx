import { useTransactions } from "../../hooks/useTransactions";

import incomeimg from '../../assets/income.svg'
import outcomeimg from '../../assets/outcome.svg'
import totalimg from '../../assets/total.svg'

import { Container } from "./styles";

export function Summary() {

  const { transactionsData } = useTransactions()

  console.log(transactionsData)

  const summary = transactionsData.reduce((acc, transaction) => {

    if (transaction.type === 'deposit') {
      acc.deposit += transaction.amount
      acc.total += transaction.amount
    } else {
      acc.withdraw += transaction.amount
      acc.total -= transaction.amount
    }

    return acc
  }, {
    deposit: 0,
    withdraw: 0,
    total: 0
  })

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeimg} alt="Income logo" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.deposit)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeimg} alt="Outcome logo" />
        </header>
        <strong>- 
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.withdraw)}
        </strong>
      </div>
      <div className="total">
        <header>
          <p>Total</p>
          <img src={totalimg} alt="Total logo" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}