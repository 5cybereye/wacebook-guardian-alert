
import React from 'react';

const Footer = () => {
  const languages = [
    'English (US)', 'Español', 'Français (France)', 'Italiano', 'Deutsch',
    'العربية', 'हिन्दी', '中文(简体)', 'Português (Brasil)', 'Русский'
  ];

  const links = [
    'Sign Up', 'Log In', 'Messenger', 'Facebook Lite', 'Video', 'Places',
    'Games', 'Marketplace', 'Meta Pay', 'Meta Store', 'Meta Quest',
    'Ray-Ban Meta', 'Meta AI', 'Instagram', 'Threads', 'Fundraisers',
    'Services', 'Voting Information Center', 'Privacy Policy', 'Privacy Center',
    'Groups', 'About', 'Create ad', 'Create Page', 'Developers', 'Careers',
    'Cookies', 'AdChoices', 'Terms', 'Help', 'Contact uploading and non-users'
  ];

  return (
    <footer className="bg-white px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Languages */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600 mb-4">
          {languages.map((lang, index) => (
            <React.Fragment key={lang}>
              <a
                href="#"
                className={`hover:underline transition-colors duration-200 ${
                  index === 0 ? 'text-gray-800' : 'hover:text-blue-600'
                }`}
              >
                {lang}
              </a>
            </React.Fragment>
          ))}
          <button className="text-gray-400 hover:text-gray-600 ml-2 border border-gray-300 px-2 py-1 text-xs">
            +
          </button>
        </div>

        <hr className="border-gray-300 my-4" />

        {/* Links */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600 mb-6">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="hover:underline hover:text-blue-600 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500">
          <p>Meta © 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
