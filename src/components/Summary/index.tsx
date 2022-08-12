import { useTransactions } from "../../hooks/useTransactions";

import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"

import { Container } from "./styles";
import { priceFormatter } from "../../utils/formatter";

export function Summary() {

  const { transactionsData } = useTransactions()

  const summary = transactionsData.reduce((acc, transaction) => {
    if (transaction.type === "deposit") {
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
          <img src={incomeImg} alt="Income logo" />
        </header>

        <strong>
          {priceFormatter.format(summary.deposit)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Outcome logo" />
        </header>
        <strong>- {" "} 
          {priceFormatter.format(summary.withdraw)}
        </strong>
      </div>
      
      <div className="total">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total logo" />
        </header>
        <strong>
          {priceFormatter.format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}