
import React from 'react';
import { IconType } from 'react-icons';

interface AlertBoxProps {
  icon: IconType;
  title: string;
  children: React.ReactNode;
}

const AlertBox: React.FC<AlertBoxProps> = ({ icon: Icon, title, children }) => {
  return (
    <div className="bg-highlight rounded-lg p-4 mt-4 flex items-start">
      <div className="flex-shrink-0">
        <Icon className="h-6 w-6 text-icon-blue" />
      </div>
      <div className="ml-3">
        <h3 className="text-lg font-medium text-title-dark">{title}</h3>
        <div className="mt-2 text-sm text-gray-700">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AlertBox;
