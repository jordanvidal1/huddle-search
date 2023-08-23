import CraigImg from '../static/huddle/craig.jpg';
import ScottImg from '../static/huddle/scott.jpg';
import PeteImg from '../static/huddle/pete.jpg';

export const SITE_URL = process.env.REACT_APP_SITE_URL;
export const NAMESPACE = process.env.REACT_APP_SITE_NAME;
export const FORM_ID = process.env.REACT_APP_WP_FORM_ID;

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
    role: NAMESPACE === 'huddle' ? 'CEO' : 'CCO',
    description: 'Craig is a proven and highly experienced recruitment entrepreneur having already founded a Global Web3 specialist recruitment agency. With over a decade of recruitment experience, guiding thousands of candidates’ careers and developing and growing many businesses by strategically building highly effective teams at scale and pace. When not scaling tech businesses, he loves spending time with his wife and two sons (ideally on holiday!) as well as getting as much time on the golf course as possible.',
    number: '+44 7893 944113',
    email: leaderEmails[NAMESPACE].craig,
    linkedin: 'https://www.linkedin.com/in/craigoliver-spectrum-search/',
    login: 'co'
  },
  {
    img: ScottImg,
    name: 'Scott Darby',
    role: 'Role',
    description: 'Descripton',
    number: '+44 7360 543515',
    email: leaderEmails[NAMESPACE].scott,
    linkedin: 'https://www.linkedin.com/in/scott-darby-738b7560/',
    login: 'sd'
  },
  {
    img: PeteImg,
    name: 'Peter Wood',
    role: 'Role',
    description: 'Peter, a distinguished 3-time tech founder and CTO, boasts a proven track record in scaling businesses and securing significant capital. With over a decade in the tech industry, he has mastered the art of innovation and strategic leadership. Currently, he lends his unparalleled expertise as a pivotal advisor and mentor at Outlier Ventures accelerator, where his insights have not only catalyzed the growth of emerging companies but also shaped the next generation of tech leaders. A visionary in AI innovation, Peter has pioneered proprietary technology that revolutionizes the client and candidate experience here at [company name]. Beyond his professional achievements, Peter is a sought-after consultant at various companies, further solidifying his position as a thought leader in the tech space.',
    number: '+44 7830 319093',
    email: leaderEmails[NAMESPACE].pete,
    linkedin: 'https://www.linkedin.com/in/peter-wood-632058151/',
    login: 'pw'
  }
];

export const SPECIALISMS = {
  huddle: [
    {name: 'Software & Engineering', path: '/specialisms/software-and-engineering'},
    {name: 'Architecture', path: '/specialisms/architecture'},
    {name: 'DevOps', path: '/specialisms/devops'},
    {name: 'Cloud, Infrastructure & Networks', path: '/specialisms/cloud-infrastructure-and-networks'},
    {name: 'Cyber & Information Security', path: '/specialisms/cyber-and-information-security'},
    {name: 'Data & Analytics', path: '/specialisms/data-and-analytics'},
    {name: 'ERP, CRM & HR Systems', path: '/specialisms/erp-crm-and-hr-systems'},
    {name: 'Change & Transformation', path: '/specialisms/change-and-transformation'},
    {name: 'Design (UI/UX)', path: '/specialisms/design'},
    {name: 'Product Management', path: '/specialisms/product-management'},
  ],
  unitas: [

  ]
};

export const SECTORS = {
  huddle: [
    {name: 'Asset Management', path: '/sectors/asset-management'},
    {name: 'Banking', path: '/sectors/banking'},
    {name: 'Construction & PropTech', path: '/sectors/construction-and-proptech'},
    {name: 'Consulting', path: '/sectors/consulting'},
    {name: 'Defence', path: '/sectors/defence'},
    {name: 'E-Commerce', path: '/sectors/ecommerce'},
    {name: 'Financial Services', path: '/sectors/financial-services'},
    {name: 'FinTech', path: '/sectors/fintech'},
    {name: 'FMCG/Consumer', path: '/sectors/fmcg-consumer'},
    {name: 'Healthcare & HealthTech', path: '/sectors/healthcare-and-healthtech'},
    {name: 'Insurance & InsureTech', path: '/sectors/insurance-and-insuretech'},
    {name: 'Investment Banking', path: '/sectors/investment-banking'},
    {name: 'Life Sciences', path: '/sectors/life-sciences'},
    {name: 'Manufacturing', path: '/sectors/manufacturing'},
    {name: 'Media & Entertainment', path: '/sectors/media-and-entertainment'},
    {name: 'New Tech', path: '/sectors/new-tech'},
    {name: 'Pharmaceutical', path: '/sectors/pharmaceutical'},
    {name: 'Private Equity', path: '/sectors/private-equity'},
    {name: 'Public Sector', path: '/sectors/public-sector'},
    {name: 'Retail & RetailTech', path: '/sectors/retail-and-retailtech'},
    {name: 'Telco', path: '/sectors/telco'},
  ],
  unitas: [

  ]
};

export const huddleHref = 'https://www.huddlesearch.com/';
export const unitasHref = 'https://www.unitastalent.com/';
export const spectrumHref = 'https://spectrum-search.com/';
