import Banner from "@/components/Renovations/Banner";
import Section1 from "@/components/Renovations/Section1";
import Bottom from "@/components/home/Bottom";
import Faq from "@/components/home/Faq";
import Footer from "@/components/home/Footer";
import Linking from "@/components/home/Linking";
import Navbar from "@/components/home/Navbar";
import Ourprocess from "@/components/home/Ourprocess";
import WhyUs from "@/components/home/WhyUs";
import React from "react";


function index() {
    return (
        <>
            <Navbar />
            <Banner />
            < Section1 />
            <WhyUs />
            <Ourprocess />
            <Faq />
            <Bottom />
            <Linking />
            <Footer />
        </>
    )
}

export default index