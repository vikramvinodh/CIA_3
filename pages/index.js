import Navbar from '@/components/home/Navbar'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Stickyhead from '@/components/home/Steakyhead'
import Banner from '@/components/home/Banner'
import Sticky from '@/components/home/Homesticky'
import Section1 from '@/components/home/Section1'
import Hometours from '@/components/home/Hometours'
import Residentialtours from '@/components/home/Residentialtours'
import Ourprocess from '@/components/home/Ourprocess'
import Ourdesigners from '@/components/home/Ourdesigners'
import WhyUs from '@/components/home/WhyUs'
import Reviews from '@/components/home/Reviews'
import Presence from '@/components/home/Presence'
import Faq from '@/components/home/Faq'
import Bottom from '@/components/home/Bottom'
import Linking from '@/components/home/Linking'
import Footer from '@/components/home/Footer'
import Popup from '@/components/home/Popup'




const inter = Inter({ subsets: ['latin'] })


const reviewSchema = {
  "@context": "http://schema.org",
  "@type": "Review",
  "name": "",
  "url": "www.ArtFullinteriors.com",
  "author": {
    "@type": "Person",
    "name": "Vikram"
  },
  "reviewBody": "Best Interior Desiging Company",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": 5
  },
  "itemReviewed": {
    "@type": "Product",
    "name": "Best Interior Desiging Company",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.8,
      "reviewCount": 1299
    }
  }
};



export default function Home() {
  return (
    <>
      <Head >
        <script src="http://localhost:8097"></script>
        <meta name="google-site-verification" content="IfTwZa2ngritnv69sct6tmPmMtuO9EEgmYXsefwmNOg" />
        <title>Exquisite Designs & Extraordinary Spaces:Best Interior Designers</title>
        <meta name="description" content="Make your space beautiful and functional with our interior design services. We offer customized solutions for all your interior design needs with 5 year warranty. ✔Contact Us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      </Head>
      <Popup />
      <Stickyhead />
      <Navbar />
      <Banner />
      <Sticky />
      <Section1 />
      <Hometours />
      <Residentialtours />
      <WhyUs />
      <Ourprocess />
      <Ourdesigners />
      <Reviews />
      <Presence />
      <Faq />
      <Bottom />
      <Linking />
      <Footer />
    </>
  )
}

export async function getServerSideProps(context) {
  const { slug } = context.query
  console.log(slug)


  return {
    props: {
      slug: null,
    }
  }
}

