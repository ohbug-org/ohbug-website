import React from 'react';

import { Button } from '@/components';

import styles from './Home.module.less';

const GetStarted: React.FC = () => (
  <section className={styles.getStarted}>
    <div className={styles.title}>感兴趣了?</div>
    <div className={styles.description}></div>
    <Button as="a" href="//app.ohbug.net" size="large">
      白嫖一波
    </Button>
  </section>
);

export default GetStarted;
