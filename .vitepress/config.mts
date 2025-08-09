import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "optimistic cloud",
  description: "Documentation",
  themeConfig: {
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
        text: 'Workloads',
        items: [
          { text: 'ThinkCentre M700', link: '/m700' },
          { text: 'Raspberry Pi 4', link: '/rpi4' },
          { text: 'Raspberry Pi 2b', link: '/rpi2b' },
          { text: 'Raspberry Pi Zero 2W', link: '/rpi-zero2w' },
          { text: '2 x Dell Optiplex 3080', link: '/optiplex-3080' },
          { text: 'Dell PowerEdge R340', link: '/poweredge-r340' },
        ]
      },
      {
        text: 'External Services & Infrastructure',
        items: [
          { text: 'IONOS', link: '/ionos' },
          { text: 'Healthchecks.io', link: '/healthchecks.io' },
          { text: 'Hetzner', link: '/hetzner' }
        ]
      },
      {
        text: 'Tutorials'
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/optimistic-cloud' }
    ]
  }
})
