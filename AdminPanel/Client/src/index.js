import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "./components/css/media.css";
import "./components/css/font.css";
import './components/adminpanel/components/pages/style.scss';
import 'react-select2-wrapper/css/select2.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./components/js/reveal";
import "./components/css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.js';


const AvatarComponent = lazy(() => import('./App'));
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <AvatarComponent />
);
