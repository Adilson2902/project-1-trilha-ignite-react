import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import { api } from './services/api';

interface TransactionTableProps{
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string
    createdAt: string;
}

type Transaction = Omit<TransactionTableProps, 'id' | 'createdAt'>;

interface TransactionContextProps {
    transactions: TransactionTableProps[];
    createTransaction: (transaction: Transaction) => Promise<void>;
}

interface TransactionProviderProps{
    children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionContextProps);

export const TransactionProvider: React.FC<TransactionProviderProps> = ({ children }) =>{
    const [transactions, setTransactions] = useState<TransactionTableProps[]>([]);

    useEffect(() => {
        api.get('transactions')
        .then(res => setTransactions(res.data.transactions))
    }, [])

    const createTransaction = useCallback(async (transactionInput: Transaction) => {
        const resp = await api.post('/transactions',{
            ...transactionInput,
            createdAt: new Date()});

        const { transaction } = resp.data;

        setTransactions([...transactions, transaction]);
    }, [transactions])

    return (
        <TransactionContext.Provider value={{transactions,createTransaction}}>
            { children }
        </TransactionContext.Provider>
    )
}