import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'mobx-react';
import './scss/default.scss';
import Header from './page/header';
import Intro from './page/intro';
import Skill from './page/skill';
import Porfolio from './page/portfolio';
import Contact from './page/contact';
import Store from './store/store';
import Nav from './page/nav';

const store = new Store(); 
class App extends React.Component {
  
  render() {
    return (
        <Provider store={store}>
          <div className="wrap">
              <Header />
              <Intro />
              <Skill />
              <Porfolio />
              <Contact />
          </div>
        </Provider>
        
    );
  }
}

var app = document.getElementById("app");
ReactDOM.render(<App name="Kimik" />, app);