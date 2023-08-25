import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Headercomp from './Headercomp';
import Levels from './LevelsModule';
import TopModule from './TopModule';
import Founder from './FounderModule';
import Testimonial from'./TestimonialsModule'
import ContactForm from './contact';
import Footercomp from './Footercomp';

function App() {
  return (
    <div>
     <Headercomp></Headercomp>
     <TopModule></TopModule>
     <Levels></Levels>
     <Founder></Founder>
     <Testimonial></Testimonial>
     <ContactForm></ContactForm>
     <Footercomp></Footercomp>
    </div>
  );
}

export default App;
