import React from 'react';
import { Link } from 'gatsby';

import { Button, MobileHeader } from '@/components';

import styles from './Header.module.less';

const dataSource = [
  {
    label: '首页',
    href: '/',
  },
  {
    label: '文档',
    href: '/docs',
  },
  {
    label: 'Github',
    href: 'https://github.com/ohbug-org/ohbug',
  },
];

const Header: React.FC = () => {
  return (
    <>
      <header className={styles.root}>
        <div className={styles.container}>
          <Link className={styles.logo} to="/">
            <img src="/logos/logo-with-text.svg" alt="logo" />
          </Link>

          <div className={styles.nav}>
            <nav>
              {dataSource.map(({ label, href }) => (
                <Button type="text" as="a" href={href} key={href}>
                  {label}
                </Button>
              ))}
            </nav>

            <div>
              <Button as="a" href="//app.ohbug.net">
                现在试试
              </Button>
            </div>
          </div>
        </div>
      </header>

      <MobileHeader
        dataSource={dataSource}
        logo={<img src="/logos/logo-with-text.svg" alt="logo" />}
        extra={
          <Button as="a" href="//app.ohbug.net">
            现在试试
          </Button>
        }
      />
    </>
  );
};

export default Header;
