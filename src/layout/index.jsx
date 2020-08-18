import React from "react";
import { Helmet } from "react-helmet";
// component
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import config from "../../data/SiteConfig";

import "./index.scss";

const MainLayout = ({ children, searchValue}) => {
    return (
      <div className="layout-container">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
      <Navbar config={config}>
        {searchValue ?
         <>
          {children}
         </>
        :
        <>
        {children}
        <Footer config={config}/>
        </>
        }
      </Navbar>
      </div>
    );
}

export default MainLayout;