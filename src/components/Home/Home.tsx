import React from 'react';

import { Button } from '@/components';

import styles from './Home.module.less';

const Home: React.FC = () => {
  return (
    <div className={styles.root}>
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
              是应用信息监控平台。提供开源的异常监控、行为采集、性能监控，帮助开发者及时发现追踪改善网站问题，提升用户体验。
            </div>

            <Button
              className={styles.try}
              as="a"
              href="//app.ohbug.net"
              size="large"
            >
              现在试试
            </Button>
            <Button as="a" href="/docs" size="large" type="text">
              Docs
            </Button>
          </div>
          <div className={styles.figure}>
            {/*<img*/}
            {/*  className={styles.animate}*/}
            {/*  src={require('./images/firstScreenFigure.png')}*/}
            {/*  alt="figure"*/}
            {/*/>*/}
            <img src={require('./images/firstScreenFigure.png')} alt="figure" />
          </div>
        </div>

        {/*<svg className={styles.bg} viewBox="0 0 100 20">*/}
        {/*  <defs>*/}
        {/*    <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">*/}
        {/*      <stop stopColor="#fafafa" offset="0%" />*/}
        {/*      <stop stopColor="white" offset="100%" />*/}
        {/*    </linearGradient>*/}
        {/*  </defs>*/}
        {/*  <path*/}
        {/*    d="M -10 10 q 60 -20 120 0 L 100 20 L 0 20"*/}
        {/*    fill="url(#gradient)"*/}
        {/*  />*/}
        {/*</svg>*/}
      </section>

      <section className={styles.features}>
        <div className={styles.media}>
          <div className={styles.img}>
            <img src={require('./images/featuresIssue.png')} alt="issues" />
          </div>
        </div>

        <div className={styles.information}>
          <div className={styles.title}>Issue列表 事件分类聚合</div>
          <div className={styles.description}>
            Ohbug 将相同特征的事件进行聚合得到Issue
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.media}>
          <div className={styles.img}>
            <img src={require('./images/featuresEvent.png')} alt="event" />
          </div>
        </div>

        <div className={styles.information}>
          <div className={styles.title}>事件详情</div>
          <div className={styles.description}>
            通过详情页
            根据事件相关的问题信息、用户信息、设备信息、用户行为、堆栈信息等数据，快速定位问题还原“问题”现场。
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.media}>
          <div className={styles.img} style={{ boxShadow: 'none' }}>
            <img src={require('./images/featuresNotice.svg')} alt="event" />
          </div>
        </div>

        <div className={styles.information}>
          <div className={styles.title}>实时报警通知</div>
          <div className={styles.description}>
            通过邮件通知、浏览器推送、Webhook 等方式实现即时通知。
            <br />
            支持钉钉机器人、企业微信等通知方式。
          </div>
        </div>
      </section>

      <section className={styles.getStarted}>
        <div className={styles.title}>感兴趣了?</div>
        <div className={styles.description}>只需要几分钟就可以开始</div>
        <Button as="a" href="//app.ohbug.net" size="large">
          Get started
        </Button>
      </section>
    </div>
  );
};

export default Home;
