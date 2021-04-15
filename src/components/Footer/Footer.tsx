import React from 'react'

import { Button } from '@/components'

import * as styles from './Footer.module.less'

const Footer: React.FC = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.content}>
        <div className={styles.information}>
          <div className={styles.logo}>
            <img src="/logos/logo-with-text.svg" alt="logo" />
          </div>
          <div className={styles.description}>
            Ohbug
            是开源的应用信息监控套件。提供异常监控、行为采集、性能监控，帮助开发者及时发现追踪改善网站问题，提升用户体验。
          </div>
        </div>

        <div className={styles.sns}>
          <Button
            as="a"
            href="https://github.com/ohbug-org/ohbug"
            target="_blank"
            shape="circle"
            type="text"
          >
            <img src={require('./images/github.svg').default} alt="github" />
          </Button>

          <Button className={styles.wechat} shape="circle" type="text">
            <img src={require('./images/wechat.svg').default} alt="wechat" />
            <img
              className={styles.qrcode}
              src={require('./images/wechatQrcode.jpg').default}
              alt="wechat qrcode"
            />
          </Button>

          <Button
            as="a"
            href="/docs/deploy/Deploy"
            target="_blank"
            shape="circle"
            type="text"
          >
            <img src={require('./images/deploy.svg').default} alt="deploy" />
          </Button>
        </div>
      </div>

      <div className={styles.copyright}>Copyright © Ohbug, Inc.</div>
    </footer>
  )
}

export default Footer
