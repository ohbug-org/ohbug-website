import React from 'react'

import { Button } from '@/components'

import styles from './Home.module.less'

const GetStarted: React.FC = () => (
  <section className={styles.getStarted}>
    <div className={styles.title}>感兴趣了?</div>
    <div className={styles.description}></div>
    <Button as="a" href="/docs/deploy/Deploy" size="large">
      免费部署
    </Button>
  </section>
)

export default GetStarted
