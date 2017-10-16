import * as React from "react"
import Button from 'material-ui/Button';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default ({ data }: {data: any}) => {
    const post = data.markdownRemark;
    const siteTitle = data.site.siteMetadata.title;
    return (
      <div className="content-container">
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`}/>
        <div className="content-table">
          <ul>{data.markdownRemark.headings.filter((node) => node.depth === 2).map((title) =>
            <li><a href={`#${title.value.toLowerCase().replace(/ /g,"-")}`}>{title.value}</a></li>)}
          </ul>
        </div>
        <h1>{post.frontmatter.title}</h1>
        <hr />
        <div className="text-content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        index
      }
      headings {
        value
        depth
      }
      timeToRead
      tableOfContents
    }
  }
`