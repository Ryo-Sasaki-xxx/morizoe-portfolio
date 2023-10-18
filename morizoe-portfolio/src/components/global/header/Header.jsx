import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = (props) => {
    const [isActiveMenue, setIsActiveMenue] = useState(false);
    const theme = props.theme;
    let srcInstagram;
    let srcX;
    let color;
    if (theme === "white") {
        srcInstagram = "/instagram-white.svg";
        srcX = "/x-white.svg";
        color = "#fff"
    } else {
        srcInstagram = "/instagram-dark.svg";
        srcX = "/x-dark.svg";
        color = "#333"
    }

    return (
        <SHeader $backgroundColor={"red"}>
            <SH1><SA1 to="/" $color={color}>Morizoe's Portfolio</SA1></SH1>
            <SDiv>
                <SA2 href="https://instagram.com/" target="_blank"><SImg src={srcInstagram} alt="isntagramリンク" /></SA2>
                <SA2 href="https://x.com/" target="_blank"><SImg src={srcX} alt="Xリンク" /></SA2>
                <SButton onClick={() => setIsActiveMenue((prev) => !prev)} >
                    <SSpan1 $isActiveMenue={isActiveMenue} $backgroundColor={color} />
                    <SSpan2 $isActiveMenue={isActiveMenue} $backgroundColor={color} />
                    <SSpan3 $isActiveMenue={isActiveMenue} $backgroundColor={color} />
                </SButton>
            </SDiv>
        </SHeader>
    );
};

const SHeader = styled.header`
    width: 100%;
    height: 4rem;
    padding: 1rem 2rem;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
`;

const SH1 = styled.h1`
    font-size: 1.5rem;
    font-weight: 500;
    width: fit-content;
`;

const SA1 = styled(Link)`
    display:block;
    height: 100%;
    width:100%;
    color: ${props => props.$color};
    font-family: 'Montserrat Alternates', sans-serif;
`;

const SDiv = styled.div`
    display: flex;
`;

const SA2 = styled.a`
    display:block;
    margin: 0 1rem;
    width: 2rem;
    height: 2rem;
`;

const SImg = styled.img`
    vertical-align: middle;
    width: 2rem;
    @media (hover: hover) {
        &:hover {
            opacity: 0.5;
        }
    }
    @media (hover: none) {
        &:active {
            opacity: 0.5;
        }
    }
`;

const SButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 3rem;
    width: 2.5rem;
    height: 2rem;
    @media (hover: hover) {
        &:hover {
            opacity: 0.5;
        }
    }
    @media (hover: none) {
        &:active {
            opacity: 0.5;
        }
    }
`;

const SSpan1 = styled.span`
    content: '';
    display: block;
    height: 2px;
    width: 2.5rem;
    border-radius: 3px;
    background-color: ${props => props.$backgroundColor};
    transition: .3s;
    ${props => props.$isActiveMenue && "transform: translate(0, 0.4rem) rotate(-45deg);"}
    // ${props => props.$isActiveMenue && "width: 2.5rem;"}
`;

const SSpan2 = styled.span`
    content: '';
    display: block;
    height: 2px;
    width: 2.5rem;
    border-radius: 3px;
    background-color:${props => props.$backgroundColor};
    transition: .3s;
    ${props => props.$isActiveMenue && "opacity: 0;"}
`;

const SSpan3 = styled.span`
    content: '';
    display: block;
    height: 2px;
    width: 2.5rem;
    border-radius: 3px;
    background-color: ${props => props.$backgroundColor};
    transition: .3s;
    ${props => props.$isActiveMenue && "transform: translate(0, -0.6rem) rotate(45deg);"}
    // ${props => props.$isActiveMenue && "width: 2.5rem;"}
`;