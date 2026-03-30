import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Services from "../components/services";
import About from "../components/about";
import WhyUs from "../components/why-us";
import Team from "../components/team";
import Resources from "../components/resources";
import Testimonials from "../components/testimonials";
import Faq from "../components/faq";
import Contact from "../components/contact";
import Footer from "../components/footer";
import ScrollProgress from "../components/scroll-progress";
import StickyCta from "../components/sticky-cta";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyUs />
      {/* <Team /> */}
      {/* <Resources /> */}
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
      <StickyCta />
    </main>
  );
}
