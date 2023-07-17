import Content from "../../layouts/layout-02/content";
import ContentHeader from "../../layouts/layout-02/content-header";
import ContentBody from "../../layouts/layout-02/content-body";
import VerifyContainer from "../../containers/verify-account";
import SEO from "../../components/seo";

const VerifyAccount = () => {
    return (
        <>
            <SEO />
            <Content fullHeight align="center">
                <ContentHeader />
                <ContentBody>
                    <VerifyContainer />
                </ContentBody>
            </Content>
        </>
    );
};

export default VerifyAccount;
