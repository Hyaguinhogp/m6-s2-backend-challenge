import api from "../../services/api"
import { HomeContainer, HomeContent, Transaction, TransactionsTable, TransactionsTitles } from "./styles"

import { AiFillFileAdd } from "react-icons/ai"
import { useEffect, useState } from "react"

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
    const [transactions, setTransactions] = useState<ITransaction[]>([])

    const showFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) {
            return null
        }

        event.preventDefault()
        const reader = new FileReader()

        reader.onload = async (e) => {
            const result = e.target?.result
            console.log(result)
            if (typeof (result) === 'string') {
                api.post("/transactions/", { "data": result })
                    .then((res) => {
                        setTransactions(res.data)
                        console.log(res.data)
                    })
            }
        }

        reader.readAsText(event.target.files[0])
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
                        <AiFillFileAdd className="file_icon"/>
                    </label>
                </form>
                {transactions.length !== 0 && 
                    <TransactionsTable>
                        <TransactionsTitles>
                            <h2 className="medium">CPF</h2>
                            <h2 className="medium">Cartão</h2>
                            <h2 className="medium">Proprietário</h2>
                            <h2 className="large">Loja</h2>
                            <h2 className="medium">Data</h2>
                            <h2 className="medium">Horário</h2>
                            <h2 className="thin">Tipo</h2>
                            <h2 className="medium">Valor</h2>
                        </TransactionsTitles>
                        {transactions.map((transaction) => (
                            <Transaction>
                                <h3 className="medium">{transaction.cpf}</h3>
                                <h3 className="medium">{transaction.card}</h3>
                                <h3 className="medium">{transaction.owner}</h3>
                                <h3 className="large">{transaction.store}</h3>
                                <h3 className="medium">{transaction.date}</h3>
                                <h3 className="medium">{transaction.time}</h3>
                                <h3 className="thin">{transaction.type}</h3>
                                <h3 className="medium">R$ {transaction.value}</h3>
                            </Transaction> 
                        ))}
                    </TransactionsTable>
                }
            </HomeContent>
        </HomeContainer>
    )
}

export default Home