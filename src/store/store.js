import React from "react";
import { observable, action } from 'mobx';

export default class Store {
   menu = ['INTRO','SKILL','PORTFOLIO','CONTACT'];
   url = 'https://kimik-portfolio.herokuapp.com'
   @observable portfolioList = null;
   @action callPortfolioApi = () => {
      fetch(this.url+'/Portfolios').then((res) => {
        res.json().then(data => {
          this.portfolioList = data
        })
      })
    }
}
