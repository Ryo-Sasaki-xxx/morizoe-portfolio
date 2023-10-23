import styled from "styled-components";

export const Rectangle = (props) => {
    const src = props.src;

    return (
        <>
            <SRadius1>
                <SRadius2>
                    <SSmallRadius1 />
                    <SSmallRadius2 />
                    <SSmallRadius3 />
                    <SSmallRadius4 />
                    <SRadius3>
                        <SRadius4>
                            <SImg src={src} />
                        </SRadius4>
                    </SRadius3>
                </SRadius2>
            </SRadius1>
        </>
    );
};

const SRadius1 = styled.div`
    position: absolute;
    top: 5rem;
    left: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50rem;
    height: 50rem;
    border-radius: 10%;
    background-color: #3C3C3C;
    z-index: 94;
`;


const SRadius2 = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44rem;
    height: 44rem;
    border-radius: 10%;
    background-color: #4D4D4D;
    z-index: 95;
`;

const SRadius3 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10%;
    width: 38rem;
    height: 38rem;
    background-color: #595959;
    z-index: 96;
`;

const SRadius4 = styled.div`
    width: 32rem;
    height: 32rem;
    border-radius: 10%;
    z-index: 97;
    display:flex;
    justify-content: center;
    align-items: center;
`;

const SSmallRadius1 = styled.div`
    position:absolute;
    top: -3%;
    left: -3%;
    width: 0.5rem; 
    height: 0.5rem;
    border-radius: 50%;
    background-color: #fff;
    z-index: 97;
`;

const SSmallRadius2 = styled.div`
    position:absolute;
    top: -3%;
    right: -3%;
    width: 0.5rem; 
    height: 0.5rem;
    border-radius: 50%;
    background-color: #fff;
    z-index: 97;
`;

const SSmallRadius3 = styled.div`
    position:absolute;
    bottom: -3%;
    left: -3%;
    width: 0.5rem; 
    height: 0.5rem;
    border-radius: 50%;
    background-color: #fff;
    z-index: 97;
`;

const SSmallRadius4 = styled.div`
    position:absolute;
    bottom: -3%;
    right: -3%;
    width: 0.5rem; 
    height: 0.5rem;
    border-radius: 50%;
    background-color: #fff;
    z-index: 97;
`;

const SImg = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 10%;
`;