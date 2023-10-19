import { Outlet } from "react-router-dom";

import { Header } from "../global/Header";

export const DetailPages = () => {
    return (
        <>
            <Header theme={"dark"} />
            <Outlet />
        </>
    );
};