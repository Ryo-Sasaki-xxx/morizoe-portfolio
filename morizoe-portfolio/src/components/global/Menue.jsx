import styled from "styled-components";

import { Link } from "react-router-dom";

export const Menu = (props) => {
    const { isActiveMenue, setIsActiveMenue, theme } = props;
    let color;
    let background;
    if (theme === "white") {
        color = "#fff";
        background = "linear-gradient(0deg, #FFF 0%, #999 41.15%, #333 100%)"
    } else {
        color = "#333";
        background = "linear-gradient(0deg, #999 0%, #D8D8D8 40.1%, #FFF 100%)"
    }
    return (
        <SNav $isActiveMenue={isActiveMenue} $background={background}>
            <SUl>
                <Sli>
                    <SA $color={color} to="" onClick={() => setIsActiveMenue(false)}>
                        Home
                    </SA>

                </Sli>
                <Sli>
                    <SA $color={color} to="/profile" onClick={() => setIsActiveMenue(false)}>
                        Profile
                    </SA>

                </Sli>
                <Sli>
                    <SA $color={color} to="/with-grit" onClick={() => setIsActiveMenue(false)}>
                        with GRIT
                    </SA>

                </Sli>
                <Sli>
                    <SA $color={color} to="/vision" onClick={() => setIsActiveMenue(false)}>
                        Vision
                    </SA>

                </Sli>
            </SUl>
        </SNav >
    );
};

const SNav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 98;
    height: 100vh;
    width: 100%;
    background: ${props => props.$background};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 0;
    ${props => props.$isActiveMenue ? "pointer-events: auto; opacity: 1;" : "pointer-events: none; opacity: 0;"}
    transition: opacity .3s linear;
`;

const SUl = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    width: 100%;
`;

const Sli = styled.li`
    mrgin-bottom: 1.5rem;
`;

const SA = styled(Link)`
    width: 100%;
    font-size: 6rem;
    font-family: 'Montserrat Alternates', sans-serif;
    color: ${props => props.$color};
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
