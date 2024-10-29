import Footer from "./components/Footer";
import Header from "./components/Header";
import * as Section from "./components/LandingPage/";

export default function App() {
  return (
    <>
      <Header />
      <Section.Hero />
      <Section.Intro />
      <Section.Services />
      <Section.Features />
      <Section.Testimonials />
      <Section.CTA />
      <Footer />
    </>
  )
}