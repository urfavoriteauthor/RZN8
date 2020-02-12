import React from 'react';
import Home from './pages/home'
import '../src/App.css';
// import Cardrows from './components/cardrows'
// import Maincard from './components/maincard'
import Content from './pages/content'
// import Navbar from './components/navbar'
import Contact from './pages/contact'
// import Social from './components/social'

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';



function App() {
  return (
       <Router>
    <div className="App">
    <Switch>
       
            <Route exact path='/' component={Home} />
            <Route path='/content' component={Content} />
            <Route path='/contact' component={Contact} />

            
      
    </Switch>
    </div>
</Router>
  );
}

export default App;

