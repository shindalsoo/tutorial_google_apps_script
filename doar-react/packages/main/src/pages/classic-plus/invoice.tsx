import Content from "../../layouts/layout-02/content";
import ContentHeader from "../../layouts/layout-02/content-header";
import ContentBody from "../../layouts/layout-02/content-body";
import PageHeader from "../../containers/invoice/page-header";
import RowOne from "../../containers/invoice/row-one";
import RowTwo from "../../containers/invoice/row-two";
import RowThree from "../../containers/invoice/row-three";
import SEO from "../../components/seo";

const HelpCenter = () => {
    return (
        <>
            <SEO />
            <Content>
                <ContentHeader />
                <ContentBody>
                    <PageHeader pb="40px" />
                    <RowOne />
                    <RowTwo />
                    <RowThree />
                </ContentBody>
            </Content>
        </>
    );
};

export default HelpCenter;
