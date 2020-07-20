import React from 'react';
import { Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';

import type { Data } from '../interface';

import styles from './Side.module.less';

interface NavItem {
  name: string;
  children: {
    path: string;
    title: string;
  }[];
}
type NavList = NavItem[];
export function generateSideData(data: Data): NavList {
  const { allDirectory, allMdx } = data;
  return allDirectory.edges
    .filter((item) => !!item.node.relativePath)
    .map((item) => item.node.name)
    .map((section) => ({
      name: section,
      children: allMdx.edges
        .filter((item) => item.node.parent.relativeDirectory === section)
        .map((item) => ({
          path: item.node.fields.slug,
          title: item.node.fields.title,
        })),
    }));
}

export function generateSide(data: Data): React.ReactElement {
  const list = generateSideData(data);

  const target = data.allMdx.edges.find(
    (item) => item.node.fields.slug === '/docs/SUMMARY',
  )?.node;
  if (target.rawBody) {
    return (
      <MDXProvider
        components={{
          // eslint-disable-next-line react/display-name
          a: ({ children, href, ...props }) => (
            <Link
              {...props}
              to={href}
              activeClassName={styles.itemSelected}
              partiallyActive
              title={children}
            >
              {children}
            </Link>
          ),
        }}
      >
        <MDXRenderer>{target.body}</MDXRenderer>
      </MDXProvider>
    );
  }

  return (
    <>
      {list.map((item) => (
        <section className={styles.section} key={item.name}>
          <h2>{item.name}</h2>
          <ul>
            {item.children.map((subItem) => (
              <li key={subItem.path}>
                <Link
                  to={subItem.path}
                  activeClassName={styles.itemSelected}
                  partiallyActive
                  title={subItem.title}
                >
                  {subItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}
