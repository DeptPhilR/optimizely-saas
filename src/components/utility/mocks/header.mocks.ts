

import SiteEnum from '@/components/models/enums/SiteEnum';
import { IHeader } from '@/components/models/IHeader';
import image from './image.mocks';

export const header: IHeader = {
  accountLabel: 'account',
  site:SiteEnum.B2B,
  accountMenu: {
    dashboardLink: {
      text: 'Dashboard',
      url: '/',
      linkIcon: 'arrow-right',
      target: 'self',
    },
    logOutLink: {
      text: 'Log Out',
      url: '/',
      linkIcon: 'arrow-right',
      target: 'self',
    },
    links: [
      {
        text: 'mySpecs',
        url: '/',
        linkIcon: 'arrow-right',
        target: 'self',
      },
      {
        text: 'myDRM',
        url: '/',
        linkIcon: 'arrow-right',
        target: 'self',
      },
      {
        text: 'myOrders',
        url: '/',
        linkIcon: 'arrow-right',
        target: 'self',
      },
      {
        text: 'myDocuments',
        url: '/',
        linkIcon: 'arrow-right',
        target: 'self',
      },
    ],
  },
  logo: 'https://www.jotun.com/siteassetsjot03/jotun-logo-new.svg',
  logoAlt: 'logo',
  menuLabel: 'Menu',
  featuredContentImage: image,
  featuredContentLink: {
    text: 'Link',
    url: 'https://jotun.com/',
    linkIcon: 'information',
    target: 'string',
  },
  featuredContentText:
    'Jotuns nye globale fargekart CANVAS er en hyllest til kunstneren som bor i oss, og er designet for å gi inspirasjon, veiledning og oppmuntring til alle som ønsker å skape unike fargeuttrykk hjemme.',
  featuredContentTitle: 'CANVAS - Colour Design by LADY',

  navigation: [
    {
      link: {
        text: 'Home',
        url: '/home',
        linkIcon: 'arrow-right',
        target: 'self',
      },
      children: [],
    },
    {
      link: {
        text: 'Jotun',
        url: '/',
        linkIcon: 'arrow-right',
        target: 'self',
      },
      highlightedLink: {
        text: 'Jotun x Dept',
        url: 'https://www.deptagency.com/en-gb/case/a-complex-multi-site-multi-lingual-migration-to-optimizely/',
        linkIcon: 'arrow-right',
        target: 'self',
      },
      children: [
        {
          text: 'Home',
          url: 'https://www.jotun.com/no-en',
          linkIcon: 'arrow-right',
          target: 'self',
        },
        {
          text: 'Jotun x Optimizely',
          url: 'https://www.optimizely.com/no/insights/jotun-b2b/',
          linkIcon: 'arrow-right',
          target: 'self',
        },
        {
          text: 'Jotun Colour cards',
          url: 'https://www.jotun.com/me-en/decorative/interior/colours/colourcards/128-jotun-colours',
          linkIcon: 'arrow-right',
          target: 'self',
        },
      ],
    },
    {
      link: {
        text: 'Dept',
        url: '/',
        linkIcon: 'arrow-right',
        target: 'self',
      },
      children: [
        {
          text: 'Home',
          url: 'https://www.deptagency.com/en-gb/',
          linkIcon: 'arrow-right',
          target: 'self',
        },
        {
          text: 'Optimizely Expertise',
          url: 'https://www.deptagency.com/en-gb/partner/optimizely/',
          linkIcon: 'arrow-right',
          target: 'self',
        },
      ],
    },
  ],
  secondaryLinks: [
    {
      text: 'Optimizely Hackathon',
      url: 'https://www.optimizely.com/insights/hackathon-london-finals/',
      linkIcon: 'arrow-right',
      target: 'self',
    },
    {
      text: 'SubNav Two',
      url: '/',
      linkIcon: 'arrow-right',
      target: 'self',
    },

    {
      text: 'SubNav Three',
      url: '/',
      linkIcon: 'arrow-right',
      target: 'self',
    },
  ],
  quickLinks: [
    {
      text: 'Optimizely Hackathon',
      url: 'https://www.optimizely.com/insights/hackathon-london-finals/',
      linkIcon: 'arrow-right',
      target: '_blank',
    },
    {
      text: 'Optimizely SaaS',
      url: 'https://docs.developers.optimizely.com/content-management-system/v1.0.0-CMS-SaaS/docs/overview-of-cms-saas',
      linkIcon: 'arrow-right',
      target: '_blank',
    },
  ],
  title: 'Jotun Colour Picker',
};

export default header;
