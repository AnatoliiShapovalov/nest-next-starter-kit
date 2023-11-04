import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className={inter.className}>{children}</div>
    </>
  );
};

export default Layout;
