import styled from "styled-components";

export const SubTitle = (props) => {
    const { subTitle, width } = props;
    return (
        <SP $width={width}>
            {subTitle}
        </SP>
    );
};

const SP = styled.p`
    font-size: 3rem;
    font-weight: 500;
    font-family: 'Montserrat Alternates', sans-serif;
    color: #fff;
    position: relative;
    width: ${props => props.$width}rem;
    margin-top: 2rem;
    &::before {	
        content: "";
        width: 4.5rem;
        height: 11px;
        position: absolute;
        top: -1rem;
        left: 0;
        background: linear-gradient(270deg, #95D61C -0.05%, #EFFA8F 99.94%);
        box-sizing: border-box;
    }
`;
