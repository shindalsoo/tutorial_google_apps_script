import Content from "../layouts/content";
import ErrorContainer from "../containers/error-505";
import SEO from "../components/seo";

const Error505 = () => {
    return (
        <>
            <SEO />
            <Content fullHeight align="center">
                <ErrorContainer />
            </Content>
        </>
    );
};

export default Error505;
