import styled from "styled-components";

import { Link } from "react-router-dom";

export const SeeMore = (props) => {
    const url = props.url;
    return (
        <SButton>
            <SA to={url}>
                see more
            </SA>
        </SButton>
    );
};

const SA = styled(Link)`
    display:block;
    width: fit-content;
    color: #333;
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 2rem;
    font-weight: 700;
`;

const SButton = styled.button`
    display:flex;
    justify-content: center;
    align-items:center;
    margin-top: 1.5rem;
    width: 12rem;
    height: 3rem;
    border-radius: 0.75rem;
    background: linear-gradient(90deg, #A0DA29 0%, #D8E184 100%);
    @media (hover: hover) {
        &:hover {
            transition: .4s;
            transform: translateY(4px);
        }
    }
    @media (hover: none) {
        &:active {
            transition: .2s;
            transform: translateY(4px);
        }
    }
`;