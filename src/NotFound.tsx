import * as React from 'react';
import { Link } from 'react-router-dom';
import Page from '@/components/Page';

const NotFound = () => {
  return (
    <Page>
      <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Oops! You're lost in space.</p>
      <Link
        to="/"
        className="px-3 py-1 bg-none text-white border border-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
      >
        <span className="text-gray-300">Back to the ship &rarr;</span>
      </Link>
    </Page>
  );
};

export default NotFound;
