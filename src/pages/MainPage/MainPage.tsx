import Header from "../../components/common/Header/Header";
import { ServicesSection } from "../../components/common/ServicesSection/ServicesSection";
import { AboutUs } from "../../components/common/AboutUs/AboutUs";
import Footer from "../../components/common/Footer/Footer";
import { FirstScreen } from "../../components/FirstScreen/FirstSection";

export const MainPage = () => {
  return (
    <>
      <Header />
      <FirstScreen />
      <ServicesSection />
      <AboutUs />
      <Footer />
    </>
  );
};
