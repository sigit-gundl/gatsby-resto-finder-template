import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
// import Layout from "../layout";
import Navbar from "../components/Navbar/Navbar"

import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import Footer from "../components/Footer/Footer";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.scss";
import "./post.scss";

// Commons Hooks
import { Tabs, Tab, Content } from "../components/Commons/Hooks/tabs";

import { Dropdown, DropdownItem } from "../components/Commons/Hooks/useDropdown";

import { useModal, ModalButton, ModalContent } from "../components/Commons/Hooks/useModal";


import { Strong, Header1 } from "../components/Styled/components/text";
import { Grid, DisplayFlex, FlexItemSvg } from "../components/Styled/components/display";
import { FillSpace, FlexItemText, FlexItem } from "../components/Styled/components/commons";
import { StarSvg, GuideSvg, ShareOutlineSvg, ShareFillSvg } from "../components/Materials/icons";

const EatPlaceTemplate = ({data, pageContext }) => {
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
    //modal
    const {isShowing, toggle} = useModal();
    return (
    <>
      <Navbar config={config}>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <div className="retnews-section--post">
            <div className="retnews-header--post">
            <div className="retnews-header--wrap">
              <DisplayFlex className="retnews-header--nav-top">
              <DisplayFlex>
                <FlexItemSvg fill="#F7E701">
                  <StarSvg/>
                </FlexItemSvg>
                <FlexItemSvg>
                <Strong>
                  5.5
                </Strong>
                </FlexItemSvg>
              </DisplayFlex>
                {
                post.user.map(user => 
                  (
                  <>
                    {
                      user.state == null ? 
                      null 
                      :
                      <span className={`retnews-user--state ${user.state}`}>
                        <Strong>{user.state}</Strong>
                      </span>
                    }
                  </>
                ))
                }
                <FillSpace/>
                <FlexItemText minWidth="95px" none={false}>
                  Open Now!
                </FlexItemText>
                <button className="retnews-btn-post">
                  <Strong>Order</Strong>
                </button>
              </DisplayFlex>
              <img src={post.cover} alt={post.title}/>
              <DisplayFlex className="retnews-header--nav-bottom">
                {
                post.user.map(user => 
                  (
                    <>
                        {
                        user.name == null ? 
                        null 
                        :
                        <span class="avatar">
                          <img src={require(`../assets/img/partners/${user.name}.png`)} alt="user"/>
                        </span>
                        }
                    </>
                  ))
              }
              <FillSpace/>
              <button className="retnews-btn-post">
                <GuideSvg/>
                <Strong>Guide</Strong>
              </button>
              </DisplayFlex>
            </div>
            <DisplayFlex padding="0 8px 20px">
              <FlexItemText minWidth="145px" none={false}>
                <Header1>{post.title}</Header1>
                <Strong>{post.desc}</Strong>
              </FlexItemText>
              <FillSpace/>
              <Dropdown>
              <ModalButton toggle={toggle}>
                <DropdownItem>
                    {
                      isShowing ?
                      <ShareFillSvg/>
                      :
                      <ShareOutlineSvg/>
                    }
                    <Strong>Share</Strong>
                  </DropdownItem>
              </ModalButton>
                <DropdownItem>
                  Item Two
                </DropdownItem>
                <DropdownItem>Item Three</DropdownItem>
              </Dropdown>
            </DisplayFlex>
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
        </Navbar>
        <ModalContent isShowing={isShowing} hide={toggle}>
          <SocialLinks postPath={slug} postNode={postNode} />
        </ModalContent>
        </>
    );
}

export default EatPlaceTemplate;
/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query EatPlace($slug: String!) {
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
