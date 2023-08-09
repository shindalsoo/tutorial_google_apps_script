import React from "react";
import "./ContextPage.css"
import Header from "./ContextPageHeader";
import Content from "./ContextPageContent";
import Footer from "./ContextPageFooter";

const ContextPage = () => {
    return (
        <div className="page">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default ContextPage;