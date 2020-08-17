import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../layout";

import config from "../../data/SiteConfig";

const Templates = ({data, pageContext}) => {   

return (
    <Layout config={config}>
    <Link to="/blog">
        <h1>Blog</h1>
    </Link>
    <Link to="/resto-finder">
        <h1>Resto Finder</h1>
    </Link>
  </Layout>
);
}

export default Templates;