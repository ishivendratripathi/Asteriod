import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

export default function Terms() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/src/terms.md')
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch((error) => console.error('Error loading terms:', error));
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="prose prose-invert prose-sm max-w-none py-32">
        <ReactMarkdown className="text-gray-300">{content}</ReactMarkdown>
      </div>
    </div>
  );
};

