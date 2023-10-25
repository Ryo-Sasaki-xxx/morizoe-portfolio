import styled from "styled-components";

import { Title } from "../global/Title";
import { SubTitle } from "../global/SubTitle";
import { SeeMore } from "./SeeMore";
import { Rectangle } from "./Rectangle";

import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";
import { forwardRef } from "react";

export const Profile = forwardRef((props, profileRef) => {
    const { setPageNation } = props;
    const { ref, inView } = useInView({
        threshold: 0.5,
    });
    useEffect(() => {
        setPageNation((prev) => {
            const current = [...prev];
            current[1] = !prev[1]
            return (current);
        })
    }, [inView])
    return (
        <SSection ref={ref} >
            <Rectangle src="baby.png" />
            <SDiv ref={profileRef}>
                <Title title="Profile" width={33} beforeHeight={5} />
                <SubTitle subTitle="who I am what I can what I've done" width={24} />
                <SeeMore url="/profile" />
            </SDiv>
        </SSection>
    );
});

const SSection = styled.section`
    scroll-snap-align: start;
    position: relative;
    height: 100vh;
    padding: 0rem 2rem 5rem;
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