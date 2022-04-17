import Modal from 'react-modal'
import { Container, TransactionButton, RadioBox } from './styles'
import closeImg from '../../assets/small.svg'
import { FormEvent, useState } from 'react'
import { useTransactions } from '../../hooks/transactionsProvider'

interface newTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: newTransactionModalProps) {

    const { createTransaction } = useTransactions()

    const [type, setType] = useState('income')
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(Number)
    const [category, setCategory] = useState('')

    async function handleNewTransactionSubmit(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type
        })

        setType('income')
        setTitle('')
        setAmount(Number)
        setCategory('')

        onRequestClose()
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <button onClick={onRequestClose} className='react-modal-close-button'>
                <img src={closeImg} alt="close" />
            </button>
            <Container onSubmit={handleNewTransactionSubmit}>
                <h2>Cadastrar Transação</h2>

                <input
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input type="number" min='0' name="Valor" placeholder='100,00'
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionButton>
                    <RadioBox
                        type='button'
                        isActive={type === 'income'}
                        onClick={() => { setType('income') }}
                        activeColor='green'
                    >
                        <img src={closeImg} alt="income" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type='button'
                        isActive={type === 'outcome'}
                        onClick={() => { setType('outcome') }}
                        activeColor='red'
                    >
                        <img src={closeImg} alt="outcome" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionButton>

                <input placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>

            </Container>

        </Modal>
    )
}