import styled from "styled-components";

export const Title = (props) => {
    const { title, width } = props;
    return (

        <SH2 $width={width}>
            {title}
        </SH2>

    );
};

const SH2 = styled.h2`
    font-size: 6rem;
    font-weight: 500;
    font-family: 'Montserrat Alternates', sans-serif;
    color: #fff;
    position: relative;
    width: ${props => props.$width}rem;
    padding-left: 1.5rem;
    &::before {	
        content: "";
        width: 11px;
        height: 12.5rem;
        position: absolute;
        top: 1.5rem;
        left: 0rem;
        background: linear-gradient(270deg, #95D61C -0.05%, #EFFA8F 99.94%);
        box-sizing: border-box;
    }
`;