import { useState } from 'react';
import SideBar from '../components/common/side-bar';
import GlobalProvider from '../providers/global-provider';
import { Outlet, useLocation } from 'react-router-dom';

export const Layout = () => {
  const location = useLocation();

  return (
    <GlobalProvider>
      <div className='wrapper d-flex align-items-stretch'>
          <SideBar />
          <main role='main' className= 'home-content theme-Bg1'>
          <section className='content-body'>
            <div key={location.key}>
              <Outlet />
            </div>
          </section>
        </main>
      </div>
    </GlobalProvider>
  );
};
