import React, {useState} from 'react';
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
  const changeLang = (lang) => {
    setLang(lang);
    setStateLang(lang);
  }
  const getLang = () => {
		var lang = getCookie('AppLang');
		if (typeof lang === 'undefined'){
			lang = 'en';
		}
		setLang(lang);
		return lang;
  }
  const setLang = (lang) => {
		return setCookie('AppLang', lang, 60);
	}
	const getCookie = (name) => {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0) ===' '){
        c = c.substring(1,c.length);
      }
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length,c.length);
      }
		}
	}
	const setCookie = (name, value, days) =>  {
		var expires = "";
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days*24*60*60*1000));
			expires = "; expires=" + date.toUTCString();
		}
		document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  };
  const [lang, setStateLang] = useState(getLang());
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
          </Switch>
        </Router>   
      </Text>
    </div>
  );
}

export default App;
