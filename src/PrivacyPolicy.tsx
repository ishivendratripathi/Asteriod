import * as React from 'react';
import privacyPolicyContent from './privacy-policy.md?raw';
import ReactMarkdown from 'react-markdown';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="prose prose-invert prose-sm max-w-none py-32">
        <ReactMarkdown className="text-gray-300">{privacyPolicyContent}</ReactMarkdown>
      </div>
    </div>
  );
};

