import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

export const Header: React.FC =  () => {
 return (
     <Container>
        <Content>
            <img src={logoImg} alt="dt money"/>
            <button type="button">
                Nova transação
            </button>
        </Content>
     </Container>
 )
}