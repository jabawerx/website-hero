import React from 'react';
import { CompanyHeader, NavBar, BannerArea, AboutUs, 
          Hire, Software, BlogTease, Contact, Footer } from '../components';



export const HomePage = () => {
  return(
    <>
      <CompanyHeader>
        <NavBar></NavBar>
      </CompanyHeader>
      <BannerArea />
      <AboutUs />
      <Hire />
      <Software />
      <BlogTease />
      <Contact />
      <Footer />
    </>
    
  );
}
