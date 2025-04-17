import React from 'react';
import { useTranslation } from 'react-i18next';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    // You can also log the error to an error reporting service here
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              {this.props.t('error.title')}
            </h2>
            <p className="text-gray-600 mb-4">
              {this.props.t('error.message')}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              {this.props.t('error.refresh')}
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Wrap the ErrorBoundary with translation
export default function TranslatedErrorBoundary(props) {
  const { t } = useTranslation();
  return <ErrorBoundary {...props} t={t} />;
} 