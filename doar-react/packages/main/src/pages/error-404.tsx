import Content from "../layouts/content";
import ErrorContainer from "../containers/error-404";
import SEO from "../components/seo";

const ErrorNotFound = () => {
    return (
        <>
            <SEO />
            <Content fullHeight align="center">
                <ErrorContainer />
            </Content>
        </>
    );
};

export default ErrorNotFound;
