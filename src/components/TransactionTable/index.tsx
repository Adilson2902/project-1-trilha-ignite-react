import React, { useContext } from 'react';
import { TransactionContext } from '../../TransactionContext';
import { Container } from './styles';

export const TransactionTable: React.FC = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <Container>
        <table>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>    
            <tbody>
                { transactions.map((i) => {
                    return(
                    <tr key={i.id}>
                        <td>{i.title}</td>
                        <td className={i.type}>{new Intl.NumberFormat('pt-BR',{
                            style: 'currency',
                            currency: 'BRL',
                        }).format(i.amount)}</td>
                        <td>{i.category}</td>
                        <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(i.createdAt))}</td>
                    </tr>
                    )
                })}
            </tbody>
            
        </table>
    </Container>
  );
}

