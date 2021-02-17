import React from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'

import styles from './Search.module.less'

const preventSubmit = (e) => {
  e.preventDefault()
}
export default connectSearchBox(({ refine, innerRef, onFocus }) => {
  const handleChange = React.useCallback((e) => {
    refine?.(e?.target?.value)
  }, [])
  return (
    <form onSubmit={preventSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search..."
        ref={innerRef}
        onChange={handleChange}
        onFocus={onFocus}
      />
    </form>
  )
})
