import React from 'react'
import { HeroSection, Navbar, CTACard } from "../../components";
import {Section} from '../../containers';
import Albert from '../../assets/albert.jpeg';
const Home = () => {
  return (
    <>
    <HeroSection image={Albert}/>
      <Section display="flex" justifyContent="space-around" flexDirection="row">
      <CTACard title="Apply to humans" subheading="An employee is someone who gets paid to work for a person or company" backgroundColor="#B6B1F9" border="2px solid black" color="black" />
      <CTACard title="Apply to humans" subheading="An employee is someone who gets paid to work for a person or company" backgroundColor="#B6E0CC" border="2px solid black" color="black" />
      <CTACard title="Apply to humans" subheading="An employee is someone who gets paid to work for a person or company" backgroundColor="#F0D0DC" border="2px solid black" color="black" />
      </Section>
    </>
  )
}

export default Home