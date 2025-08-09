import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "optimistic cloud",
  description: "Documentation",
  themeConfig: {
    logo: './logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Services',
        items: [
          { text: 'Vaultwarden', link: '/vaultwarden' },
          { text: 'Opengist', link: '/opengist' },
          { text: 'Papra', link: '/papra' },
          { text: 'Gitea', link: '/gitea' },
          { text: 'Pocket ID', link: '/pocket-id' },
          { text: 'Immich', link: '/immich' },

        ]
      },
      {
        text: 'External Services & Infrastructure',
        items: [
          { text: 'IONOS', link: '/ionos' },
          { text: 'Healthchecks.io', link: '/healthchecks.io' },
          { text: 'Hetzner', link: '/hetzner' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/optimistic-cloud' }
    ]
  }
})
