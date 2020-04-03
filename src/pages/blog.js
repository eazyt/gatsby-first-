import React from "react";

import Layout from "../components/layout";
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from './blog.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields{
                slug
            }
          }
        }
      }
    }
  `);
  // console.log(data)
  return (
    <Layout>
      <div>
        <div>
          hi
        </div>
        <p>
          My name is Thabo Ramohlale. I'm a fullStack developer living in centuion.
        </p>
      </div>
      <h1>Blog</h1>
      {/* <p>Posts will show up here later on.</p> */}
      <ol className={blogStyles.posts}>
          {data.allMarkdownRemark.edges.map((edge) => {
              return (
                  <li className={blogStyles.post}>
                      <Link to={`/blog/${edge.node.fields.slug}`}>
                      <h2>
                        {edge.node.frontmatter.title}
                      </h2>
                      <p>
                        {edge.node.frontmatter.date}
                      </p>
                      {/* <p>
                          {edge.node.excerpt}
                      </p> */}
                      </Link>
                  </li>
              )
          })}
      </ol>
    </Layout>
  );
};

export default BlogPage;
