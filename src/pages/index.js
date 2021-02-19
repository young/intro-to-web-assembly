import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Card from "../components/TOCCard";

import "../styles/global.css";


const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query HomepageTOC {
        site {
          siteMetadata {
            title
            subtitle
            description
            keywords
          }
        }
        allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }) {
          edges {
            node {
              id
              frontmatter {
                order
                path
                title
                section
                description
              }
            }
          }
        }
      }
    `}
    render={props => (
        <Card
          title="Contents"
          content={props.allMarkdownRemark.edges}
        />
    )}
  />
);

export default IndexPage;
