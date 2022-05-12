import { Container } from "./styles";
import incomeImg from '../../assets/entradas.svg';
import outcomImg from '../../assets/saidas.svg';
import totalcomImg from '../../assets/total.svg';
import { useContext } from "react";
import { TransactionContext } from "../../TransactionContext";

export const Summary: React.FC = () => {
    const { transactions } = useContext(TransactionContext);

    console.log(transactions);

    return(
       <Container>
           <div>
               <header>
                   <p>Entradas</p>
                   <img src={incomeImg} alt="entradas"/>
               </header>
               <strong>R$1000,00 </strong>
            </div>
            <div>   
               <header>
                   <p>Saídas</p>
                   <img src={outcomImg} alt="saidas"/>
               </header>
               <strong>- R$500,00 </strong>
            </div>  
            <div className="hightlist-background">
               <header>
                   <p>Total</p>
                   <img src={totalcomImg} alt="entradas"/>
               </header>
               <strong>R$500,00 </strong>
           </div>
       </Container>
    );
}