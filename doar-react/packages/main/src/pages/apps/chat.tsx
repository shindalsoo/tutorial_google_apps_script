import Wrapper from "../../containers/apps/chat/wrapper";
import NavLeft from "../../containers/apps/chat/nav-left";
import Sidebar from "../../containers/apps/chat/sidebar";
import Main from "../../containers/apps/chat/main";
import SEO from "../../components/seo";

const Chat = () => {
    return (
        <>
            <SEO />
            <Wrapper>
                <NavLeft />
                <Sidebar />
                <Main />
            </Wrapper>
        </>
    );
};

export default Chat;
