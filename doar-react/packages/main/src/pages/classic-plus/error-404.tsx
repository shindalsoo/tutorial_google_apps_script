import Content from "../../layouts/layout-02/content";
import ContentHeader from "../../layouts/layout-02/content-header";
import ContentBody from "../../layouts/layout-02/content-body";
import ErrorContainer from "../../containers/error-404";
import SEO from "../../components/seo";

const ErrorNotFound = () => {
    return (
        <>
            <SEO />
            <Content fullHeight align="center">
                <ContentHeader />
                <ContentBody>
                    <ErrorContainer />
                </ContentBody>
            </Content>
        </>
    );
};

export default ErrorNotFound;
