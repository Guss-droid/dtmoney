import { Container } from "./styles";

import incomeimg from '../../assets/income.svg'
import outcomeimg from '../../assets/outcome.svg'
import totalimg from '../../assets/total.svg'

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeimg} alt="Income logo"/>
        </header>
        <strong>R$ 1.000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeimg} alt="Outcome logo"/>
        </header>
        <strong>- R$ 500,00</strong>
      </div>
      <div className="total">
        <header>
          <p>Total</p>
          <img src={totalimg} alt="Total logo"/>
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  );
}