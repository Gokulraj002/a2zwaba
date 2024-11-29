import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS file
import './Anime.css';
import './Component/Solutions/solution.css'
import Layout from "./Component/Header/Layout";
import Home from "./Component/Home/Home";
import TryForFree from "./Component/Forms/TryForFree";
import RequestDemo from "./Component/Forms/RequestDemo";
import CareersPage from "./Component/Company/Carrer/Carrer";
import About from "./Component/Company/About/About";
import ContactPage from "./Component/Company/Contact/Contact";
import WhatsappApi from "./Component/Product/Whatsapp/WhatsappApi";
import RcsSms from "./Component/Product/Rcs/RcsSms";
import BulkSms from "./Component/Product/BulkSms/BulkSms";
import VoiceCall from "./Component/Product/VoiceCall/VoiceCall";
import ScrollToTop from "./ScrollToTop";
import Terms from "./Component/TermsPrivacy/Terms";
import Privacy from "./Component/TermsPrivacy/Privacy";
import Service from "./Component/Resources/Services/Service";
import MainFaq from "./Component/Resources/FAQ/FAQ";
import NoPage from "./Component/NoPage/NoPage";
import RealEstate from "./Component/Solutions/RealEstate/RealEstate";
import Gaming from "./Component/Solutions/Gaming/Gaming";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      once: false, // Allow animations to repeat on scroll
      mirror: true, // Re-animate elements when they scroll back into view
    });
    AOS.refresh(); // Refresh AOS to ensure proper initialization
  }, []);

  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="try-for-free/" element={<TryForFree />} />
          <Route path="request-demo/" element={<RequestDemo />} />
          <Route path="career/" element={<CareersPage />} />
          <Route path="about/" element={<About />} />
          <Route path="contact/" element={<ContactPage />} />
          <Route path="whatsapp-api/" element={<WhatsappApi />} />
          <Route path="rcs-sms/" element={<RcsSms />} />
          <Route path="bulk-sms/" element={<BulkSms />} />
          <Route path="voice-call/" element={<VoiceCall />} />
          <Route path="privacy/" element={<Privacy />} />
          <Route path="terms/" element ={<Terms/>} />
          <Route path="services/" element ={<Service/>} />
          <Route path='faq/' element={<MainFaq/>} />
          <Route path="real-estate/" element={<RealEstate/>} />
          <Route path="gaming/" element={<Gaming/>} />
          <Route path='*' element={<NoPage/>} />
         </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
