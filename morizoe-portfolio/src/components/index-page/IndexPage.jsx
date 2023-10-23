import { Header } from "../global/Header";
import { Profile } from "./Profile";
import { Top } from "./Top";
import { Vision } from "./Vision";
import { WithGRIT } from "./WithGRIT";

export const IndexPage = () => {
    return (
        <>
            <Header theme={"white"} />
            <Top />
            <Profile />
            <WithGRIT />
            <Vision />
        </>
    );
};
