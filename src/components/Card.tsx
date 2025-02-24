import React, { FC, MouseEventHandler, ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps extends React.PropsWithChildren<{}> {
  className?: string;
  onClick?: MouseEventHandler;
}

const Card: FC<CardProps> = ({
  children = null,
  className = '',
  onClick,
}): ReactElement => {
  return (
    <div className={twMerge('bg-white shadow-md rounded-md', className)}>
      {children}
    </div>
  );
};

export default Card;
