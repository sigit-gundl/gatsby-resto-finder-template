import React from 'react'
import Layout from "../layout";
import { Helmet } from "react-helmet";

import config from "../../data/SiteConfig";
import Listing from '../templates/listing';

const RestoFinder = ({data, pageContext}) => {
      return (
        <Layout config={config}>
          <Listing/>
        </Layout>
      );
}
export default RestoFinder;