import { useTransactions } from '../../hooks/transactionsProvider'
import { Container } from './styles'



export function TransactionsTable() {

    const { transactions } = useTransactions()

    console.log('transaction table: ', transactions)
    return (
        <Container>
            <table></table>
            <table>
                <thead>
                    <tr>
                        <td>Título</td>
                        <td>Valor</td>
                        <td>Categoria</td>
                        <td>Data</td>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt)
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </Container>
    )
}