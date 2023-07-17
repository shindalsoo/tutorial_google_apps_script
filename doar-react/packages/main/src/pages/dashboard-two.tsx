import { Row } from "@doar/components";
import Content from "../layouts/content";
import WelcomeArea from "../containers/dashboard-two/welcome-area";
import RowOne from "../containers/dashboard-two/row-one";
import RowTwo from "../containers/dashboard-two/row-two";
import RowThree from "../containers/dashboard-two/row-three";
import RowFour from "../containers/dashboard-two/row-four";
import RowFive from "../containers/dashboard-two/row-five";
import SEO from "../components/seo";

const DashboardTwo = () => {
    return (
        <>
            <SEO />
            <Content>
                <WelcomeArea />
                <Row gutters={10}>
                    <RowOne />
                    <RowTwo />
                    <RowThree />
                    <RowFour />
                    <RowFive />
                </Row>
            </Content>
        </>
    );
};

export default DashboardTwo;
