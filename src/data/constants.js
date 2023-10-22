import CraigImg from '../static/huddle/craig.jpg';
import ScottImg from '../static/huddle/scott.jpg';
import PeteImg from '../static/huddle/pete.jpg';
import CraigPrimeImg from '../static/prime/craig.jpg';
import ScottPrimeImg from '../static/prime/scott.jpg';
import PetePrimeImg from '../static/prime/pete.jpg';

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
import HuddleECommerce from '../static/huddle/ecommerce.svg';
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

import UnitasCFOFinance from '../static/unitas/cfo-finance-leadership.svg';
import UnitasCommercialFPA from '../static/unitas/commercial-fp&a.svg';
import UnitasDataAnalysis from '../static/unitas/data-analysis-&-bi.svg';
import UnitasFinanceBP from '../static/unitas/finance-business-partnering.svg';
import UnitasGroupFC from '../static/unitas/group-financial-control.svg';
import UnitasGroupFPA from '../static/unitas/group-fp&a.svg';
import UnitasGroupFR from '../static/unitas/group-financial-reporting.svg';
import UnitasGroupTA from '../static/unitas/group-technical-accounting.svg';

import UnitasClothing from '../static/unitas/clothing-retail.svg';
import UnitasECommerce from '../static/unitas/e-commerce.svg';
import UnitasFinTech from '../static/unitas/fintech.svg';
import UnitasFMCG from '../static/unitas/fmcg.svg';
import UnitasFood from '../static/unitas/food-retail.svg';
import UnitasHealthcare from '../static/unitas/healthcare.svg';
import UnitasManufacturing from '../static/unitas/manufacturing.svg';
import UnitasMedia from '../static/unitas/media.svg';
import UnitasPrivate from '../static/unitas/private-equity.svg';
import UnitasEstate from '../static/unitas/real-estate.svg';
import UnitasTechnology from '../static/unitas/technology.svg';
import UnitasVenture from '../static/unitas/venture-capital.svg';

export const SITE_URL = process.env.REACT_APP_SITE_URL;
export const NAMESPACE = process.env.REACT_APP_SITE_NAME;
export const CONTACT_FORM_ID = process.env.REACT_APP_WP_CONTACT_FORM_ID;
export const CONTACT_CHECKBOX_ID = process.env.REACT_APP_WP_CONTACT_CHECKBOX_ID;
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
  },
  prime: {
    craig: 'craig@unitastalent.com',
    scott: 'scott@unitastalent.com',
    pete: 'pete@unitastalent.com',
  },
}

const craigLeader = {
  img: NAMESPACE === 'prime' ? CraigPrimeImg : CraigImg,
  name: 'Craig Oliver',
  role: NAMESPACE === 'huddle' ? 'Co-Founder & CEO' : 'Co-Founder & Commercial Director',
  description: 'Craig is a proven and highly experienced recruitment entrepreneur having already founded a Global Web3 specialist recruitment agency. With over a decade of recruitment experience, guiding thousands of candidates’ careers and developing and growing many businesses by strategically building highly effective teams at scale and pace. When not scaling tech businesses, he loves spending time with his wife and two sons (ideally on holiday!) as well as getting as much time on the golf course as possible.',
  number: '+44 7893 944113',
  email: leaderEmails[NAMESPACE].craig,
  linkedin: 'https://www.linkedin.com/in/craigoliver-spectrum-search/',
  login: 'co'
};

const scottLeader = {
  img: NAMESPACE === 'prime' ? ScottPrimeImg : ScottImg,
  name: 'Scott Darby',
  role: NAMESPACE === 'huddle' ? 'Co-Founder & CCO' : 'Co-Founder & Managing Director',
  description: 'Scott has been in recruitment for over a decade, having built a very well known and respected personal brand within a multitude of specialist sectors and communities. Scott has led large scale recruitment campaigns and has also supported multiple FTSE listed, PE and VC backed C-suites on various executive hires on a retained basis. Scott is a self-confessed workaholic, and so the little down time he does get is spent with his partner, family and friends – with the odd game of golf thrown in too!',
  number: '+44 7360 543515',
  email: leaderEmails[NAMESPACE].scott,
  linkedin: 'https://www.linkedin.com/in/scott-darby-738b7560/',
  login: 'sd'
};

