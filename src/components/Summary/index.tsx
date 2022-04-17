import img from '../../assets/logo.svg'
import { useTransactions } from '../../hooks/transactionsProvider';

import { Container } from "./styles";

export function Summary() {

    const { transactions } = useTransactions()

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'income') {
            acc.income += transaction.amount;
            acc.total += transaction.amount;
        }
        else {
            acc.outcome += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;

    }, {
        income: 0,
        outcome: 0,
        total: 0
    })

    return (
        <Container>
            <div>
                <header>
                    <p>entrada</p>
                    <img src={img} alt="entrada" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.income)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saída</p>
                    <img src={img} alt="saída" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.outcome)}</strong>
            </div>
            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <img src={img} alt="total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}</strong>
            </div>
        </Container >
    )
}