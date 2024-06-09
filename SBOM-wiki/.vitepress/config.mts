import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SBOM-Everywhere Wiki",
  description: "Information and advice about using SBOM in open source projects.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Basics', link: '/basics' },
      { text: 'About us', link: '/about-us'}
    ],

    sidebar: [
      {
        text: 'Essentials',
        items: [
          { text: 'Basics', link: '/basics' },
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Glossary', link: '/glossery' },
          { text: 'FAQ', link: '/faq' }
        ]
      },
      {
        text: 'Cataloges',
        items: [
          { text: 'SBOM Tools', link: '/catalog/index.html' },
          { text: 'SBOM Example Integrations', link: '/example-integrations' },
          { text: 'SBOM Compliance', link: '/sbom-compliance' }
        ]
      },
      {
        text: 'Guidance',
        items: [
          { text: 'SBOM Types', link: '/sbom-types' },
          { text: 'SBOM Naming', link: '/sbom-naming' },
          { text: 'About us', link: '/sbom-working-groups'}
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ossf/sbom-everywhere' }
    ]
  }
})
