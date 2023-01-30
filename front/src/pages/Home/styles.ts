import styled from "styled-components";
import { DefaultContainer, DefaultContent } from "../../styles/global";

export const HomeContainer = styled(DefaultContainer)`
    padding-top: 10vh;
`

export const HomeContent = styled(DefaultContent)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100vh;

    label {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        height: 8vh;
        margin-bottom: 50px;
        font-size: 30px;
        cursor: pointer;
    }

    .file_icon {
        font-size: 50px;
    }

    input {
        display: none;
    }
`

export const TransactionsTable = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 0px;
    border: 3px solid black;
    border-radius: 20px;

    .large { width: 20%; }
    .medium { width: 12%; }
    .thin { width: 8%; }
`

export const TransactionsTitles = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;

    h2 {
        display: flex;
        justify-content: center;
        width: 12%;
        font-weight: 700;
    }
`

export const Transaction = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 15px;

    h3 {
        display: flex;
        justify-content: center;
        width: 12%;
    }
`