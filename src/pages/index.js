import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Monitoreo de redes en tiempo real</>,
    imageUrl: 'img/metric_collection.svg',
    description: (
      <>
        Con más de 2000 monitores de rendimiento de red
        integrados, monitorea métricas de estado y críticas
        tales como pérdida de paquetes, latencia, velocidad,
        errores y descartes, y analiza cuellos de botella en
        el rendimiento.
      </>
    ),
  },
  {
    title: <>Monitoreo de servidores</>,
    imageUrl: 'img/problem_detection.svg',
    description: (
      <>
        Monitoree la utilización de CPU, memoria y disco
        de servidores Windows y Linux. También monitoree
        el rendimiento del host y las máquinas virtuales
        de las plataformas de virtualización VMware,
        Hyper-V y Xen.
      </>
    ),
  },
  {
    title: <>Dashboards personalizables</>,
    imageUrl: 'img/notification.svg',
    description: (
      <>
        Evalúe los dashboards predeterminados o cree los
        suyos propios haciendo uso de más de 200 widgets
        de rendimiento disponibles y coonozca el rendimiento
        de su red de un vistazo.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title} | NMS`}
      description="Sistema de Monitoreo de Red UFPS">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--secondary button--lg',
                styles.getStarted,
              )}
              href={'https://github.com/LizethRE2/MonitoreoDocs'}>
              Empezar
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
