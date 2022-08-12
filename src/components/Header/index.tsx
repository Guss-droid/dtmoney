import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles';

interface IModalNewTransactionOpen {
  onOpenModalNewTransaction: () => void
}

export function Header({ onOpenModalNewTransaction }: IModalNewTransactionOpen) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Dt money" />
        <button type="button" onClick={onOpenModalNewTransaction}>
          Nova transação
        </button>
      </Content>

    </Container>
  );
}