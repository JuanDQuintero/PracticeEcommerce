import React from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps extends React.PropsWithChildren<{}> {
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={twMerge('bg-white shadow-md rounded-md w-fit', className)}>
      {children}
    </div>
  );
};

export default Card;
