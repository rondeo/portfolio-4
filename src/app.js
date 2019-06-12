import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'mobx-react';
import './scss/default.scss';
import Header from './component/header';
import Intro from './component/intro';
import Skill from './component/skill';
import Store from './store/store';
import Nav from './component/nav';

const store = new Store(); // 스토어 인스턴스를 만들고
class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <div className="wrap">
              <Header />
              <Intro />
              <Nav />
          </div>
        </Provider>
        
    );
  }
}

var app = document.getElementById("app");
ReactDOM.render(<App name="Kimik" />, app);