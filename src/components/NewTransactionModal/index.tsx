import React, { useState } from 'react';
import closeImg from '../../assets/x.svg';
import incomeImg from '../../assets/entradas.svg';
import outcomImg from '../../assets/saidas.svg';
import Modal from 'react-modal';
import { Container, Radiobox, TransactionTypeContainer } from './styles';

interface PropsModalNewTransaction {
    isOpen:boolean;
    onRequestClose: () => void;
}


const NewTransactionModal: React.FC<PropsModalNewTransaction> = ({ isOpen, onRequestClose }) => {
  const [type, setType] = useState('deposit');

    
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
            <Container>
                <h2>Cadastrar Transação</h2>
                <input 
                    placeholder="Titulo" 
                />
                
                <input 
                    type="number"  
                    placeholder="Valor" 
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
                />

                <button type="submit">
                    Cadastrar
                </button>

            </Container>
        </Modal>;
}

export default NewTransactionModal;