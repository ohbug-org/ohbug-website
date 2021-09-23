import React from 'react'
import Head from '@docusaurus/Head'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()

  return (
    <main className={styles.root}>
      <Head>
        <meta property="og:description" content={siteConfig.tagline} />
        <meta charSet="utf-8" />
        <title>{siteConfig.title}</title>
      </Head>

      <Link
        className={styles.logo}
        href="https://github.com/ohbug-org/ohbug"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/img/logo-white.svg" alt="logo" />
      </Link>

      <ul className={styles.nav}>
        <li className={styles.item}>
          <span className="animate-ping absolute -right-1 w-2 h-2 rounded-full bg-white opacity-75" />
          <Link className={styles.link} href="/docs/intro">
            docs
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            className={styles.link}
            href="https://github.com/ohbug-org/ohbug"
            target="_blank"
            rel="noreferrer"
          >
            github
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            className={styles.link}
            href="https://discord.gg/FmxaBSBumM"
            target="_blank"
            rel="noreferrer"
          >
            community
          </Link>
        </li>
      </ul>
    </main>
  )
}
