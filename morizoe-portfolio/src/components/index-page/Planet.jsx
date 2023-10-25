import styled from "styled-components";

export const Planet = () => {
    return (
        <>
            <SRadius1 />
            <SRadius2 />
            <SRadius3 />
            <SRadius4 >
                <SP>Portfolio</SP>
            </SRadius4>

            <SRoutateDiv $duration={90} $rotateIni={0}>
                <SSmallRadius $top={97} $left={0} />
                <SSmallRadius $top={87} $left={100} />
            </SRoutateDiv>

            <SRoutateDiv $duration={90} $rotateIni={45}>
                <SImg src="/alian.svg" $top={90} $left={50} $duration={90} />
            </SRoutateDiv>

            <SRoutateDiv $duration={45} $rotateIni={40}>
                <SImg src="/jet.svg" $top={66} $left={50} $duration={45} $rotateIni={40} />
            </SRoutateDiv>

            <SRoutateDiv $duration={90} $rotateIni={90}>
                <SSmallRadius $top={94} $left={100} />
                <SSmallRadius $top={88} $left={20} />
            </SRoutateDiv>

            <SRoutateDiv $duration={90} $rotateIni={135}>
                <SSmallRadius $top={96} $left={90} />
                <SSmallRadius $top={86} $left={50} />
            </SRoutateDiv>


            <SRoutateDiv $duration={45} $rotateIni={170}>
                <SImg src="/jet.svg" $top={66} $left={50} $duration={45} $rotateIni={170} />
            </SRoutateDiv>

            <SRoutateDiv $duration={90} $rotateIni={180}>
                <SImg src="/alian.svg" $top={90} $left={50} $duration={90} />
            </SRoutateDiv>

            <SRoutateDiv $duration={90} $rotateIni={225}>
                <SSmallRadius $top={97} $left={0} />
                <SSmallRadius $top={83} $left={100} />
            </SRoutateDiv>

            <SRoutateDiv $duration={90} $rotateIni={270}>
                <SImg src="/alian.svg" $top={90} $left={50} $duration={90} />
            </SRoutateDiv>

            <SRoutateDiv $duration={90} $rotateIni={315}>
                <SSmallRadius $top={97} $left={0} />
                <SSmallRadius $top={83} $left={100} />
            </SRoutateDiv>

            <SRoutateDiv $duration={45} $rotateIni={330}>
                <SImg src="/jet.svg" $top={66} $left={50} $duration={45} $rotateIni={330} />
            </SRoutateDiv>

        </>
    );
};

const SRadius1 = styled.div`
    position: absolute;
    top: 1rem;
    left: 6rem;
    border-radius: 50%;
    width: 55rem;
    height: 55rem;
    background-color: #3C3C3C;
    z-index: 94;
`;


const SRadius2 = styled.div`
    position: absolute;
    top: 6rem;
    left: 11rem;
    border-radius: 50%;
    width: 45rem;
    height: 45rem;
    background-color: #4D4D4D;
    z-index: 95;
`;

const SRadius3 = styled.div`
    position: absolute;
    top: 11rem;
    left: 16rem;
    border-radius: 50%;
    width: 35rem;
    height: 35rem;
    background-color: #595959;
    z-index: 96;
`;

const SRadius4 = styled.div`
    position: absolute;
    top: 15rem;
    left: 20rem;
    border-radius: 50%;
    width: 27rem;
    height: 27rem;
    background: linear-gradient(214deg, #F2FB92 14.65%, #8CD211 85.09%);
    z-index: 97;
    display:flex;
    justify-content: center;
    align-items: center;
`;

const SP = styled.p`
    font-size: 4rem;
    font-weight: 700;
    font-family: 'Montserrat Alternates', sans-serif;
    color: #fff;
    text-shadow: 0px 8px 10px rgba(0, 0, 0, 0.43);
`;

const SRoutateDiv = styled.div`
    position: absolute;
    top: 28.5rem;
    left: 33rem;
    height: 27rem;
    width: 5rem;
    z-index: 97;
    transform-origin: 0 0;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration:  ${props => props.$duration}s;
    animation-name: rotate-item;
    rotate:${props => props.$rotateIni}deg;
    @keyframes rotate-item {
        0%   { transform: rotate(${props => props.$rotateIni}deg); }
        100% { transform: rotate(${props => props.$rotateIni + 360}deg); }
    }
    // background: #fff;
`;

const SSmallRadius = styled.div`
    position:relative;
    top: ${props => props.$top}%;
    left: ${props => props.$left}%;
    width: 1em; 
    height: 1em;
    border-radius: 50%;
    background-color: #fff;
    z-index: 97;
`;

const SImg = styled.img`
    position:relative;
    top: ${props => props.$top}%;
    left: ${props => props.$left}%;
    height: 3rem;
    width: 3rem;
    rotate:${props => props.$rotateIni}deg;
    transform-origin: 0% 0%;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: ${props => props.$duration}s; 
    animation-direction: reverse;
    animation-name: rotate-interior;
    @keyframes rotate-interior {
        0%   { transform: rotate(0deg) translate(-50%, -50%); }
        100% { transform: rotate(360deg) translate(-50%, -50%); } 
    }
`;