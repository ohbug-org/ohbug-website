import React from 'react';

import styles from './Home.module.less';

type DataSource = {
  key: string;
  img: {
    src: string;
    alt: string;
    props?: any;
  };
  information: {
    title: string;
    description: string;
  };
}[];
const dataSource: DataSource = [
  {
    key: 'extensions',
    img: {
      src: require('./images/featuresExtension.svg'),
      alt: `extensions`,
      props: {
        style: {
          boxShadow: 'none',
        },
      },
    },
    information: {
      title: `扩展/插件系统`,
      description: `提供可自定义的扩展机制，可自由修改上报内容、自定义捕获数据等`,
    },
  },
  {
    key: 'issues',
    img: {
      src: require('./images/featuresIssue.png'),
      alt: `issues`,
    },
    information: {
      title: `事件分类聚合`,
      description: `Ohbug 将相同特征的事件进行聚合得到 Issue`,
    },
  },
  {
    key: 'events',
    img: {
      src: require('./images/featuresEvent.png'),
      alt: `events`,
    },
    information: {
      title: `事件详情`,
      description: `通过详情页 根据事件相关的问题信息、用户信息、设备信息、用户行为、堆栈信息等数据，快速定位问题
          还原“问题”现场。`,
    },
  },
  {
    key: 'notification',
    img: {
      src: require('./images/featuresNotice.svg'),
      alt: `notification`,
      props: {
        style: {
          boxShadow: 'none',
        },
      },
    },
    information: {
      title: `实时报警通知`,
      description: `通过邮件通知、浏览器推送、Webhook 等方式实现即时通知。
          <br />
          支持钉钉机器人、企业微信等通知方式。`,
    },
  },
];

const Features: React.FC = () => (
  <>
    {dataSource.map(({ key, img, information }) => (
      <section className={styles.features} key={key}>
        <div className={styles.media}>
          <div className={styles.img} {...img.props}>
            <img src={img.src} alt={img.alt} />
          </div>
        </div>

        <div className={styles.information}>
          <div className={styles.title}>{information.title}</div>
          <div className={styles.description}>{information.description}</div>
        </div>
      </section>
    ))}
  </>
);

export default Features;
