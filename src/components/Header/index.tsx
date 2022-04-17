import logoimg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}
export function Header({ onOpenNewTransactionModal }: HeaderProps) {

    return (
        <Container>
            <Content>
                <header>
                    <img src={logoimg} alt="money money logo" />
                    <button type='button' onClick={onOpenNewTransactionModal}>Nova Transação</button>
                </header>

            </Content>
        </Container>
    )
}