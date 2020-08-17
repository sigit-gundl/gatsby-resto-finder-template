import React from "react";
import { Link } from "gatsby";

import "./PostListing.scss";

// Text
import { Strong, Header2 } from "../Styled/components/text";
// Display
import { Grid, DisplayFlex, FlexItemSvg } from "../Styled/components/display";
// Commons
import { FillSpace } from "../Styled/components/commons";
// icon
import { StarSvg } from "../Materials/icons";

const PostListing = ({postEdges}) => {
  
  const getPostList = () => {
    const postList = [];

    postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        user: postEdge.node.frontmatter.user,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        desc: postEdge.node.frontmatter.desc,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
    const postList = getPostList();
    return (
      <Grid gridGap="8px" padding="0 4vw 40px">
        {
        postList.map(post => (
          <Link to={post.path} key={post.title}>
          <div className="retnews-card--post">
          <DisplayFlex>
          {
            post.user.map(user => 
              (
                <>
                    {
                    user.name == null ? 
                    null 
                    :
                    <>
                    <span class="avatar">
                      <img src={require(`../../assets/img/partners/${user.name}.png`)} alt="user"/>
                    </span>
                    <Strong className="retnews-user--name">{user.name}</Strong>
                    </>
                    }
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
            </DisplayFlex>
            <div className="retnews-img--wrap">
              <img src={post.cover} alt={post.title}/>
            </div>
            <Header2>{post.title}</Header2>
            <Strong>{post.desc}</Strong>
            <DisplayFlex>
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
              <FillSpace/>
              <Link to={post.path} key={post.title}>
                Open Now!
              </Link>
            </DisplayFlex>
          </div>
          </Link>
        ))
        }
      </Grid>
    );
}

export default PostListing;
