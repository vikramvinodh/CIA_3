import React from 'react'
import { Data } from '@/components/Data'
import { cityData } from '@/components/Data'
import Head from 'next/head'
import Stickyhead from '@/components/home/Steakyhead'
import Banner from '@/components/home/Banner'
import Navbar from '@/components/home/Navbar'
import Section1 from '@/components/internal/Section1'
import WhyUs from '@/components/home/WhyUs'
import Ourprocess from '@/components/home/Ourprocess'
import Ourdesigners from '@/components/home/Ourdesigners'
import Faq from '@/components/home/Faq'
import Bottom from '@/components/home/Bottom'
import Linking from '@/components/home/Linking'
import Footer from '@/components/home/Footer'
import Hometours from '@/components/home/Hometours'
import Residentialtours from '@/components/home/Residentialtours'
import Sticky from '@/components/home/Internalsticky'
import Sticky1 from '@/components/home/Homesticky'
import Commercialtours from '@/components/home/Commercialtours'
import Section from '@/components/home/Section1'
import Reviews from '@/components/home/Reviews'
import Presence from '@/components/home/Presence'
import Popup from '@/components/home/Popup'

const cities = [
    "Kalyan Nagar",
    "Byrathi cross",
    "Seegehalli",
    "Battarahalli",
    "Whitefield",
    "Kundanahalli",
    "Varthur",
    "Marathahalli",
    "Devarabeesanahalli",
    "Kadubeesanahalli",
    "HSR layout",
    "Bellandur",
    "Sarjapur road",
    "Benson town area",
    "Yelahanka",
    "Devanahalli",
    "Coimbatore",
    "Kochi",
    "Bangalore"
]

function index({ slug, data, areaData }) {
    return (
        <>
            <Head >
                <meta name="google-site-verification" content="IfTwZa2ngritnv69sct6tmPmMtuO9EEgmYXsefwmNOg" />
                <title>
                    {
                        data && data.meta.title ?
                            data.meta.title
                            : `#No 1 Interior Design Services Company in ${areaData.city} | Lowest Price`
                    }
                </title>
                <meta name="description" content={data && data.meta.desc ? data.meta.desc : `Make your space beautiful and functional with our interior design services in  ${areaData.city}. We offer customized solutions for all your interior design needs with 5 year warranty. ✔Contact Us`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <Stickyhead />
            <Navbar />
            <Banner title={data && data.banner_title} img={data && data.banner_img} city={areaData ? areaData.city : null} />
            {
                areaData ?
                    <Sticky1 />
                    :
                    <Sticky />
            }
            {
                areaData ?
                    <Section />
                    :
                    <Section1 title={data.heading} desc={data.desc} gallery={data.gallery} />
            }
            {
                areaData ?
                    <>
                        <Hometours />
                        <Residentialtours />
                    </>
                    : ''
            }
            {
                data && data.commercial_tours ?
                    <Commercialtours /> : null
            }
            {
                data && data.home_tours ?
                    <Hometours /> : null
            }
            {
                data && data.residential_tours ?
                    <Residentialtours /> : null
            }
            <WhyUs />
            <Ourprocess />
            <Ourdesigners />
            {
                areaData ?
                    <>
                        <Reviews />
                        <Presence />
                    </> : ''
            }
            <Faq />
            <Bottom />
            <Popup/>
            <Linking bottom={data && data.bottom} internal={data && data.internal} areabottom={areaData && areaData.bottom} arealinking={areaData && areaData.linking} />
            <Footer />
        </>

    )
}

export async function getServerSideProps(context) {
    const { slug } = context.query
    let url = slug[0];


    if (slug[1]) {
        url = slug[0] + '/' + slug[1]
    }

    const keys = Object.keys(Data);
    const isValidslug = keys.includes(url)

    // Home page areas
    const city = Object.keys(cityData);
    const isValidcities = city.includes(url)

    const data = Data[url]
    const areaData = cityData[url]

    if (!isValidslug && !isValidcities) {
        return {
            notFound: true
        }
    }


    return {
        props: {
            slug: url,
            data: data ? data : null,
            areaData: areaData ? areaData : null
        }
    }
}

export default index
