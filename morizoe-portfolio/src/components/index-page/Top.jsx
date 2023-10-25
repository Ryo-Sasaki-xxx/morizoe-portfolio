import styled from "styled-components";

import { Title } from "../global/Title";
import { SubTitle } from "../global/SubTitle";
import { Planet } from "./Planet";

export const Top = () => {
    return (
        <SSection>
            <Planet />
            <SDiv>
                <Title title="Ryo Sasaki" width={22} />
                <SubTitle subTitle="economic student engineer" width={28} />
            </SDiv>
        </SSection>
    );
};

const SSection = styled.section`
    position: relative;
    height: 100vh;
    padding: 0rem 8rem 5rem;
    display: flex;
    flex-direction: column;
    background-color: #333;
    align-items: flex-end;
    justify-content: center;
`;

const SDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: fit-content;
    z-index: 97;
    margin-top: 6rem;
`;