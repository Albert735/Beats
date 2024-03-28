import Navbar from "./Components/Navbar";
import Home from "./Sections/Home";
import Section2 from "./Sections/Section2";
import Specs from "./Sections/Specs";
import Case from "./Sections/Case";
import Section3 from "./Sections/Section3";
import Products from "./Sections/Products";
import Section4 from "./Sections/Section4";
import Footer from "./Sections/Footer";
import Bottom from "./Sections/Bottom";
import Shopping from "./Sections/Shopping";
import Section5 from "./Sections/Section5";
import Testimonial from "./Sections/Testimonial";

function App() {
  return (
    <div className="bg-[#FFFAFA] dark:bg-[#0E0F10] dark:text-white ">
      <Navbar />
      <Home />
      <Section2 />
      <Specs />
      <Case />
      <Section3 />
      <Products />
      <Section4 />
      <Shopping />
      <Section5 />
      <Testimonial />
      <Footer />
      <Bottom />
    </div>
  );
}

export default App;
