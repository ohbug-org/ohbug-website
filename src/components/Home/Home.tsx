import React from 'react';

import Story from './Story';
import Features from './Features';
import GetStarted from './GetStarted';

import styles from './Home.module.less';

const Home: React.FC = () => {
  return (
    <div className={styles.root}>
      <Story />
      <Features />
      <GetStarted />
    </div>
  );
};

export default Home;
