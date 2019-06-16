import React from "react";
import { observable, action } from 'mobx';

export default class Store {
   menu = ['INTRO','SKILL','PORTFOLIO','CONTACT'];
   url = 'https://kimik-portfolio.herokuapp.com'
   portfolioLength = 6;
   @observable dataMaxStatus = false;
   @observable portfolioList = null;
   @observable pageNum = 0;
   @action callPortfolioApi = () => {
      this.pageNum ++;
      const that = this;
      const callData = () => {
         return new Promise(function (resolve, reject) {
            fetch(that.url+`/Portfolios?_start=0&_limit=${that.pageNum*that.portfolioLength}`).then((res) => {
               res.json().then(data => {
                  resolve(data)
               })
            })
         });
      }
      const callCount = () => {
         return new Promise(function (resolve, reject) {
            fetch(that.url+`/Portfolios/count`).then((res) => {
               res.text().then(data => {
                  resolve(data)
               })
            })
         });
      }
      Promise.all([callData(), callCount()]).then(function(values) {
         if(values[1] > that.pageNum*that.portfolioLength){
            that.portfolioList = values[0];
         }else{
            that.dataMaxStatus = true
            that.portfolioList = values[0];
         }
      });
   }
}
