import { Row } from "@doar/components";
import Content from "../layouts/content";
import PageHeader from "../components/page-header";
import MainContent from "../containers/events/main";
import Sidebar from "../containers/events/sidebar";
import SEO from "../components/seo";

const Events = () => {
    return (
        <>
            <SEO />
            <Content borderBottomWidth="1px">
                <PageHeader
                    prev={[
                        { text: "Profile", link: "/profile-view" },
                        { text: "Discover", link: "/" },
                    ]}
                    title="Events"
                    wcText="Discover Events"
                />
            </Content>
            <Content mt={[null, null, null, "0px"]}>
                <Row>
                    <MainContent />
                    <Sidebar />
                </Row>
            </Content>
        </>
    );
};

export default Events;
