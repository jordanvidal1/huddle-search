import CraigImg from '../static/huddle/craig.jpg';
import ScottImg from '../static/huddle/scott.jpg';
import PeteImg from '../static/huddle/pete.jpg';

import HuddleSoftware from '../static/huddle/software-and-engineering.svg';
import HuddleArchitecture from '../static/huddle/architecture.svg';
import HuddleDevOps from '../static/huddle/devops.svg';
import HuddleCloud from '../static/huddle/cloud-infrastructure-and-networks.svg';
import HuddleCyber from '../static/huddle/cyber-and-information-security.svg';
import HuddleData from '../static/huddle/data-and-analytics.svg';
import HuddleERP from '../static/huddle/erp-crm-and-hr-systems.svg';
import HuddleChange from '../static/huddle/change-and-transformation.svg';
import HuddleDesign from '../static/huddle/design.svg';
import HuddleProduct from '../static/huddle/product-management.svg';

import HuddleBanking from '../static/huddle/banking.svg';
import HuddleConstruction from '../static/huddle/construction-and-proptech.svg';
import HuddleConsulting from '../static/huddle/consulting.svg';
import HuddleDefence from '../static/huddle/defence.svg';
import HuddleEcommerce from '../static/huddle/ecommerce.svg';
import HuddleFintech from '../static/huddle/fintech.svg';
import HuddleFMCG from '../static/huddle/fmcg-consumer.svg';
import HuddleHealthcare from '../static/huddle/healthcare-and-healthtech.svg';
import HuddleInsurance from '../static/huddle/insurance-and-insuretech.svg';
import HuddleInvestment from '../static/huddle/investment-banking.svg';
import HuddleLife from '../static/huddle/life-sciences.svg';
import HuddleManufacturing from '../static/huddle/manufacturing.svg';
import HuddleMedia from '../static/huddle/media-and-entertainment.svg';
import HuddleNewTech from '../static/huddle/new-tech.svg';
import HuddlePharmaceutical from '../static/huddle/pharmaceutical.svg';
import HuddlePrivate from '../static/huddle/private-equity.svg';
import HuddlePublic from '../static/huddle/public-sector.svg';
import HuddleRetail from '../static/huddle/retail-and-retailtech.svg';
import HuddleTelco from '../static/huddle/telco.svg';

export const SITE_URL = process.env.REACT_APP_SITE_URL;
export const NAMESPACE = process.env.REACT_APP_SITE_NAME;
export const CONTACT_FORM_ID = process.env.REACT_APP_WP_CONTACT_FORM_ID;
export const SUBSCRIBE_FORM_ID = process.env.REACT_APP_WP_SUBSCRIBE_FORM_ID;

const leaderEmails = {
  huddle: {
    craig: 'craig@huddlesearch.com',
    scott: 'scott@huddlesearch.com',
    pete: 'pete@huddlesearch.com',
  },
  unitas: {
    craig: 'craig@unitastalent.com',
    scott: 'scott@unitastalent.com',
    pete: 'pete@unitastalent.com',
  }
}

export const LEADERS = [
  {
    img: CraigImg,
    name: 'Craig Oliver',
    role: NAMESPACE === 'huddle' ? 'Co-Founder & CEO' : 'Co-Founder & Commercial Director',
    description: 'Craig is a proven and highly experienced recruitment entrepreneur having already founded a Global Web3 specialist recruitment agency. With over a decade of recruitment experience, guiding thousands of candidates’ careers and developing and growing many businesses by strategically building highly effective teams at scale and pace. When not scaling tech businesses, he loves spending time with his wife and two sons (ideally on holiday!) as well as getting as much time on the golf course as possible.',
    number: '+44 7893 944113',
    email: leaderEmails[NAMESPACE].craig,
    linkedin: 'https://www.linkedin.com/in/craigoliver-spectrum-search/',
    login: 'co'
  },
  {
    img: ScottImg,
    name: 'Scott Darby',
    role: NAMESPACE === 'huddle' ? 'Co-Founder & CCO' : 'Co-Founder & Managing Director',
    description: 'Scott has been in recruitment for over a decade, having built a very well known and respected personal brand within a multitude of specialist sectors and communities. Scott has led large scale recruitment campaigns and has also supported multiple FTSE listed, PE and VC backed C-suites on various executive hires on a retained basis. Scott is a self-confessed workaholic, and so the little down time he does get is spent with his partner, family and friends – with the odd game of golf thrown in too!',
    number: '+44 7360 543515',
    email: leaderEmails[NAMESPACE].scott,
    linkedin: 'https://www.linkedin.com/in/scott-darby-738b7560/',
    login: 'sd'
  },
  {
    img: PeteImg,
    name: 'Peter Wood',
    role: 'Co-Founder & CTO',
    description: 'Peter, a distinguished 3-time tech founder and CTO, boasts a proven track record in scaling businesses and securing significant capital. With over a decade in the tech industry, he has mastered the art of innovation and strategic leadership. Currently, he lends his unparalleled expertise as a pivotal advisor and mentor at Outlier Ventures accelerator, where his insights have not only catalysed the growth of emerging companies but also shaped the next generation of tech leaders. A visionary in AI innovation, Peter has pioneered proprietary technology that revolutionises the client and candidate experience here at Huddle.',
    // number: '+44 7830 319093',
    email: leaderEmails[NAMESPACE].pete,
    linkedin: 'https://www.linkedin.com/in/peter-wood-632058151/',
    login: 'pw'
  }
];

