import { useState } from "react";
import { TransactionProvider } from "./hooks/useTransactions";

import Modal from "react-modal";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";


Modal.setAppElement("#root")

export function App() {

  const [showModalNewTransaction, setShowModalNewTransaction] = useState(false)

  function handleModalNewTransactionIsOpen() {
    setShowModalNewTransaction(true)
  }

  function handleModalNewTransactionIsClose() {
    setShowModalNewTransaction(false)
  }

  return (
    <TransactionProvider>
      <Header onOpenModalNewTransaction={handleModalNewTransactionIsOpen} />

      <NewTransactionModal
        isOpen={showModalNewTransaction}
        onRequestClose={handleModalNewTransactionIsClose}
      />

      <Dashboard />
    </TransactionProvider>
  );
}