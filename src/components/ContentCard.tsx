
import React from 'react';

interface ContentCardProps {
  title?: string;
  children: React.ReactNode;
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
        {children}
      </div>
    </div>
  );
};

export default ContentCard;
