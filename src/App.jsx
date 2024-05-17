import NavigationBar from "./components/NavigationBar.jsx";
import Home from "./pages/Home.jsx";
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Footer from "./components/Footer.jsx";

import ScrollspyNav from "react-scrollspy-nav";

import './App.css'

function App() {
  return (
    <div className="App">
      <ScrollspyNav
        className="scrollspy-nav"
        scrollTargetIds={["home", "portfolio", "contact"]}
        activeNavClass="is-active"
        scrollDuration="10"
      >
      <NavigationBar/>
      </ScrollspyNav>
      <Home/>
      <Portfolio/>
      <p style={{textAlign: "center"}}>*repository is private, contact for access</p>
      <Contact />
      <Footer/>
    </div>  
  );
}

export default App;
