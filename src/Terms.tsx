import * as React from 'react';
import termsContent from './terms.md?raw';
import ReactMarkdown from 'react-markdown';

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="prose prose-invert prose-sm max-w-none py-32">
        <ReactMarkdown className="text-gray-300">{termsContent}</ReactMarkdown>
      </div>
    </div>
  );
};

