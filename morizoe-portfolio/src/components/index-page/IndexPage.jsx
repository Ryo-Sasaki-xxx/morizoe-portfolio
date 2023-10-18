import { Outlet } from "react-router-dom";

import { Header } from "../global/header/Header";

export const IndexPage = () => {
    return (
        <>
            <Header theme={"white"} />
            <Outlet />
        </>
    );
};
