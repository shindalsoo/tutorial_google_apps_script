import Content from "../layouts/content";
import PasswordContainer from "../containers/forgot-password";
import SEO from "../components/seo";

const ForgotPassword = () => {
    return (
        <>
            <SEO />
            <Content fullHeight align="center">
                <PasswordContainer />
            </Content>
        </>
    );
};

export default ForgotPassword;
