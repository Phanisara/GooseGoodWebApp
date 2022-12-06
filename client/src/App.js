import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import HomePage from './pages/Home';
import InformationPage from './pages/Info';
import ManualPage from './pages/Manual';
import SettingPage from './pages/Setting';
import ContactPage from './pages/Contact';
import FarmWaterspinach from './pages/FarmWaterspinach1';
import FarmCantonese from './pages/FarmCantonese1';
import FarmSpinach from './pages/FarmSpinach1';
import'./index.css'
import MainNavigation from './components/MainNavigation';
import Footer from './components/Footer';

function App() {
  return (
    <div  className="contain">
      <Router>
        <MainNavigation />
        <Routes>
          <Route path='/' element= {<HomePage/>} />
          <Route path='/information' element= {<InformationPage/>} />
          <Route path='/manual' element= {<ManualPage/>} />
          <Route path='/setting' element= {<SettingPage/>} />
          <Route path='/contact' element= {<ContactPage/>} />

          <Route path='/farm1/waterspinach' element= {<FarmWaterspinach/>} />
          <Route path='/farm1/cantonese' element= {<FarmCantonese/>} />
          <Route path='/farm1/spinach' element= {<FarmSpinach/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
