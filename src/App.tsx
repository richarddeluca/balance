import { useState } from "react";
import { GlobalStyle } from "./styles/Global";
import { Header } from "./components/Header"
import { Dashboard } from "./components/Dashboard"
import Modal from 'react-modal'
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/transactionsProvider";

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <TransactionsProvider>

        <NewTransactionModal isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal} />
        <Dashboard />
      </TransactionsProvider>

      <GlobalStyle />
    </>
  );
}
