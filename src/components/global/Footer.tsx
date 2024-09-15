// import { Link } from 'react-router-dom';

const FOOTER_LINKS = [
  {
    name: 'Feature',
    links: [
      {
        name: 'Events Discovery',
        path: '/',
      },
    ],
  },
  {
    name: 'Company',
    links: [
      {
        name: 'About Us',
        path: '/about',
      },
      {
        name: 'FAQs',
        path: '/faqs',
      },
      {
        name: 'Careers',
        path: '/careers',
      },
      {
        name: 'Support',
        path: '/support',
      },
    ],
  },
  {
    name: 'Contact Us',
    links: [
      {
        name: 'info@event.com',
        path: 'mailto:info@event.com',
      },
      {
        name: '+234 178 291 9201',
        path: 'tel:+2341782919201',
      },
      {
        name: '20 Ajamokarema Street, Lagos Oshodi, Off France Road Karamo',
        path: '#', // Placeholder since it's an address
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-8 px-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Branding Section */}
        <div className="flex-1 mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">rendezvous</h1>
          <p className="mt-2 text-sm font-light max-w-xs">
            Your personal event sherpa, creating awesome one click at a time.
          </p>
        </div>

        {/* Links Section */}
        <nav className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {FOOTER_LINKS.map((section, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-lg font-semibold mb-2">{section.name}</h3>
              <ul className="space-y-2">
                {section.links.map((link, lIndex) => (
                  <li key={`link-${lIndex}`}>
                    <a
                      href={link.path}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile Responsiveness */}
      <style>{`
        footer {
          padding-left: 1rem;
          padding-right: 1rem;
        }

        @media (min-width: 768px) {
          footer {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
