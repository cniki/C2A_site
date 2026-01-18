import Navbar from "@/app/components/layout/Navbar";
import Hero from "@/app/components/home/Hero/Hero"
import LegalSolutions from "@/app/components/home/LegalSolutions/LegalSolutions"
import OurProcess from "@/app/components/home/OurProcess/OurProcess"
import OurMission from "@/app/components/home/Mission/Mission"
import Resources from "@/app/components/home/Resources/Resources"
import JourneyForm from "@/app/components/home/JourneyForm/JourneyForm";
import FAQ from "@/app/components/home/FAQ/FAQ";
import Footer from "@/app/components/layout/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LegalSolutions />
      <OurProcess />
      <OurMission />
      <Resources />
      <JourneyForm />
      <FAQ/>
      <Footer />
    </>
  );
}
