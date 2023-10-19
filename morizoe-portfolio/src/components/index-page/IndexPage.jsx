import { Outlet } from "react-router-dom";

import { Header } from "../global/Header";

export const IndexPage = () => {
    return (
        <>
            <Header theme={"white"} />
            <Outlet />
        </>
    );
};
