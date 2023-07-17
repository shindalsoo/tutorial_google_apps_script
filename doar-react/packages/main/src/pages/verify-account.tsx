import Content from "../layouts/content";
import VerifyContainer from "../containers/verify-account";
import SEO from "../components/seo";

const VerifyAccount = () => {
    return (
        <>
            <SEO />
            <Content fullHeight align="center">
                <VerifyContainer />
            </Content>
        </>
    );
};

export default VerifyAccount;
