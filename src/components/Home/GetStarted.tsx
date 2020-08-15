import React from 'react';

import { Button } from '@/components';

import styles from './Home.module.less';

const GetStarted: React.FC = () => (
  <section className={styles.getStarted}>
    <div className={styles.title}>感兴趣了?</div>
    <div className={styles.description}>只需要几分钟就可以开始</div>
    <Button as="a" href="//app.ohbug.net" size="large">
      Get started
    </Button>
  </section>
);

export default GetStarted;
