import Content from "../../layouts/layout-02/content";
import ContentHeader from "../../layouts/layout-02/content-header";
import ContentBody from "../../layouts/layout-02/content-body";
import PricingContainer from "../../containers/pricing";
import SEO from "../../components/seo";

const Pricing = () => {
    return (
        <>
            <SEO />
            <Content fullHeight align="center">
                <ContentHeader />
                <ContentBody>
                    <PricingContainer />
                </ContentBody>
            </Content>
        </>
    );
};

export default Pricing;
