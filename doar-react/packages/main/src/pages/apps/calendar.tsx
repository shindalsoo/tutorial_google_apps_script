import Wrapper from "../../containers/apps/calendar/wrapper";
import Sidebar from "../../containers/apps/calendar/sidebar";
import Main from "../../containers/apps/calendar/main";
import SEO from "../../components/seo";

const Calendar = () => {
    return (
        <>
            <SEO />
            <Wrapper>
                <Sidebar />
                <Main />
            </Wrapper>
        </>
    );
};

export default Calendar;
