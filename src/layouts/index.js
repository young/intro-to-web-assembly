import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import { graphql, StaticQuery } from "gatsby";

import "../styles/global.css";
import "prismjs/themes/prism-solarizedlight.css";
import "code-mirror-themes/themes/monokai.css";

// import jpg from "../../static/posterframe.jpg";

const TemplateWrapper = props => {
  return (
    <StaticQuery
      render={data => {
        const frontmatter =
          props.data && props.data.markdownRemark
            ? props.data.markdownRemark.frontmatter
            : null;

        return (
          <div>
            <Helmet
              title={
                frontmatter
                  ? `${frontmatter.title} – ${frontmatter.section} – ${data.site.siteMetadata.title}`
                  : data.site.siteMetadata.title
              }
              meta={[
                {
                  name: "og:title",
                  content: frontmatter
                    ? `${frontmatter.title} – ${frontmatter.section} – ${data.site.siteMetadata.title}`
                    : data.site.siteMetadata.title
                },
                {
                  name: "description",
                  content: frontmatter
                    ? frontmatter.description
                    : data.site.siteMetadata.description
                },
                {
                  name: "og:description",
                  content: frontmatter
                    ? frontmatter.description
                    : data.site.siteMetadata.description
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image"
                },
                {
                  name: "keywords",
                  content: data.site.siteMetadata.keywords.join(", ")
                },
                {}
              ]}
            />
            <div className="bg-purple-dark p-4 md:p-10 grid whitespace-pre-wrap h-48">
              <div className="grid justify-items-center">
                <div className="w-16 h-16 rounded-full bg-gray md:-mt-20 -mt-12"></div>
              </div>
              <Link to="/" className="hover:text-gray hover:underline mx-auto md:flex md:space-x-6 lg:space-x-32 justify-between">
                <h1 className="py-2">{data.site.siteMetadata.title}</h1>
                <p className="text-white md:self-end">By Jem Young</p>
              </Link>
              {/* {!frontmatter ? null : (
                <h2>{`${frontmatter.section} – ${frontmatter.title}`}</h2>
              )} */}
            </div>
            <div>{props.children}</div>
          </div>
        );
      }}
      query={graphql`
        query HomePage($path: String!) {
          markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
              path
              title
              order
              section
              description
            }
          }
          site {
            pathPrefix
            siteMetadata {
              title
              subtitle
              description
              keywords
            }
          }
        }
      `}
    />
  );
};

export default TemplateWrapper;
