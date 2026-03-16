import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialLinks from "./components/SocialLinks";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import JobRoles from "./components/JobRoles";
import Footer from "./components/Footer";
import Bubbles from "./components/Bubbles";

export default function App() {
  return (
    <div className="min-h-screen bg-code-bg relative">
      <Bubbles />
      <Navbar />
      <main>
        <Hero />
        <SocialLinks />
        <Resume />
        <Projects />
        <Certifications />
        <JobRoles />
      </main>
      <Footer />
    </div>
  );
}
