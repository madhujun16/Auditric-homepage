import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'French' },
    { code: 'es', name: 'Spanish' },
    { code: 'de', name: 'German' },
    { code: 'pt', name: 'Portuguese' }
  ];

  const handleLanguageChange = (event) => {
    const newLang = event.target.value;
    i18n.changeLanguage(newLang);
    // Store the language preference in localStorage
    localStorage.setItem('preferredLanguage', newLang);
  };

  return (
    <select
      onChange={handleLanguageChange}
      value={i18n.language}
      className="bg-gray-800 text-white text-sm p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Select language"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher; 