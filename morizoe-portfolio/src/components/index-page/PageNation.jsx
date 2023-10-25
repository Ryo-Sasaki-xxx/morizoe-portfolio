import styled from "styled-components";

export const PageNation = (props) => {
    const { pageNation, topRef, profileRef, withGritRef, visionRef } = props;
    const onClick = (ref) => {
        ref.current.scrollIntoView();
    }
    return (
        <SDiv>
            <SButton $isActive={pageNation[0]} $bottom={20} onClick={() => onClick(topRef)} />
            <SButton $isActive={pageNation[1]} $bottom={15} onClick={() => onClick(profileRef)} />
            <SButton $isActive={pageNation[2]} $bottom={10} onClick={() => onClick(withGritRef)} />
            <SButton $isActive={pageNation[3]} $bottom={5} onClick={() => onClick(visionRef)} />
        </SDiv>
    );
};

const SDiv = styled.div`
    z-index: 99;
    height: 10rem;
    width: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    bottom: 2rem;
    left: 2rem;
`;

const SButton = styled.button`
    background: #fff;
    width: ${props => props.$isActive ? 2 : 1}rem;
    height: ${props => props.$isActive ? 2 : 1}rem;
    margin-bottom: 1rem;
    border-radius: 50%;
    transition: .3s;
`;