import React from 'react';
import { Link } from 'gatsby';

import type { Data } from '@/templates/interface';
import { generateSide } from '@/templates/Side/utils';
import { Search } from '@/components';

import styles from './Side.module.less';

interface SideProps {
  data: Data;
}
const Side: React.FC<SideProps> = ({ data }) => {
  return (
    <aside className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link to="/docs">
            <img src="/logos/logo-with-docs.svg" alt="logo" />
          </Link>
        </div>
        <Search />

        <nav className={styles.nav}>{data && generateSide(data)}</nav>
      </div>
    </aside>
  );
};

export default Side;
