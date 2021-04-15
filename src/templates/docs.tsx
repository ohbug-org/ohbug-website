import React from 'react'
import type { PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import { MDXProvider } from '@mdx-js/react'

import { Layout, SEO, Button, MobileHeader } from '@/components'
import type { Data } from '@/templates/interface'
import Side from '@/templates/Side'
import TypographyComponents from '@/templates/Typography'
import Nav from '@/templates/Nav'
import { getGithubUrl } from '@/utils'
import { generateSide } from '@/templates/Side/utils'

import * as styles from './docs.module.less'

const Docs: React.FC<PageProps<Data>> = (props) => {
  const { data } = props
  if (!data) {
    return null
  }
  const { mdx } = data
  const metaTitle = mdx?.frontmatter?.metaTitle
  const metaDescription = mdx?.frontmatter?.metaDescription

  return (
    <Layout className={styles.root}>
      <SEO title={metaTitle} description={metaDescription} />

      <MobileHeader
        contentClassName={styles.mobileHeader}
        logo={<img src="/logos/logo-with-docs.svg" alt="logo" />}
      >
        {data && generateSide(data)}
      </MobileHeader>

      <div className={styles.wrapper}>
        <Side data={data} />

        <section className={styles.container}>
          <header className={styles.head}>
            <div className={styles.links}>
              <Button className={styles.button} as="a" href="/" type="text">
                ohbug.net
              </Button>
            </div>
            <div className={styles.extra}></div>
          </header>

          <MDXProvider components={TypographyComponents}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>

          <div className={styles.bottom}>
            {mdx.fields.slug !== '/docs' && (
              <div className={styles.edit}>
                <a
                  href={getGithubUrl(mdx.fields.slug)}
                  title="Edit this page on GitHub"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ verticalAlign: 'middle' }}
                  >
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                  </svg>
                  Edit this page on GitHub
                </a>
              </div>
            )}
          </div>
        </section>

        <Nav data={mdx} />
      </div>
    </Layout>
  )
}

export default Docs

export const pageQuery = graphql`
  query($id: String!) {
    allDirectory {
      edges {
        node {
          name
          relativePath
        }
      }
    }
    mdx(fields: { id: { eq: $id } }) {
      fields {
        id
        title
        slug
      }
      frontmatter {
        title
        metaTitle
        metaDescription
      }
      body
      tableOfContents
      parent {
        ... on File {
          relativeDirectory
        }
      }
    }
    allMdx {
      edges {
        node {
          fields {
            slug
            title
          }
          rawBody
          body
          parent {
            ... on File {
              relativeDirectory
            }
          }
        }
      }
    }
  }
`
