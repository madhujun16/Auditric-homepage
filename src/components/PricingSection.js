import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaCheck, FaPlus } from 'react-icons/fa';

const PricingCard = ({ title, price, description, features, isPopular, onSelect }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`relative bg-white rounded-xl shadow-lg p-6 ${
        isPopular ? 'border-2 border-blue-500' : 'border border-gray-200'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-3 py-0.5 rounded-full text-xs font-medium shadow-md">
            {t('pricing.popular')}
          </span>
        </div>
      )}
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
        <div className="text-2xl font-bold text-blue-600 mb-1">{price}</div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <ul className="space-y-2 mb-4 text-sm">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <FaCheck className="text-green-500 mt-0.5 mr-2 flex-shrink-0 text-xs" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={onSelect}
        className={`w-full py-2 px-4 rounded-lg font-medium transition-colors text-sm ${
          isPopular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        {t('pricing.cta')}
      </button>
    </motion.div>
  );
};

const PricingSection = () => {
  const { t } = useTranslation();

  const handleGetStarted = () => {
    // Implement your get started logic here
    console.log('Get Started clicked');
  };

  const handleContactSales = () => {
    // Implement your contact sales logic here
    console.log('Contact Sales clicked');
  };

  return (
    <section id="pricing" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {t('pricing.title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <PricingCard
            title={t('pricing.baseLicense.title')}
            price={t('pricing.baseLicense.basePrice')}
            description={t('pricing.baseLicense.includes')}
            features={t('pricing.baseLicense.baseFeatures', { returnObjects: true })}
            onSelect={handleContactSales}
          />
          <PricingCard
            title={t('pricing.fullLicense.title')}
            price={t('pricing.fullLicense.price')}
            description={t('pricing.fullLicense.description')}
            features={t('pricing.fullLicense.features', { returnObjects: true })}
            isPopular={true}
            onSelect={handleGetStarted}
          />
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            {t('pricing.baseLicense.addOns.title')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {t('pricing.baseLicense.addOns.features', { returnObjects: true }).map(
              (feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-gray-700 text-sm"
                >
                  <FaPlus className="text-blue-500 flex-shrink-0 text-xs" />
                  <span>{feature}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 