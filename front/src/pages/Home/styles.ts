import styled from "styled-components";
import { DefaultContent } from "../../styles/global";

export const HomeContent = styled(DefaultContent)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: white;

    form {
        display: flex;
        flex-direction: column;
    }
`