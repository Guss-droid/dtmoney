import { useState } from "react";
import Modal from 'react-modal'

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root')

export function App() {

  const [showModalNewTransaction, setShowModalNewTransaction] = useState(false)

  function handleModalNewTransactionIsOpen() {
    setShowModalNewTransaction(true)
  }

  function handleModalNewTransactionIsClose() {
    setShowModalNewTransaction(false)
  }

  return (
    <>
      <Header onOpenModalNewTransaction={handleModalNewTransactionIsOpen} />

      <NewTransactionModal
        isOpen={showModalNewTransaction}
        onRequestClose={handleModalNewTransactionIsClose}
      />

      <Dashboard />
    </>
  );
}