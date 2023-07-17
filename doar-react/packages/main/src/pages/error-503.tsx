import Content from "../layouts/content";
import ErrorContainer from "../containers/error-503";
import SEO from "../components/seo";

const Error503 = () => {
    return (
        <>
            <SEO />
            <Content fullHeight align="center">
                <ErrorContainer />
            </Content>
        </>
    );
};

export default Error503;
