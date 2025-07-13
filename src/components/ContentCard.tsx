
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ContentCardProps {
  title?: string;
  children: string; // Cambiado a string para aceptar Markdown
  className?: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ title, children, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow-soft p-6 mb-6 ${className}`}>
      {title && (
        <h2 className="text-2xl font-semibold text-title-dark mb-4">
          {title}
        </h2>
      )}
      <div className="prose max-w-none text-text-main">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
      </div>
    </div>
  );
};

export default ContentCard;
