import styled from "styled-components";

import { Title } from "../global/Title";
import { SubTitle } from "../global/SubTitle";
import { Planet } from "./Planet";

import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";
import { forwardRef } from "react";

export const Top = forwardRef((props, topRef) => {
    const { setPageNation } = props;
    const { ref, inView } = useInView({
        threshold: 0.5,
    });
    useEffect(() => {
        setPageNation((prev) => {
            const current = [...prev];
            current[0] = !prev[0]
            return (current);
        })
    }, [inView])

    return (
        <SSection ref={ref}>
            <Planet />
            <SDiv ref={topRef}>
                <Title title="Ryo Sasaki" width={22} beforeHeight={12.5} />
                <SubTitle subTitle="economic student engineer" width={28} />
            </SDiv>
        </SSection>
    );
});

const SSection = styled.section`
    scroll-snap-align: start;
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