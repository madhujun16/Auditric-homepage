import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaCheck, FaPlus } from 'react-icons/fa';

const PricingCard = ({ title, price, description, features, isPopular, onSelect }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`relative bg-white rounded-2xl shadow-xl p-8 ${
        isPopular ? 'border-2 border-blue-500' : 'border border-gray-200'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            {t('pricing.popular')}
          </span>
        </div>
      )}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <div className="text-4xl font-bold text-blue-600 mb-2">{price}</div>
        <p className="text-gray-600">{description}</p>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={onSelect}
        className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <PricingCard
            title={t('pricing.fullLicense.title')}
            price={t('pricing.fullLicense.price')}
            description={t('pricing.fullLicense.description')}
            features={t('pricing.fullLicense.features', { returnObjects: true })}
            isPopular={true}
            onSelect={handleGetStarted}
          />
          <PricingCard
            title={t('pricing.baseLicense.title')}
            price={t('pricing.baseLicense.basePrice')}
            description={t('pricing.baseLicense.includes')}
            features={t('pricing.baseLicense.baseFeatures', { returnObjects: true })}
            onSelect={handleContactSales}
          />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {t('pricing.baseLicense.addOns.title')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t('pricing.baseLicense.addOns.features', { returnObjects: true }).map(
              (feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-gray-700"
                >
                  <FaPlus className="text-blue-500 flex-shrink-0" />
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