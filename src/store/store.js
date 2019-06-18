import { observable, action } from 'mobx';
export default class Store {
   menu = ['INTRO','SKILL','PORTFOLIO','CONTACT'];
   url = 'https://kimik-portfolio.herokuapp.com'
   portfolioLength = 3;
   dataArray = [];
   pageNum = 0;
   @observable dataMaxStatus = false;
   @observable portfolioList = null;
   
   @action callPortfolioApi = () => {
      this.pageNum ++;
      fetch(this.url+`/Portfolios?_start=${(this.pageNum-1)*this.portfolioLength}&_limit=${this.pageNum*(this.portfolioLength+1)}`).then((res) => {
            res.json().then(data => {
               data.map((item,index)=>{
                  if(!(index == this.portfolioLength))
                  this.dataArray.push(item)
               })
               this.portfolioList = this.dataArray;
               if(data.length < this.portfolioLength+1){
                  alert("마지막 페이지 입니다.")
                  this.dataMaxStatus = true
               }
               
            })
      })
   }
   pageMove(e) {
      e.preventDefault();
      let box = document.querySelector(".wrap");
      function easeInOutCubic(t, b, c, d) {
         if ((t /= d / 2) < 1) {
           return c / 2 * t * t * t + b;
         }
         return c / 2 * ((t -= 2) * t * t + 2) + b;
       }
      function PageScroll(scrollable, distance, duration) {

         var startTime;
         var startPos = scrollable.scrollTop;
         var maxScroll = scrollable.scrollHeight - scrollable.offsetHeight;
         var scrollEndValue = startPos + distance < maxScroll ? distance : maxScroll - startPos;
       
         function scroll(timestamp) {
           startTime = startTime || timestamp;
           var elapsed = timestamp - startTime;
           var progress = easeInOutCubic(elapsed, startPos, scrollEndValue, duration);
           scrollable.scrollTop = progress;
       
           if (elapsed < duration) {
             requestAnimationFrame(scroll);
           }
         }
         requestAnimationFrame(scroll);
      }
      PageScroll(box,document.querySelector(e.target.getAttribute("href")).offsetTop-box.scrollTop,600);
   }
   pageLoad = () => {
      // document.querySelectorAll(".page").forEach((el)=>{
      //    this.offsetArray.push(el.offsetTop-50)
      // })
   }
   pageScroll =(e) => {
      // this.offsetArray.map((top,i) => {
      //    if(st >= this.offsetArray[i] && st <= this.offsetArray[i+1]){

      //    }
      // })
   }

}
