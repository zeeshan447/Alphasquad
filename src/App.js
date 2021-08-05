import "./App.css";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Layouts/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Pricing } from "./components/Pricing/Pricing";
import { CaseStudy } from "./components/CaseStudies/CaseStudy";
import { CaseStudyInner } from "./components/CaseStudiesInner/CaseStudyInner";
import { Footer } from "./components/Layouts/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/casestudies" component={CaseStudy} />
          <Route path="/faq" component={CaseStudyInner} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
