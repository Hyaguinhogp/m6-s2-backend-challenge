import api from "../../services/api"
import { HomeContainer, HomeContent, Transaction, TransactionsTable, TransactionsTitles } from "./styles"

import { useState } from "react"
import { AiFillFileAdd } from "react-icons/ai"

interface IGetTransactionsResponse {
    store: string,
    total: number,
    transactions: ITransaction[]
}

interface ITransaction {
    cpf: string
    card: string
    owner: string
    store: string
    date: string
    time: string
    type: string
    value: string
}

const Home = () => {
    const [transactions, setTransactions] = useState<IGetTransactionsResponse[]>([])

    const formatter = new Intl.NumberFormat('en-Us', {
        style: 'currency',
        currency: 'BRL'
    })

    const refreshTransactions = () => {
        api.get("/transactions/")
            .then((res) => {
                setTransactions(res.data)
            })
    }

    const showFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) {
            return null
        }

        event.preventDefault()
        const reader = new FileReader()

        reader.onload = async (e) => {
            const result = e.target?.result
            if (typeof (result) === 'string') {
                api.post("/transactions/", { "data": result })
                    .then((res) => {
                        refreshTransactions()
                    })
            }
        }

        reader.readAsText(event.target.files[0])
    }

    const formatType = (type: string) => {
        const typeInNumber = parseInt(type)
        const types = [
            "Débito",
            "Boleto",
            "Financiamento",
            "Crédito",
            "Recebimento Empréstimo",
            "Vendas",
            "Recebimento TED",
            "Recebimento DOC",
            "Aluguel",
        ]

        return types[typeInNumber - 1]
    }

    const formatValue = (value: string, type: string) => {
        const typeInNumber = parseInt(type)
        const positiveTransactions = [1, 4, 5, 6, 7, 8]

        if (positiveTransactions.includes(typeInNumber)) {
            return (
                <h3 className="medium positive">+ {formatter.format(parseFloat(value))}</h3>
            )
        }
        return (
            <h3 className="medium negative">- {formatter.format(parseFloat(value))}</h3>
        )
    }

    const formatTotal = (total: number) => {
        if (total < 0) {
            return (
                <h1 className="total negative">Total: - {formatter.format(total * -1)}</h1>
            )
        }
        return (
            <h1 className="total positive">Total: + {formatter.format(total)}</h1>
        )
    }

    return (
        <HomeContainer>
            <HomeContent>
                <form action="submit">
                    <label htmlFor="cnab">
                        Escolha o arquivo CNAB:
                        <input
                            id="cnab"
                            type="file"
                            onChange={(event) => showFile(event)}
                        />
                        <AiFillFileAdd className="file_icon" />
                    </label>
                </form>
                {transactions.length !== 0 &&
                    transactions.map((transactionList) => (
                        <TransactionsTable>
                            <h1>{transactionList.store}</h1>
                            <TransactionsTitles>
                                <h2 className="medium">CPF</h2>
                                <h2 className="medium">Cartão</h2>
                                <h2 className="medium">Proprietário</h2>
                                <h2 className="medium">Data</h2>
                                <h2 className="medium">Horário</h2>
                                <h2 className="large">Tipo</h2>
                                <h2 className="medium">Valor</h2>
                            </TransactionsTitles>
                            {transactionList.transactions.map((transaction) => (
                                <Transaction>
                                    <h3 className="medium">{transaction.cpf}</h3>
                                    <h3 className="medium">{transaction.card}</h3>
                                    <h3 className="medium">{transaction.owner}</h3>
                                    <h3 className="medium">{transaction.date}</h3>
                                    <h3 className="medium">{transaction.time}</h3>
                                    <h3 className="large">{formatType(transaction.type)}</h3>
                                    {formatValue(transaction.value, transaction.type)}
                                </Transaction>
                            ))}
                            {formatTotal(transactionList.total)}
                        </TransactionsTable>
                    ))
                }
            </HomeContent>
        </HomeContainer>
    )
}

export default Home