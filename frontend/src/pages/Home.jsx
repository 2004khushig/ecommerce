import React from 'react';
import Hero from '../components/Hero';
import LatestColection from '../components/LatestCollection';
import Bestseller from '../components/Bestseller';
import OurPolicy from '../components/OurPolicy';
import NewsLetterBox from '../components/NewsLetterBox';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div>
      <Hero />
      <LatestColection />
      <Bestseller />
      <OurPolicy/>
      <NewsLetterBox/>
    </div>
  );
}
export default Home;