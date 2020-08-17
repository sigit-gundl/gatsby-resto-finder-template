import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
// import Layout from "../layout";
import Layout from "../layout/"

import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import Footer from "../components/Footer/Footer";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.scss";
import "./post.scss";

// commons
import { Dropdown, DropdownItem } from "../components/Commons/Hooks/useDropdown";

import { Tabs, Tab, Content } from "../components/Commons/Hooks/tabs";

const PostTemplate = ({data, pageContext }) => {
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    useEffect(() => {
      if (!post.id) {
        post.id = slug;
      }
    })

    // tabs

    const [active, setActive] = useState(0);
    const handleClick = e => {
      const index = parseInt(e.target.id, 0);
      if (index !== active) {
        setActive(index);
      }
    };
    return (

        <>
      <Layout config={config}>

          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <div className="retnews-section--post">
            <div className="retnews-header--post">
            <div className="retnews-header--img">
              <img src={post.cover} alt={post.title}/>
            </div>
            <div className="retnews-header--wrap">
              <span className="retnews-post-item">
                <h1>{post.title}</h1>
                <strong>{post.desc}</strong>
              </span>
              <span className="retnews-fill-flex"></span>
              <Dropdown>
                <DropdownItem>Item One</DropdownItem>
                <DropdownItem onClick={e => console.log(e.target)}>
                  Item Two
                </DropdownItem>
                <DropdownItem>Item Three</DropdownItem>
              </Dropdown>
            </div>

            </div>
            
                  
            <Tabs>
              <Tab onClick={handleClick} active={active === 0} id={0}>
                About
              </Tab>
              <Tab onClick={handleClick} active={active === 1} id={1}>
                Reviews
              </Tab>
              <Tab onClick={handleClick} active={active === 2} id={2}>
                Menu
              </Tab>
              <Tab onClick={handleClick} active={active === 3} id={3}>
                Galery
              </Tab>
              <SocialLinks postPath={slug} postNode={postNode} />
            </Tabs>
              <Content active={active === 0}>
                <h2>About</h2>
              </Content>
              <Content active={active === 1}>
                <Disqus postNode={postNode} />
              </Content>
              <Content active={active === 2}>
                <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
              </Content>
              <Content active={active === 3}>
                <h2>Gallery</h2>
              </Content>
              <div className="post-meta">
                <PostTags tags={post.tags} />
              </div>
              <UserInfo config={config} />
              <Footer config={config} />
          </div>
        </Layout>

        </>
    );
}

export default PostTemplate;
/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        user {
          name
          state
        }
        title
        cover
        desc
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
