import React from 'react';
import './App.css';
import Header from './components/Header';
import Text from 'react-text';
import dictionary from './data/texts';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import IndexPage from './pages/Index';
import Diving from './pages/Diving';
import Bira from './pages/Bira';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Text language="en" dictionary={dictionary}>   
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/" exact>
              <IndexPage />
            </Route>
            <Route path="/diving" exact>
              <Diving />
            </Route>
            <Route path="/bira" exact>
              <Bira />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
          </Switch>
        </Router>   
      </Text>
    </div>
  );
}

export default App;
