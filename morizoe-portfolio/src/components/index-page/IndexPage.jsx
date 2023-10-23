import { Header } from "../global/Header";
import { Profile } from "./Profile";
import { Top } from "./Top";

export const IndexPage = () => {
    return (
        <>
            <Header theme={"white"} />
            <Top />
            <Profile />
        </>
    );
};
