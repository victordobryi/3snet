import { FC, PropsWithChildren } from 'react';

const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className='wrapper'>{children}</div>;
};

export default Container;
