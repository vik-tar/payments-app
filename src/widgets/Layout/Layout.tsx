import React, {FC, PropsWithChildren} from 'react';
import './Layout.scss';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="layout">
      {children}
    </main>
  );
};

export default Layout;
