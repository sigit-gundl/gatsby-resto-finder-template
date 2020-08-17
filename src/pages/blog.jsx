import React from 'react'
import Layout from "../layout";
import { Helmet } from "react-helmet";

import config from "../../data/SiteConfig";

const BlogPage = () => {
      return (
        <Layout config={config}>
          <div className="about-container">
            <Helmet title={`${config.siteTitle}`} />
            <h1>Blog Page Here</h1>
          </div>
        </Layout>
      );
  }
  
export default BlogPage;