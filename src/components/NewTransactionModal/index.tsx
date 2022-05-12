import React, { FormEvent, useCallback, useState } from 'react';
import closeImg from '../../assets/x.svg';
import incomeImg from '../../assets/entradas.svg';
import outcomImg from '../../assets/saidas.svg';
import Modal from 'react-modal';
import { Container, Radiobox, TransactionTypeContainer } from './styles';
import { useTransactions } from '../hooks/useTransactions';

interface PropsModalNewTransaction {
    isOpen:boolean;
    onRequestClose: () => void;
}


const NewTransactionModal: React.FC<PropsModalNewTransaction> = ({ isOpen, onRequestClose }) => {
  const { createTransaction } = useTransactions();

  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  const handleCreateNewTransaction = useCallback(async (event:  FormEvent) => {
     event.preventDefault();

     const data = {
        title,
        amount,
        category,
        type
     }
     
    await createTransaction(data);

    setTitle('');
    setAmount(0);
    setType('deposit');
    setCategory('');

    onRequestClose();
     
  }, [amount, category, createTransaction, onRequestClose, title, type])

    
  return <Modal isOpen={isOpen} 
                onRequestClose={onRequestClose}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
            >
                <button 
                    type="button"
                    onClick={onRequestClose} 
                    className="react-modal-close"
                >
                    <img src={closeImg} alt="close"/>
                </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>
                <input 
                    placeholder="Titulo" 
                    value={title}
                    onChange={event=> setTitle(event.target.value)}
                />
                
                <input 
                    type="number"  
                    placeholder="Valor" 
                    value={amount}
                    onChange={event=> setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <Radiobox type="button"  
                            onClick={() => setType('deposit')}
                            isActive={type === 'deposit'}
                            activeColor="green"
                        >
                        <img src={incomeImg} alt="entrada"/>
                        <span>Entrada</span>
                    </Radiobox>

                    <Radiobox 
                        type="button" 
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomImg} alt="saida"/>
                        <span>Saida</span>
                    </Radiobox>
                </TransactionTypeContainer>

                <input 
                    placeholder="Categoria"
                    value={category}
                    onChange={event=> setCategory(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>

            </Container>
        </Modal>;
}

export default NewTransactionModal;