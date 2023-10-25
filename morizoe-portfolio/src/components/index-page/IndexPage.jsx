import styled from "styled-components";

import { Header } from "../global/Header";
import { Profile } from "./Profile";
import { Top } from "./Top";
import { Vision } from "./Vision";
import { WithGRIT } from "./WithGRIT";
import { PageNation } from "./PageNation";

import { useState } from "react";
import { useRef } from "react";

export const IndexPage = () => {
    const [pageNation, setPageNation] = useState([false, false, false, false]);
    const topRef = useRef(null);
    const profileRef = useRef(null);
    const withGritRef = useRef(null);
    const visionRef = useRef(null);
    return (
        <SMain>
            <Header theme={"white"} />
            <PageNation pageNation={pageNation} topRef={topRef} profileRef={profileRef} withGritRef={withGritRef} visionRef={visionRef} />
            <Top setPageNation={setPageNation} ref={topRef} />
            <Profile setPageNation={setPageNation} ref={profileRef} />
            <WithGRIT setPageNation={setPageNation} ref={withGritRef} />
            <Vision setPageNation={setPageNation} ref={visionRef} />
        </SMain>
    );
};

const SMain = styled.main`
    overflow: auto;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    width: 100%;
    height: 100vh;
`;