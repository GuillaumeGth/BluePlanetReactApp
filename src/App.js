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
import IndexPage from './pages/Index'

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
          </Switch>
        </Router>   
      </Text>
    </div>
  );
}

export default App;
