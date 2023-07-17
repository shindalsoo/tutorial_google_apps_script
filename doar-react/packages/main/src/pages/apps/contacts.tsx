import Wrapper from "../../containers/apps/contacts/wrapper";
import Sidebar from "../../containers/apps/contacts/sidebar";
import Main from "../../containers/apps/contacts/main";
import SEO from "../../components/seo";

const Contacts = () => {
    return (
        <>
            <SEO />
            <Wrapper>
                <Sidebar />
                <Main />
            </Wrapper>
        </>
    );
};

export default Contacts;
