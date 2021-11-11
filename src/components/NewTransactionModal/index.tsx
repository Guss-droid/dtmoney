import { FormEvent, useState } from 'react';
import Modal from 'react-modal'

import closeimg from '../../assets/close.svg'
import incomeimg from '../../assets/income.svg'
import outcomeimg from '../../assets/outcome.svg'
import { api } from '../../services/api';

import { Container, RadioBox, TransactionTypeContainer } from './styles';

interface IModalTransaction {
  isOpen: boolean;
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: IModalTransaction) {

  const [buttonTypeSelected, setButtonTypeSelected] = useState('deposit')
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')

  async function handleCreateTransaction(e: FormEvent) {
    e.preventDefault()

    const data = {
      title,
      value,
      category,
      buttonTypeSelected
    }

   await api.post('/transaction', data)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeimg} alt="Fechar o modal" />
      </button>

      <Container onSubmit={handleCreateTransaction}>
        <h2>Cadastrar Transação</h2>

        <input
          type="text"
          placeholder="Nome"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={e => setValue(Number(e.target.value))}
        />

        <TransactionTypeContainer>

          <RadioBox
            type="button"
            onClick={() => setButtonTypeSelected('deposit')}
            isActive={buttonTypeSelected === 'deposit'}
            activeColor="greenButton"
          >
            <img src={incomeimg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setButtonTypeSelected('withdraw')}
            isActive={buttonTypeSelected === 'withdraw'}
            activeColor="redButton"
          >
            <img src={outcomeimg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>

        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>

      </Container>
    </Modal>
  );
}