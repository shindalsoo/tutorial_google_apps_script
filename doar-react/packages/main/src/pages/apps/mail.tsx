import Wrapper from "../../containers/apps/mail/wrapper";
import Sidebar from "../../containers/apps/mail/sidebar";
import Group from "../../containers/apps/mail/group";
import Main from "../../containers/apps/mail/main";
import SEO from "../../components/seo";

const Mail = () => {
    return (
        <>
            <SEO />
            <Wrapper>
                <Sidebar />
                <Group />
                <Main />
            </Wrapper>
        </>
    );
};

export default Mail;
