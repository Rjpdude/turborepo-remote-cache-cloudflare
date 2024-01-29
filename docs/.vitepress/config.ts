import { defineConfig } from 'vitepress';
import projectPackageJson from '../../package.json';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Turborepo Remote Cache',
  description:
    'An implementation of the turborepo-remote-cache server custom made for Cloudflare Workers',
  sitemap: {
    hostname: 'https://cloudflare.turborepo-remote-cache.dev/',
  },
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
    },
    editLink: {
      pattern:
        'https://github.com/AdiRishi/turborepo-remote-cache-cloudflare/edit/master/docs/:path',
    },
    // @ts-expect-error - Bug in type definition
    lastUpdated: true,
    logo: 'https://public-assets.turborepo-remote-cache.dev/images/logo.png',
    nav: [
      { text: 'Docs', link: '/introduction/getting-started' },
      {
        text: projectPackageJson.version,
        items: [
          {
            text: 'Changelog',
            link: 'https://github.com/AdiRishi/turborepo-remote-cache-cloudflare/blob/master/CHANGELOG.md',
          },
          {
            text: 'Contributing',
            link: 'https://github.com/AdiRishi/turborepo-remote-cache-cloudflare/blob/master/.github/CONTRIBUTING.md',
          },
        ],
      },
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/introduction/getting-started' },
          { text: 'Project Configuration', link: '/introduction/configuration' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AdiRishi/turborepo-remote-cache-cloudflare' },
    ],
    footer: {
      message: 'Made with ❤️',
    },
  },
  head: [
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-4FKXFQBLZR' }],
    [
      'script',
      {},
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-4FKXFQBLZR');
      `,
    ],
  ],
});