import React from 'react'
import { Highlight, Snippet } from 'react-instantsearch-dom'
import { Link } from 'gatsby'

import * as styles from './Search.module.less'

const Hit: React.FC = ({ hit }: any) => {
  return (
    <Link to={hit.fields.slug}>
      <div className={styles.subcategory}>
        <Highlight attribute="frontmatter.title" hit={hit} tagName="mark" />
      </div>
      <div className={styles.content}>
        <Snippet attribute="excerpt" hit={hit} tagName="mark" />
      </div>
    </Link>
  )
}

export default Hit
