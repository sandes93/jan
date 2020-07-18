import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import Footer from "./components/Footer/index";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavTabs />
        <Route exact path=  "/"  component={Home} />
        <Route exact path= "/About"  component={About} />
        <Route exact path= "/Projects" component={Projects} />
        <Route path= "/Contact" component={Contact} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
