import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '简单展示',
    Svg: require('@site/static/img/hot-air-balloon.svg').default,
    description: (
      <>
        完整介绍了项目的结构，项目的设计思路，以及API文档，阅读轻松愉快
      </>
    ),
  },
  {
    title: '框架使用方法API文档',
    Svg: require('@site/static/img/com-laptop-code.svg').default,
    description: (
      <>
        整理了框架的使用方法，API文档，和一些使用技巧，方便快速上手
      </>
    ),
  },
  {
    title: '记录开发日志',
    Svg: require('@site/static/img/cha-cloud.svg').default,
    description: (
      <>
        记录开发过程中的心路历程和遇到的各种问题，随着项目推进随时更新
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
