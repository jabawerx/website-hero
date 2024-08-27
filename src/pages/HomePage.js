import React from 'react';
import { CompanyHeader, NavBar, BannerArea, AboutUs, 
          Services, Software, NewsTease, Contact, Footer } from '../components';



export const HomePage = () => {
  return(
    <>
      <CompanyHeader>
        <NavBar></NavBar>
      </CompanyHeader>
      <BannerArea />
      <AboutUs />
      <Services />
      <Software />
      <NewsTease />
      <Contact />
      <Footer />
    </>
    
  );
}
