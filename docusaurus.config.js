module.exports = {
  title: 'SISTEMA DE MONITOREO DE RED', // Title for your website.
  tagline: 'UFPS Cúcuta & Campo Elíseos',
  favicon: 'img/NMS.ico',
  url: 'https://localhost', // Your website URL
  //url: 'https://LizethRE2.github.io',
  baseUrl: '/', // Base URL for your project */
  //baseUrl: '/documentacion/',
  organizationName: 'LizethRE2', // Usually your GitHub org/user name.
  projectName: 'MonitoreoDocs', // Usually your repo name.
  themeConfig: {
    disableDarkMode: true, //Switch de modo Black
    sidebarCollapsible: true, //Desplegable navegación
    navbar: {
      hideOnScroll: false, //Header oculto
      title: 'Sistema de Monitoreo de Red',
      logo: {
        alt: 'CSI - NMS',
        src: 'img/NMS.ico',
      },
      links: [
        {
          to: 'docs/inicio',
          label: 'Documentación',
          position: 'right'
        },
        {
          href: 'https://github.com/LizethRE2/MonitoreoDocs',
          label: 'Iniciar Sesión',
          position: 'right'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '',
          items: [
            {
              html: `
              <div style="text-align: center;">
                <a href="" rel="noreferrer noopener" aria-label="CSI-UFPS">
                  <img class="img-responsive" src="/img/ImgFooter.ico" alt="CSI - UFPS" style="width: 140px;"/>
                  </a>
              </div>
              `,
            },
          ],
        },
        {
          title: 'Documentación',
          items: [
            {
              label: 'Instalación',
              to: 'docs/instalacionH',
            },
            {
              label: 'Configuración',
              to: 'docs/configuracionH',
            },
            {
              label: 'Administración',
              to: 'docs/administracionH',
            },
          ],
        },
        {
          title: 'Enlaces de Interés',
          items: [
            {
              label: 'UFPS',
              href: 'https://ww2.ufps.edu.co',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/LizethRE2/MonitoreoDocs',
            },
            {
              label: 'Docusaurus',
              href: 'https://v2.docusaurus.io',
            },
          ],
        },
        {
          title: 'Contactos',
          items: [
            {
              html: `
              <address style="font-style: normal;">
                      Avenida Gran Colombia No. 12E-96 Barrio Colsag, Edificio Aula Sur, Oficina 405 - C.S.I<br>
                      San José de Cúcuta - Colombia<br>
                      Teléfono: (057)(7) 5776655 Ext: 277<br>
                      Correo electrónico: <a href="mailto:csi@ufps.edu.co" class="">csi@ufps.edu.co</a>
                  </address>
              `,
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} C.S.I. Todos los derechos reservados.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/LizethRE2/MonitoreoDocs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
