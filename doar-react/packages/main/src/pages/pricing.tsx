import Content from "../layouts/content";
import PricingContainer from "../containers/pricing";
import SEO from "../components/seo";

const Pricing = () => {
    return (
        <>
            <SEO />
            <Content fullHeight align="center">
                <PricingContainer />
            </Content>
        </>
    );
};

export default Pricing;
