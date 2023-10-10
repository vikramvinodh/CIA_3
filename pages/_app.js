import '../styles/global.scss'
import '../styles/media.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "yet-another-react-lightbox/styles.css";
import "slick-carousel/slick/slick-theme.css";


export default function App({ Component, pageProps }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <Component {...pageProps} />
}
