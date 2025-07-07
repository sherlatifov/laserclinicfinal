import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

import Home from '../pages/Home';
import Specialists from '../pages/Specialists';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Discount from '../pages/Discount';
import Contact from '../pages/Contact';
import Policy from '../pages/Policy';
import AboutOrganization from '../pages/AboutOrganization';
import TaxDeduction from '../pages/TaxDeduction';
import FAQ from '../pages/FAQ';
import Career from '../pages/Career';
import Reviews from '../pages/Reviews';
import Auth from '../pages/Auth/Auth';

export default function AppRoutes() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/specialists" element={<Specialists />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/discount" element={<Discount />} />
      <Route path="/contacts" element={<Contact />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/about-organization" element={<AboutOrganization />} />
      <Route path="/tax" element={<TaxDeduction />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/career" element={<Career />} />
      <Route path="/reviews" element={<Reviews />} />

      <Route path="/acount" element={<Auth />} />
    </Routes>
    </>
  );
}
