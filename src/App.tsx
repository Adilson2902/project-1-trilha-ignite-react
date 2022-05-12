import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import NewTransactionModal from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";
import { TransactionProvider } from './components/hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  const handleOpenNewTransactionModal = () => {
      setIsNewTransactionModalOpen(true);
  }

  const handleCloseNewTransactionModal = () => {
      setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionProvider>
    <GlobalStyle />
    <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
    <Dashboard />
    <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
    </TransactionProvider>
  );
}