const peteLeader = {
  img: NAMESPACE === 'prime' ? PetePrimeImg : PeteImg,
  name: 'Peter Wood',
  role: 'Co-Founder & CTO',
  description: `Peter, a distinguished 3-time tech founder and CTO, boasts a proven track record in scaling businesses and securing significant capital. With over a decade in the tech industry, he has mastered the art of innovation and strategic leadership. Currently, he lends his unparalleled expertise as a pivotal advisor and mentor at Outlier Ventures accelerator, where his insights have not only catalysed the growth of emerging companies but also shaped the next generation of tech leaders. A visionary in AI innovation, Peter has pioneered proprietary technology that revolutionises the client and candidate experience here at ${NAMESPACE === 'huddle' ? 'Huddle' : 'Unitas'}.`,
  // number: '+44 7830 319093',
  email: leaderEmails[NAMESPACE].pete,
  linkedin: 'https://www.linkedin.com/in/peter-wood-632058151/',
  login: 'pw'
};

export const LEADERS = {
  huddle: [
    craigLeader,
    scottLeader,
    peteLeader
  ],
  unitas: [
    scottLeader,
    craigLeader,
    peteLeader
  ],
  prime: [
    scottLeader,
    craigLeader,
    peteLeader
  ],
};

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
    {
      name: 'CFO/Finance Leadership',
      path: '/specialisms/cfo-finance-leadership',
      icon: UnitasCFOFinance
    },
    {
      name: 'Commercial FP&A',
      path: '/specialisms/commercial-fp-and-a',
      icon: UnitasCommercialFPA
    },
    {
      name: 'Data Analysis & BI',
      path: '/specialisms/data-analysis-and-bi',
      icon: UnitasDataAnalysis
    },
    {
      name: 'Finance Business Partnering',
      path: '/specialisms/finance-business-partnering',
      icon: UnitasFinanceBP
    },
    {
      name: 'Group Financial Control',
      path: '/specialisms/group-financial-control',
      icon: UnitasGroupFC
    },
    {
      name: 'Group FP&A',
      path: '/specialisms/group-fp-and-a',
      icon: UnitasGroupFPA
    },
    {
      name: 'Group Financial Reporting',
      path: '/specialisms/group-financial-reporting',
      icon: UnitasGroupFR
    },
    {
      name: 'Group Technical Accounting',
      path: '/specialisms/group-technical-accounting',
      icon: UnitasGroupTA
    }
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
      path: '/sectors/e-commerce',
      icon: HuddleECommerce
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
    {
      name: 'Clothing Retail',
      path: '/sectors/clothing-retail',
      icon: UnitasClothing
    },
    {
      name: 'E-Commerce',
      path: '/sectors/e-commerce',
      icon: UnitasECommerce
    },
    {
      name: 'FinTech',
      path: '/sectors/fintech',
      icon: UnitasFinTech
    },
    {
      name: 'FMCG',
      path: '/sectors/fmcg',
      icon: UnitasFMCG
    },
    {
      name: 'Food Retail',
      path: '/sectors/food-retail',
      icon: UnitasFood
    },
    {
      name: 'Healthcare',
      path: '/sectors/healthcare',
      icon: UnitasHealthcare
    },
    {
      name: 'Manufacturing',
      path: '/sectors/manufacturing',
      icon: UnitasManufacturing
    },
    {
      name: 'Media',
      path: '/sectors/media',
      icon: UnitasMedia
    },
    {
      name: 'Private Equity',
      path: '/sectors/private-equity',
      icon: UnitasPrivate
    },
    {
      name: 'Real Estate',
      path: '/sectors/real-estate',
      icon: UnitasEstate
    },
    {
      name: 'Technology',
      path: '/sectors/technology',
      icon: UnitasTechnology
    },
    {
      name: 'Venture Capital',
      path: '/sectors/venture-capital',
      icon: UnitasVenture
    }
  ]
};

export const huddleHref = 'https://www.huddlesearch.com/';
export const unitasHref = 'https://www.unitastalent.com/';
export const spectrumHref = 'https://spectrum-search.com/';

export const COMPANY_HREFS = {
  huddle: huddleHref,
  unitas: unitasHref,
  spectrum: spectrumHref
};

export const SOCIAL_HREFS = {
  huddle: {
    linkedin: 'https://www.linkedin.com/company/huddlesearch'
  },
  unitas: {
    linkedin: 'https://www.linkedin.com/company/unitastalent'
  },
  prime: {
    linkedin: 'https://www.linkedin.com/company/theprimegroup'
  }
};
