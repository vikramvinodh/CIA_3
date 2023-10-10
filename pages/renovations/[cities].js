import React from 'react';
import { useRouter } from "next/router";
import { useEffect } from 'react';
import Banner from "@/components/Renovations/Banner";
import Section1 from "@/components/Renovations/Section1";
import Bottom from "@/components/home/Bottom";
import Faq from "@/components/home/Faq";
import Footer from "@/components/home/Footer";
import Linking from "@/components/home/Linking";
import Navbar from "@/components/home/Navbar";
import Ourprocess from "@/components/home/Ourprocess";
import WhyUs from "@/components/home/WhyUs";

const validCities = ["bangalore", "kochi", "coimbatore"];

function Cities() {
    const router = useRouter();
    const { cities } = router.query;

    const isValidCity = validCities.includes(cities);

    useEffect(() => {
        // Redirect to custom 404 page if the city name is not valid
        if (cities && !isValidCity) {
            router.push("/not-found");
        }
    }, [cities, isValidCity, router]);

    if (!isValidCity) {
        // Return a 404 status code
        // Next.js will handle this and show its default 404 page
        return <></>;
    }

    return (
        <>
            <Navbar />
            <Banner city={cities} />
            <Section1 />
            <WhyUs />
            <Ourprocess />
            <Faq />
            <Bottom />
            <Linking />
            <Footer />
        </>
    );
}

export default Cities;