export const SPECIALISMS = {
  huddle: [
    {
      name: 'Architecture',
      path: '/specialisms/architecture',
      icon: HuddleArchitecture
    },
    {
      name: 'Change & Transformation',
      path: '/specialisms/change-and-transformation',
      icon: HuddleChange
    },
    {
      name: 'Cloud, Infrastructure & Networks',
      path: '/specialisms/cloud-infrastructure-and-networks',
      icon: HuddleCloud
    },
    {
      name: 'Cyber & Information Security',
      path: '/specialisms/cyber-and-information-security',
      icon: HuddleCyber
    },
    {
      name: 'Data & Analytics',
      path: '/specialisms/data-and-analytics',
      icon: HuddleData
    },
    {
      name: 'Design (UI/UX)',
      path: '/specialisms/design',
      icon: HuddleDesign
    },
    {
      name: 'DevOps',
      path: '/specialisms/devops',
      icon: HuddleDevOps
    },
    {
      name: 'ERP, CRM & HR Systems',
      path: '/specialisms/erp-crm-and-hr-systems',
      icon: HuddleERP
    },
    {
      name: 'Product Management',
      path: '/specialisms/product-management',
      icon: HuddleProduct
    },
    {
      name: 'Software & Engineering',
      path: '/specialisms/software-and-engineering',
      icon: HuddleSoftware
    }
  ],
  unitas: [

  ]
};

export const SECTORS = {
  huddle: [
    {
      name: 'Banking, Financial Services, Asset Management',
      path: '/sectors/banking-financial-services-asset-management',
      icon: HuddleBanking
    },
    {
      name: 'Construction & PropTech',
      path: '/sectors/construction-and-proptech',
      icon: HuddleConstruction
    },
    {
      name: 'Consulting',
      path: '/sectors/consulting',
      icon: HuddleConsulting
    },
    {
      name: 'Defence',
      path: '/sectors/defence',
      icon: HuddleDefence
    },
    {
      name: 'E-Commerce',
      path: '/sectors/ecommerce',
      icon: HuddleEcommerce
    },
    {
      name: 'FinTech',
      path: '/sectors/fintech',
      icon: HuddleFintech
    },
    {
      name: 'FMCG/Consumer',
      path: '/sectors/fmcg-consumer',
      icon: HuddleFMCG
    },
    {
      name: 'Healthcare & HealthTech',
      path: '/sectors/healthcare-and-healthtech',
      icon: HuddleHealthcare
    },
    {
      name: 'Insurance & InsureTech',
      path: '/sectors/insurance-and-insuretech',
      icon: HuddleInsurance
    },
    {
      name: 'Investment Banking',
      path: '/sectors/investment-banking',
      icon: HuddleInvestment
    },
    {
      name: 'Life Sciences',
      path: '/sectors/life-sciences',
      icon: HuddleLife
    },
    {
      name: 'Manufacturing',
      path: '/sectors/manufacturing',
      icon: HuddleManufacturing
    },
    {
      name: 'Media & Entertainment',
      path: '/sectors/media-and-entertainment',
      icon: HuddleMedia
    },
    {
      name: 'New Tech',
      path: '/sectors/new-tech',
      icon: HuddleNewTech
    },
    {
      name: 'Pharmaceutical',
      path: '/sectors/pharmaceutical',
      icon: HuddlePharmaceutical
    },
    {
      name: 'Private Equity',
      path: '/sectors/private-equity',
      icon: HuddlePrivate
    },
    {
      name: 'Public Sector',
      path: '/sectors/public-sector',
      icon: HuddlePublic
    },
    {
      name: 'Retail & RetailTech',
      path: '/sectors/retail-and-retailtech',
      icon: HuddleRetail
    },
    {
      name: 'Telco',
      path: '/sectors/telco',
      icon: HuddleTelco
    }
  ],
  unitas: [

  ]
};

export const huddleHref = 'https://www.huddlesearch.com/';
export const unitasHref = 'https://www.unitastalent.com/';
export const spectrumHref = 'https://spectrum-search.com/';
export const huddleLinkedIn = 'https://www.linkedin.com/company/huddlesearch';
export const unitasLinkedIn = 'https://www.linkedin.com/company/unitastalent';
