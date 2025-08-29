import React from 'react';

// Search keywords
const searchKeywords: string[] = [
  'Pakistan top software companies',
  'Best IT companies in Pakistan',
  'Leading digital agencies Pakistan',
  'Pakistan web development companies',
  'Software development firms in Pakistan',
  'Best branding agencies Pakistan',
  'Digital marketing agencies Pakistan',
  'Top software houses Pakistan',
  'IT service providers Pakistan',
  'Best mobile app development Pakistan',
  'Pakistan software solutions company',
  'Software outsourcing Pakistan',
  'Creative agencies Pakistan',
  'Pakistan UI/UX design companies',
  'Top web designers Pakistan',
  'Best SEO agencies Pakistan',
  'Social media marketing Pakistan',
  'Top digital marketing firms Pakistan',
  'AI software companies Pakistan',
  'Cloud solutions Pakistan',
  'Best IT consulting Pakistan',
  'Enterprise software Pakistan',
  'Best startup software agencies Pakistan',
  'Web app development Pakistan',
  'Mobile app companies Pakistan',
  'Tech companies in Pakistan',
  'Pakistan software exports',
  'IT innovation companies Pakistan',
  'Custom software development Pakistan',
  'Full-stack development companies Pakistan',
  'Top software developers Pakistan',
  'Pakistan IT solutions provider',
  'Leading tech firms Pakistan',
  'Best web development agency Pakistan',
  'Software consultancy Pakistan',
  'IT outsourcing company Pakistan',
  'Pakistan digital transformation firms',
  'Top branding and marketing agency Pakistan',
  'Best software house Karachi',
  'Best IT firm Lahore',
  'Islamabad software company',
  'AI development agency Pakistan',
  'Machine learning companies Pakistan',
  'Pakistan software startups',
  'Pakistan top IT services',
  'Creative software agency Pakistan',
  'Pakistan website design companies',
  'Best e-commerce development Pakistan',
  'IT product development Pakistan',
  'Pakistan best AI solutions company',
];

const softwareAgencies = {
  agencies: [
    {
      name: 'Systems Limited',
      website: 'https://www.systemsltd.com',
      country: 'Pakistan',
      specialization: ['Software Development', 'IT Services', 'Enterprise Solutions'],
      category: 'Software',
    },
    {
      name: 'NETSOL Technologies',
      website: 'https://www.netsoltech.com',
      country: 'Pakistan',
      specialization: ['FinTech Software', 'Cloud Solutions', 'Custom Software Development'],
      category: 'Software',
    },
    {
      name: '10Pearls',
      website: 'https://www.10pearls.com',
      country: 'Pakistan',
      specialization: ['Mobile Apps', 'AI Solutions', 'Web Development'],
      category: 'Software',
    },
    {
      name: 'Creative Chaos',
      website: 'https://www.creativechaos.com',
      country: 'Pakistan',
      specialization: ['Software Development', 'UX/UI Design', 'Digital Transformation'],
      category: 'Software',
    },
    {
      name: 'Arbisoft',
      website: 'https://www.arbisoft.com',
      country: 'Pakistan',
      specialization: ['Custom Software', 'AI & ML Solutions', 'Web Applications'],
      category: 'Software',
    },
    {
      name: 'Bramerz',
      website: 'https://www.bramerz.com',
      country: 'Pakistan',
      specialization: ['Digital Marketing', 'Branding', 'Web Development'],
      category: 'Digital Marketing',
    },
    {
      name: 'Creative Thumb',
      website: 'https://www.creativethumb.com',
      country: 'Pakistan',
      specialization: ['UI/UX Design', 'Web Design', 'Social Media Marketing'],
      category: 'Digital Marketing',
    },
  ],
};

const KeywordList: React.FC = () => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md" style={{ display: 'none' }}>
      <h2 className="text-xl font-bold mb-3">Welcome to Refly Agency</h2>

      <h3 className="text-lg font-semibold mt-2">Search Keywords</h3>
      <ul className="list-disc list-inside space-y-1 mb-4">
        {searchKeywords.map((keyword, index) => (
          <li key={index} className="text-gray-800">
            {keyword}
          </li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold mt-2">Top Software & Digital Agencies</h3>
      <ul className="list-disc list-inside space-y-1">
        {softwareAgencies.agencies.map((agency, index) => (
          <li key={index} className="text-gray-800">
            <strong>{agency.name}</strong> ({agency.category}) -{' '}
            <a href={agency.website} target="_blank" className="text-blue-600 underline">
              Visit
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeywordList;
