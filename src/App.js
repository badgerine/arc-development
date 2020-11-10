import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/Theme';

import Header from './ui/Header';
import Footer from './ui/Footer';
import LandingPage from './components/LandingPage';
import Services from './components/Services';
import CustomSoftware from './components/CustomSoftware';
import MobileApps from './components/MobileApps';
import Websites from './components/Websites';
import Revolution from './components/Revolution';

function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
        <Switch>
          <Route exact path='/' render={(props) => <LandingPage {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}/>} />
          {/* <Route exact path='/' component={() => <div style={{height: '1000px'}}>Home</div>} /> */}
          <Route exact path='/services' render={(props) => <Services {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}/>} />
          <Route exact path='/customsoftware' render={(props) => <CustomSoftware {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}/>} />
          <Route exact path='/mobileapps' render={(props) => <MobileApps {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}/>} />
          <Route exact path='/websites' render={(props) => <Websites {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}/>} />
          <Route exact path='/revolution' render={(props) => <Revolution {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}/>} />
          <Route exact path='/about' component={() => <div>About</div>} />
          <Route exact path='/contact' component={() => <div>Contact</div>} />
          <Route exact path='/estimate' component={() => <div>Estimate</div>} />
        </Switch>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
