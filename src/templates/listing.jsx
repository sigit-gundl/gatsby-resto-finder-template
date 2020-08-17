import React, { useState } from "react";

import { graphql, Link } from "gatsby";
import Layout from "../layout";

import config from "../../data/SiteConfig";
import useSticky from "../components/Commons/Hooks/useSticky";
import { Finder } from "../container/finder/";

const Listing = ({data, pageContext}) => {
  
    const { isSticky, element } = useSticky();
    const postEdges = data.allMarkdownRemark.edges;
    // search
    const [searchValue, setSearchValue] = useState();
    const handleChange = (e) => {
      setSearchValue(e.target.value);
    }
    return (
      <Layout searchValue={searchValue} config={config}>
        <Finder pageContext={pageContext} postEdges={postEdges} config={config} searchValue={searchValue} handleChange={handleChange} sticky={isSticky} element={element}/>
      </Layout>
    );
}


export default Listing;

/* eslint no-undef: "off" */
export const listingQuery = graphql`
  query ListingQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            user {
              name
              state
            }
            title
            tags
            cover
            desc
            date
          }
        }
      }
    }
  }
`;
