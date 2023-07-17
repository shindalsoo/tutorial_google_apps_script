import { Media, MediaBody } from "@doar/components";
import Content from "../layouts/content";
import LeftSidebar from "../containers/profile-view/left-sidebar";
import MainContent from "../containers/profile-view/main";
import RightSidebar from "../containers/profile-view/right-sidebar";
import SEO from "../components/seo";

const ProfileView = () => {
    return (
        <>
            <SEO />
            <Content p={[null, null, null, "40px 0"]}>
                <Media display={["block", null, null, "flex"]}>
                    <LeftSidebar />
                    <MediaBody
                        mt={["40px", null, null, 0]}
                        px={[null, null, null, "10px"]}
                    >
                        <MainContent />
                    </MediaBody>
                    <RightSidebar />
                </Media>
            </Content>
        </>
    );
};

export default ProfileView;
