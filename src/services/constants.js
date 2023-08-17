
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

export const leaders = [
  {
    name: 'Craig Oliver',
    role: '',
    description: '',
    number: '+44 7893 944113',
    email: leaderEmails[NAMESPACE].craig,
    linkedin: 'https://www.linkedin.com/in/craigoliver-spectrum-search/'
  },
  {
    name: 'Scott Darby',
    role: '',
    description: '',
    number: '+44 7360 543515',
    email: leaderEmails[NAMESPACE].scott,
    linkedin: 'https://www.linkedin.com/in/scott-darby-738b7560/'
  },
  {
    name: 'Peter Wood',
    role: '',
    description: 'Peter, a distinguished 3-time tech founder and CTO, boasts a proven track record in scaling businesses and securing significant capital. With over a decade in the tech industry, he has mastered the art of innovation and strategic leadership. Currently, he lends his unparalleled expertise as a pivotal advisor and mentor at Outlier Ventures accelerator, where his insights have not only catalyzed the growth of emerging companies but also shaped the next generation of tech leaders. A visionary in AI innovation, Peter has pioneered proprietary technology that revolutionizes the client and candidate experience here at [company name]. Beyond his professional achievements, Peter is a sought-after consultant at various companies, further solidifying his position as a thought leader in the tech space.',
    number: '+44 7830 319093',
    email: leaderEmails[NAMESPACE].pete,
    linkedin: 'https://www.linkedin.com/in/peter-wood-632058151/'
  }
];
