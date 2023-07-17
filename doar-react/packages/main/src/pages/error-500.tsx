import Content from "../layouts/content";
import ErrorContainer from "../containers/error-500";
import SEO from "../components/seo";

const Error500 = () => {
    return (
        <>
            <SEO />
            <Content fullHeight align="center">
                <ErrorContainer />
            </Content>
        </>
    );
};

export default Error500;
