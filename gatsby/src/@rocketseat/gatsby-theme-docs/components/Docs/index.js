import React from "react";
import PropTypes from "prop-types";

import Layout from "@rocketseat/gatsby-theme-docs/src/components/Layout";
import SEO from "@rocketseat/gatsby-theme-docs/src/components/SEO";

export default function Docs({ mdx, pageContext, children }) {
  const { title, description, image, disableTableOfContents } = mdx.frontmatter;
  const { headings } = mdx;
  const { slug } = mdx.fields;

  return (
    <>
      <SEO title={title} description={description} slug={slug} image={image} />
      <Layout
        disableTableOfContents={disableTableOfContents}
        title={title}
        headings={headings}
      >
        {children}
      </Layout>
    </>
  );
}

Docs.propTypes = {
  mdx: PropTypes.shape({
    body: PropTypes.string,
    headings: PropTypes.array,
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      disableTableOfContents: PropTypes.bool,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    prev: PropTypes.shape({}),
    next: PropTypes.shape({}),
    repositoryEditUrl: PropTypes.string,
    repositoryProvider: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
};
