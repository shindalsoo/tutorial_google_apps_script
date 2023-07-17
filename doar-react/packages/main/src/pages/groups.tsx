import { Row } from "@doar/components";
import Content from "../layouts/content";
import PageHeader from "../components/page-header";
import MainContent from "../containers/groups/main";
import Sidebar from "../containers/groups/sidebar";
import SEO from "../components/seo";

const Groups = () => {
    return (
        <>
            <SEO />
            <Content borderBottomWidth="1px">
                <PageHeader
                    prev={[
                        { text: "Profile", link: "/profile-view" },
                        { text: "Discover", link: "/" },
                    ]}
                    title="Groups"
                    wcText="Discover Groups"
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

export default Groups;
