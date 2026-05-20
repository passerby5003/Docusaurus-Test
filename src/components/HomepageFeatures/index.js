import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate>简单展示</Translate>,
    Svg: require('@site/static/img/hot-air-balloon.svg').default,
    description: (
      <>
       <Translate>完整介绍了项目的结构，项目的设计思路，以及API文档，阅读轻松愉快</Translate>
      </>
    ),
  },
  {
    title: <Translate>框架使用方法API文档</Translate>,
    Svg: require('@site/static/img/com-laptop-code.svg').default,
    description: (
      <>
        <Translate>整理了框架的使用方法，API文档，和一些使用技巧，方便快速上手</Translate>
      </>
    ),
  },
  {
    title: <Translate>记录开发日志</Translate>,
    Svg: require('@site/static/img/cha-cloud.svg').default,
    description: (
      <>
        <Translate>记录开发过程中的心路历程和遇到的各种问题，随着项目推进随时更新</Translate>
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
