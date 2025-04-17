import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Loading({ size = 'medium', fullScreen = false }) {
  const { t } = useTranslation();
  
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  const containerClasses = fullScreen
    ? 'fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50'
    : 'flex items-center justify-center p-4';

  return (
    <div className={containerClasses}>
      <div className="flex flex-col items-center">
        <div className={`${sizeClasses[size]} animate-spin rounded-full border-4 border-blue-200 border-t-blue-600`} />
        <p className="mt-2 text-sm text-gray-600">{t('loading.message')}</p>
      </div>
    </div>
  );
} 