/* eslint-disable react/display-name,@typescript-eslint/explicit-module-boundary-types */

import React from 'react'

import { toLine } from '@/utils'

import Code from './Code'

import styles from './Typography.module.less'

export default {
  h1: ({ children, ...props }): React.ReactElement => (
    <h1 className={styles.h1} id={toLine(children)} {...props}>
      {children}
      <a href={`#${toLine(children)}`}>#</a>
    </h1>
  ),
  h2: ({ children, ...props }): React.ReactElement => (
    <h2 className={styles.h2} id={toLine(children)} {...props}>
      {children}
      <a href={`#${toLine(children)}`}>#</a>
    </h2>
  ),
  h3: ({ children, ...props }): React.ReactElement => (
    <h3 className={styles.h3} id={toLine(children)} {...props}>
      {children}
      <a href={`#${toLine(children)}`}>#</a>
    </h3>
  ),
  h4: ({ children, ...props }): React.ReactElement => (
    <h4 className={styles.h4} id={toLine(children)} {...props}>
      {children}
      <a href={`#${toLine(children)}`}>#</a>
    </h4>
  ),
  h5: ({ children, ...props }): React.ReactElement => (
    <h5 className={styles.h5} id={toLine(children)} {...props}>
      {children}
      <a href={`#${toLine(children)}`}>#</a>
    </h5>
  ),
  h6: ({ children, ...props }): React.ReactElement => (
    <h6 className={styles.h6} id={toLine(children)} {...props}>
      {children}
      <a href={`#${toLine(children)}`}>#</a>
    </h6>
  ),
  p: (props): React.ReactElement => <p className={styles.p} {...props} />,
  code: Code,
  inlineCode: (props): React.ReactElement => (
    <code className={styles.code} {...props} />
  ),
  a: (props): React.ReactElement => <a className={styles.a} {...props} />,
}
