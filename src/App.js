import React, { useState } from 'react';
import './App.css';
import Text from 'react-text';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import dictionary from './data/texts';
import IndexPage from './pages/Index';
import Diving from './pages/Diving';
import Bira from './pages/Bira';
import Contact from './pages/Contact';
import Prices from './pages/Prices';

function App() {
  const getCookie = (name) => {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');
    let i;
    for (i = 0; i < ca.length; i + 1) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  };
  const setCookie = (name, value, days) => {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${(value || '')}${expires};path=/`;
  };
  const setLang = (lang) => { return setCookie('AppLang', lang, 60); };
  const getLang = () => {
    let lang = getCookie('AppLang');
    if (typeof lang === 'undefined') {
      lang = 'en';
    }
    setLang(lang);
    return lang;
  };
  const [lang, setStateLang] = useState(getLang());
  const changeLang = (l) => {
    setLang(l);
    setStateLang(l);
  };
  return (
    <div className="App">
      <Text language={getLang()} dictionary={dictionary}>   
        <Router>
          <Header lang={getLang()} langClickHandler={changeLang}></Header>
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
            <Route path="/prices" exact>
              <Prices />
            </Route>
          </Switch>
        </Router>   
      </Text>
    </div>
  );
}

export default App;
