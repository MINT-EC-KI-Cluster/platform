export default {
    logo: <span>Lerne mit KI-Projekten und starte eigene!</span>,
    project: {
      link: 'https://github.com/MINT-EC-KI-Cluster',

    },
    docsRepositoryBase: 'https://github.com/MINT-EC-KI-Cluster/platform/tree/main/',

    search: {
        placeholder: 'Suche',
    },
    banner: {
        key: 'a',
        text: (
          <a href="https://github.com/MINT-EC-KI-Cluster" target="_blank">
            Aktuell in Arbeit. Github Repo →
          </a>
        )
      },
    useNextSeoProps() {
        return {
          titleTemplate: '%s – MINT-EC KI-Cluster',
        }
      },

      footer: {
        text: (
          <span>
            © {new Date().getFullYear()} MINT-EC KI-Cluster
          </span>
        )
      },

      themeSwitch: {
        useOptions() {
          return {
            light: 'Hell',
            dark: 'Dunkel',
            system: 'System'
          }
        }
      }
    // ... other theme options
  }