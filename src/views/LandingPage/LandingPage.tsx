import { Box, Typography } from "@mui/material";
import React from "react";
import { CTACard, HeroSection, Navbar } from "../../components";
import art from "../../assets/graphics2.png";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { HomeContainer, HomePageContainer, Section } from "../../containers";

const LandingPage = () => {
  const user = useSelector((state: RootState) => state.user.user);

  const cardsData = [
    {
      title: "Apply to humans",
      subheading:
        "An employee is someone who gets paid to work for a person or company",
      backgroundColor: "#B6B1F9",
      border: "2px solid black",
      color: "black",
    },
    {
      title: "Instantly stand out",
      subheading:
        "An employee is someone who gets paid to work for a person or company",
      backgroundColor: "#B6E0CC",
      border: "2px solid black",
      color: "black",
    },
    {
      title: "Real time feedbacks",
      subheading:
        "An employee is someone who gets paid to work for a person or company",
      backgroundColor: "#F0D0DC",
      border: "2px solid black",
      color: "black",
    },
  ];
  return (
    <HomePageContainer>
    
      <Navbar user={user} />
      <HeroSection image={art} heading1="It has never been easier to hire perfect employee" />
      <Section display="flex" justifyContent="space-around" flexDirection="row">
        {cardsData.map((card, index) => {
          return (
            <CTACard
              key={index}
              title={card.title}
              subheading={card.subheading}
              backgroundColor={card.backgroundColor}
              border={card.border}
              color={card.color}
            />
          );
        })}
      </Section>
    </HomePageContainer>
  );
};

export default LandingPage;
