
import React from 'react';

interface PageTitleProps {
  title: string;
  subtitle?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-title-dark border-b-2 border-gray-200 pb-2">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-2 text-lg text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default PageTitle;
