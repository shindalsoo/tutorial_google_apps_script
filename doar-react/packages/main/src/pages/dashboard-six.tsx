import SEO from "../components/seo";
import Content from "../layouts/content";
import RowOne from "../containers/dashboard-six/row-one";
import RowTwo from "../containers/dashboard-six/row-two";

const DashboardSix = () => {
    return (
        <>
            <SEO />
            <Content>
                <RowOne />
                <RowTwo />
            </Content>
        </>
    );
};

export default DashboardSix;
