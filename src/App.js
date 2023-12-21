import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Allcomments from "./pages/Allcomments";
import Artist from "./pages/Artist";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Outlets from "./pages/Outlets";
import Nitecube from "./pages/Nitecube";
import Images from "./pages/Images";
import Videos from "./pages/Videos";
import Events from "./pages/Events";
import TermsAndConditions from "./pages/TermsAndConditions";
import CompanyProfile from "./pages/CompanyProfile";
import Privacy from "./pages/Privacy";
import PropertyRegister from "./pages/PropertyRegister";
import Adminlogin from "./pages/Adminlogin";
import Threelogin from "./pages/Threelogin";
import Userlogin from "./pages/Userlogin";
import Artistlogin from "./pages/Artistlogin";
import Outletlogin from "./pages/Outletlogin";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mt-5 mb-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artists" element={<Artist />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
            <Route path="/outlets" element={<Outlets />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/allcomments" element={<Allcomments />} />
            <Route path="/nitecube" element={<Nitecube />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/propertyregister" element={<PropertyRegister />} />
            <Route path="/adminlogin" element={<Adminlogin />} />
            <Route path="/threelogin" element={<Threelogin />} />
            <Route path="/userlogin" element={<Userlogin />} />
            <Route path="/outletlogin" element={<Outletlogin />} />
            <Route path="/artistlogin" element={<Artistlogin />} />
            <Route
              path="/termsandconditions"
              element={<TermsAndConditions />}
            />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/companyprofile" element={<CompanyProfile />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
