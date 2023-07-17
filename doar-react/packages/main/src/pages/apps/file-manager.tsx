import Wrapper from "../../containers/apps/file-manager/wrapper";
import Sidebar from "../../containers/apps/file-manager/sidebar";
import MainContent from "../../containers/apps/file-manager/main";
import SEO from "../../components/seo";

const FileManager = () => {
    return (
        <>
            <SEO />
            <Wrapper>
                <Sidebar />
                <MainContent />
            </Wrapper>
        </>
    );
};

export default FileManager;
