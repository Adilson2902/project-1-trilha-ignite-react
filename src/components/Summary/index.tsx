import { Container } from "./styles";
import incomeImg from '../../assets/entradas.svg';
import outcomImg from '../../assets/saidas.svg';
import totalcomImg from '../../assets/total.svg';
import { useContext } from "react";
import { TransactionContext } from "../../TransactionContext";

import FormatNumber from '../helper/number';

export const Summary: React.FC = () => {
    const { transactions } = useContext(TransactionContext);
    
    const summary = transactions.reduce((a, b) => {
        if(b.type === 'deposit'){
            a.deposits += b.amount;
            a.total += b.amount;
        }else {
            a.withdraws += b.amount;
            a.total -= b.amount;
        }

        return a;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })

    return(
       <Container>
           <div>
               <header>
                   <p>Entradas</p>
                   <img src={incomeImg} alt="entradas"/>
               </header>
               <strong>{FormatNumber(summary.deposits)}</strong>
            </div>
            <div>   
               <header>
                   <p>Saídas</p>
                   <img src={outcomImg} alt="saidas"/>
               </header>
               <strong>- {FormatNumber(summary.withdraws)} </strong>
            </div>  
            <div className="hightlist-background">
               <header>
                   <p>Total</p>
                   <img src={totalcomImg} alt="entradas"/>
               </header>
               <strong>{FormatNumber(summary.total)} </strong>
           </div>
       </Container>
    );
}