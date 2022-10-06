import { Container } from "@mui/system";
import { useState } from "react";
import "./App.css";
//Import component
import { HeroSection, Navbar, CTACard } from "./components";
import {Section} from './containers';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar />
    
      <HeroSection />
      <Section display="flex" justifyContent="space-around" flexDirection="row">
      <CTACard title="Apply to humans" subheading="An employee is someone who gets paid to work for a person or company" backgroundColor="#B6B1F9" border="1px solid black" color="black" />
      <CTACard title="Apply to humans" subheading="An employee is someone who gets paid to work for a person or company" backgroundColor="#B6E0CC" border="1px solid black" color="black" />
      <CTACard title="Apply to humans" subheading="An employee is someone who gets paid to work for a person or company" backgroundColor="#F0D0DC" border="1px solid black" color="black" />
      </Section>
    
    </>
  );
}

export default App;
