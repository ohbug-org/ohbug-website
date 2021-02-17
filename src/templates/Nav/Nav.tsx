import React from 'react'
import { Link } from 'gatsby'

import type { Mdx } from '@/templates/interface'

import styles from './Nav.module.less'

function getLink(item: any, level: number) {
  return (
    <Link
      className={styles.item}
      to={item.url}
      style={{ marginLeft: 12 * level }}
      activeStyle={{ color: '#000' }}
      title={item.title}
      key={item.url}
    >
      {item.title}
    </Link>
  )
}
function generateItem(items: Mdx['tableOfContents']['items'], level = 0) {
  return items.map((item) => {
    if (item.url && item.title && item.items) {
      return (
        <React.Fragment key={item.url}>
          {getLink(item, level)}
          {generateItem(item.items, level + 1)}
        </React.Fragment>
      )
    }
    if (item.items) {
      return generateItem(item.items, level + 1)
    }
    if (item.url && item.title) {
      return getLink(item, level)
    }
  })
}

interface NavProps {
  data: Mdx
}
const Nav: React.FC<NavProps> = ({ data }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <h4 className={styles.title}>目录内容</h4>
      <div className={styles.content}>
        {generateItem(data?.tableOfContents?.items)}
      </div>
    </div>
  </div>
)

export default Nav
