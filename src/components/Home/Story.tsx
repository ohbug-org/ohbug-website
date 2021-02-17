import React from 'react'

import { Button } from '@/components'

import styles from './Home.module.less'

const Story: React.FC = () => (
  <section className={styles.story}>
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={styles.title}>
          <span>手动查 Bug</span>
          <img
            className={styles.line}
            src={require('./images/firstScreenTitleLine.png')}
            alt="title line"
          />
        </div>
        <div className={styles.newTitle}>
          <img src={require('./images/firstScreenTitle.svg')} alt="title" />
        </div>

        <div className={styles.description}>
          Ohbug
          是开源的应用信息监控套件。提供异常监控、行为采集、性能监控，帮助开发者及时发现追踪改善网站问题，提升用户体验。
        </div>

        <Button
          className={styles.try}
          as="a"
          href="/docs/deploy/Deploy"
          size="large"
        >
          免费部署
        </Button>
        <Button as="a" href="/docs" size="large" type="text">
          Docs
        </Button>
      </div>
      <div className={styles.figure}>
        <img
          className={styles.animate}
          src={require('./images/firstScreenFigure2.png')}
          alt="figure"
        />
        <img src={require('./images/firstScreenFigure1.png')} alt="figure" />
      </div>
    </div>

    <svg className={styles.bg} viewBox="0 0 100 20">
      <defs>
        <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
          <stop stopColor="#fafafa" offset="0%" />
          <stop stopColor="white" offset="100%" />
        </linearGradient>
      </defs>
      <path d="M -10 10 q 60 -20 120 0 L 100 20 L 0 20" fill="url(#gradient)" />
    </svg>
  </section>
)

export default Story
