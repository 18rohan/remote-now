import { HeroSection, Navbar, CTACard } from "../../components";
import { Section } from "../../containers";
import Albert from "../../assets/albert.jpeg";
import {HomePageContainer} from '../../containers/';
const Home = () => {
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
      <HeroSection image={Albert} heading1="Let's find your next employee!" />
      <Section display="flex" justifyContent="space-around" flexDirection="row" >
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

export default Home;
