import React, { useState, Suspense } from "react";
import "./App.css";
import Text from "react-text";
import dictionary from "./data/texts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Gallery from "./pages/Gallery";
import Footer from "./components/Layout/Footer";
import Header from "./components/Header";
import { isMobile } from "react-device-detect";
import TagManager from "react-gtm-module";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
import "./mobile.scss";
const Diving = React.lazy(() => import("./pages/Diving"));
const Insurance = React.lazy(() => import("./pages/Insurance"));
const IndexPage = React.lazy(() => import("./pages/Index"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Accommodation = React.lazy(() => import("./pages/Accommodation"));
const BiraProject = React.lazy(() => import("./pages/BiraProject"));
const Bira = React.lazy(() => import("./pages/Bira"));
const Prices = React.lazy(() => import("./pages/Prices"));
const history = createBrowserHistory();
// Initialize google analytics page view tracking
history.listen((location) => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

const trackingId = "UA-135953670-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

function App() {
  const tagManagerArgs = {
    gtmId: "GTM-5KP855G",
  };
  TagManager.initialize(tagManagerArgs);

  const changeLang = (lang) => {
    setLang(lang);
    setStateLang(lang);
  };
  const getLang = () => {
    var lang = getCookie("AppLang");
    if (typeof lang === "undefined") {
      lang = "en";
    }
    setLang(lang);
    return lang;
  };
  const setLang = (lang) => {
    return setCookie("AppLang", lang, 60);
  };
  const getCookie = (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
  };
  const setCookie = (name, value, days) => {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  };
  // eslint-disable-next-line no-unused-vars
  const [lang, setStateLang] = useState(getLang());
  const updateActivePage = () => {};
  updateActivePage();
  return (
    <>
      <div className={`App ${isMobile ? "mobile" : "browser"}`}>
        <Text language={getLang()} dictionary={dictionary}>
          <Router history={history}>
            <Suspense fallback={<div></div>}>
              <Header lang={getLang()} langClickHandler={changeLang}></Header>
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path="/" exact component={IndexPage} />
                <Route path="/diving" exact component={Diving} />
                <Route path="/bira" exact component={Bira} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/prices" exact component={Prices} />
                <Route path="/accommodation" exact component={Accommodation} />
                <Route path="/biraproject" exact component={BiraProject} />
                <Route path="/insurance" exact component={Insurance} />
              </Switch>
            </Suspense>
          </Router>
        </Text>
      </div>
      <Footer />
    </>
  );
}

export default App;
