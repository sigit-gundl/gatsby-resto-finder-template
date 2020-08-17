import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
// import About from "../components/About/About";
import config from "../../data/SiteConfig";
import { RegisterScreen } from '../components/User/'

class RegisterPage extends Component {
  render() {
    return (
      <Layout config={config}>
        <div className="about-container">
          <Helmet title={`About | ${config.siteTitle}`} />
           <RegisterScreen/>
        </div>
      </Layout>
    );
  }
}

export default RegisterPage;
