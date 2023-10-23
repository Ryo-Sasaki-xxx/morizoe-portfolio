import styled from "styled-components";

import { Title } from "../global/Title";
import { SubTitle } from "../global/SubTitle";
import { SeeMore } from "./SeeMore";
import { Rectangle } from "./Rectangle";


export const Profile = () => {
    return (
        <SSection>
            <Rectangle src="baby.png" />
            <SDiv>
                <Title title="Profile" width={22} beforeHeight={5} />
                <SubTitle subTitle="who I am what I can what I've done" width={24} />
                <SeeMore url="/profile" />
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
    margin-right: 4rem;
`;