import React from 'react'
import { connectStateResults } from 'react-instantsearch-dom'

import styles from './Search.module.less'

const Results = connectStateResults(
  ({ searching, searchState, searchResults }) => {
    if (searching)
      return <div className={styles.resultContent}>Searching...</div>
    if (searchResults && searchResults.nbHits === 0)
      return (
        <div className={styles.resultContent}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          No results found for query{' '}
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <strong style={{ color: 'black' }}>"{searchState.query}"</strong>
        </div>
      )
    return null
  }
)

export default Results
