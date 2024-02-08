import HeroSection from "@/components/LandingPage/HeroSection";
import ChallengesSection from "@/components/LandingPage/ChallengesSection";
import ServicesSection from "@/components/LandingPage/ServicesSection";
import TrustSection from "@/components/LandingPage/TrustSection";
import ReviewSection from "@/components/LandingPage/ReviewSection";
import ChooseUsSection from "@/components/LandingPage/ChooseUsSection";
import TeamSection from "@/components/LandingPage/TeamSection";
import LastSection from "@/components/LandingPage/LastSection";
import Footer from "../components/Footer";
import React from "react";

function Home() {
  return (
    <div>
      <HeroSection />

      <section className="">
        <ChallengesSection />
        <ServicesSection />

        <TrustSection />
        <ReviewSection />
        <ChooseUsSection />
        <TeamSection />
        <LastSection />
        <Footer />
      </section>
    </div>
  );
}

export default Home;
