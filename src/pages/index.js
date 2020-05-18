import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Monitoreo con Zabbix</>,
    imageUrl: 'img/templates.svg',
    description: (
      <>
        En la red de datos de la Universidad Francisco de
        Paula Santander sede Cúcuta y Campos Elíseos se
        implanto Zabbix, una herramienta de código abierto
        que permite monitorear y registrar en tiempo real la
        disponibilidad, el uso de recursos, los parámetros
        de red y el estado de los dispositivos, servidores,
        aplicaciones y base de datos.
      </>
    ),
  },
  {
    title: <>¿Por qué Zabbix?</>,
    imageUrl: 'img/visualization.svg',
    description: (
      <>
        Zabbix es uno de los sistema de monitoreo open source más
        completos del mercado, cuenta con una interfaz web fácil e
        intuitiva que permite visualizar todos los componentes
        monitoreados ​​en diversas formas (gráficos, tablas, mapas,
        pantallas, etc). Utiliza un mecanismo de notificación
        flexible que permite configurar medios de envio como correo
        electrónico, SMS, Jabber.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--6', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className="text--center">{title}</h3>
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
              to={'zabbix'}>
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
