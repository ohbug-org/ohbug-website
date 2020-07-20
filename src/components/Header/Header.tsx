import React from 'react';
import { Link } from 'gatsby';

import styles from './Header.module.less';

const Header: React.FC = () => {
  return (
    <header className={styles.root}>
      <Link to="/">LOGO</Link>

      <nav>
        <Link to="/docs">Docs</Link>
      </nav>
    </header>
  );
};

export default Header;
