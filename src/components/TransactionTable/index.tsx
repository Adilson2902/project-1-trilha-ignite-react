import React, { useContext } from 'react';
import { TransactionContext } from '../../TransactionContext';
import { Container } from './styles';

import FormatNumber from '../helper/number';
import FormatData from '../helper/data';
 
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
                        <td className={i.type}>{FormatNumber(i.amount)}</td>
                        <td>{i.category}</td>
                        <td>{FormatData(new Date(i.createdAt))}</td>
                    </tr>
                    )
                })}
            </tbody>
            
        </table>
    </Container>
  );
}

