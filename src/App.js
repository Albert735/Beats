import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Section2 from "./Pages/Section2";
import Specs from "./Pages/Specs";
import Case from "./Pages/Case";
import Section3 from "./Pages/Section3";
import Products from "./Pages/Products";
import Audio from "./Pages/Audio";
import Section4 from "./Pages/Section4";
import Footer from "./Pages/Footer";
import Bottom from "./Pages/Bottom";

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
      <Audio />
      <Footer />
      <Bottom />
    </div>
  );
}

export default App;
