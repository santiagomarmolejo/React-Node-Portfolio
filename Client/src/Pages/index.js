import React from "react";
import Header from "../components/Header"
import BigImage from "../components/BigImage";
import AboutMe from "../components/AboutMe";
import MyWork from "../components/MyWork";
import Footer from "../components/Footer";

const Index = (props) => {
    return (<div>
        <Header />
        <BigImage />
        <AboutMe />
        <MyWork />
        <Footer />
    </div>
    );
}

export default Index;