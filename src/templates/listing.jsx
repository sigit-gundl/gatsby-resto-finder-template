import React, { useState } from "react";

import { graphql, Link } from "gatsby";
import Layout from "../layout";

import config from "../../data/SiteConfig";
import { Finder } from "../container/finder/";

const Listing = (data, { pageContext }) => {
    const postEdges = data.allMarkdownRemark.edges;

    const { currentPageNum, pageCount } = pageContext;
    // search
    const [searchValue, setSearchValue] = useState(false);
    const handleChange = (e) => {
      setSearchValue(e.target.value);
    }
    return (
      <Layout searchValue={searchValue} config={config}>
        <Finder postEdges={postEdges} config={config} pageCount={pageCount} currentPageNum={currentPageNum} searchValue={searchValue} handleChange={handleChange}/>
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
