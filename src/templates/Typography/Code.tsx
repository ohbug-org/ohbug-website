import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import clsx from 'clsx'
import Highlight from 'react-highlight'
import 'highlight.js/styles/atom-one-dark.css'

import * as styles from './code.module.less'

interface CodeProps {
  [prop: string]: any
}
const Code: React.FC<CodeProps> = ({ children, className }) => {
  const language = className ? className.replace(/language-/, '') : ''
  const [copied, setCopied] = React.useState(false)

  return (
    <div className={styles.root}>
      {language && <div className={styles.language}>{language}</div>}
      <CopyToClipboard
        text={children}
        onCopy={() => {
          setCopied(true)
          setTimeout(() => {
            setCopied(false)
          }, 6000)
        }}
      >
        <button
          className={clsx(styles.copy, {
            [styles.disabledCopy]: copied,
          })}
          disabled={copied}
        >
          {copied ? 'copied' : 'copy'}
        </button>
      </CopyToClipboard>
      <Highlight language={language}>{children}</Highlight>
    </div>
  )
}

export default Code
