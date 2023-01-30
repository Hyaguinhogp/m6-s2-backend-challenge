import api from "../../services/api"
import { DefaultContainer } from "../../styles/global"
import { HomeContent } from "./styles"

const Home = () => {
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
                        console.log(res.data)
                    })
            }
        }

        reader.readAsText(event.target.files[0])
    }

    return (
        <DefaultContainer>
            <HomeContent>
                <form action="submit">
                    <label htmlFor="file">Escolha o arquivo CNAB:</label>
                    <input
                        name="file"
                        type="file"
                        onChange={(event) => showFile(event)}
                    />
                </form>
            </HomeContent>
        </DefaultContainer>
    )
}

export default Home