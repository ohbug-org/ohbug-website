import React from 'react';

import { Layout, Header } from '@/components';

import styles from './Home.module.less';

const Home: React.FC = () => {
  return (
    <Layout className={styles.root}>
      <Header />
      <section className={styles.carousel}></section>
    </Layout>
  );
};

export default Home;
