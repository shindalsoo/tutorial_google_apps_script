import { Row } from "@doar/components";
import Content from "../../layouts/layout-02/content";
import ContentHeader from "../../layouts/layout-02/content-header";
import ContentBody from "../../layouts/layout-02/content-body";
import WelcomeArea from "../../containers/dashboard-one/welcome-area";
import RowOne from "../../containers/dashboard-one/row-one";
import RowTwo from "../../containers/dashboard-one/row-two";
import RowThree from "../../containers/dashboard-one/row-three";
import RowFour from "../../containers/dashboard-one/row-four";
import SEO from "../../components/seo";

const DashboardOne = () => {
    return (
        <>
            <SEO />
            <Content>
                <ContentHeader />
                <ContentBody>
                    <WelcomeArea />
                    <Row gutters={10}>
                        <RowOne />
                        <RowTwo />
                        <RowThree />
                        <RowFour />
                    </Row>
                </ContentBody>
            </Content>
        </>
    );
};

export default DashboardOne;
