import Content from "../layouts/content";
import AuthContainer from "../containers/signin";
import SEO from "../components/seo";

const SignIn = () => {
    return (
        <>
            <SEO />
            <Content fullHeight>
                <AuthContainer />
            </Content>
        </>
    );
};

export default SignIn;
