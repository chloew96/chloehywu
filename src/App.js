import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IntroSlider from './components/IntroSlider';
import { IntroData } from './components/IntroData';
import BackToTop from "react-back-to-top-button";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' />
      </Switch>
      <BackToTop 
        showOnScrollUp
        showAt={100}
        speed={1500}
        easing="easeInOutQuint"
      >
        <span className='backtotop'>Back to top</span>
      </BackToTop>
      <HeroSection />
      <IntroSlider slides ={IntroData}/>
    </Router>
  );
}

export default App;
