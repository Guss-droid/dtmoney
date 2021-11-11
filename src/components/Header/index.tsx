import logoimg from '../../assets/logo.svg'
import { Container, Content } from './styles';

interface IModalNewTransactionOpen {
  onOpenModalNewTransaction: () => void
}

export function Header({onOpenModalNewTransaction: handleModalNewTransactionIsOpen}: IModalNewTransactionOpen) {
  return (
    <Container>
      <Content>
        <img src={logoimg} alt="dtmoney" />
        <button type="button" onClick={handleModalNewTransactionIsOpen}>
          Nova transação
        </button>
      </Content>
      
    </Container>
  );
}