
import React from 'react';
import { IconType } from 'react-icons';

interface AlertBoxProps {
  icon: IconType;
  title: string;
  children: React.ReactNode;
  type?: 'info' | 'warning' | 'error';
}

const AlertBox: React.FC<AlertBoxProps> = ({ icon: Icon, title, children, type = 'info' }) => {
  let bgColorClass = '';
  let textColorClass = '';
  let iconColorClass = '';

  switch (type) {
    case 'info':
      bgColorClass = 'bg-blue-100';
      textColorClass = 'text-blue-700';
      iconColorClass = 'text-blue-500';
      break;
    case 'warning':
      bgColorClass = 'bg-yellow-100';
      textColorClass = 'text-yellow-700';
      iconColorClass = 'text-yellow-500';
      break;
    case 'error':
      bgColorClass = 'bg-red-100';
      textColorClass = 'text-red-700';
      iconColorClass = 'text-red-500';
      break;
    default:
      bgColorClass = 'bg-blue-100'; // Default a un azul claro si no se especifica tipo
      textColorClass = 'text-blue-700';
      iconColorClass = 'text-blue-500';
  }

  return (
    <div className={`${bgColorClass} rounded-lg p-4 mt-4 flex items-start`}>
      <div className="flex-shrink-0">
        <Icon className={`h-6 w-6 ${iconColorClass}`} />
      </div>
      <div className="ml-3">
        <h3 className={`text-lg font-medium ${textColorClass}`}>{title}</h3>
        <div className={`mt-2 text-sm ${textColorClass}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AlertBox;
