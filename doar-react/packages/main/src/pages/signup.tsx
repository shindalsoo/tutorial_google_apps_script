import Content from "../layouts/content";
import AuthContainer from "../containers/signup";
import SEO from "../components/seo";

const SignUp = () => {
    return (
        <>
            <SEO />
            <Content fullHeight>
                <AuthContainer />
            </Content>
        </>
    );
};

export default SignUp;
