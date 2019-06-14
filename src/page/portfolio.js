import React from "react";
import PortfolioBox from "../component/portfolio-component";
import { observer, inject } from 'mobx-react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

@inject('store')
@observer
export default class Portfolio extends React.Component {
  componentDidMount () {
    this.props.store.callPortfolioApi();
  }
  render() {
    const {store} = this.props;
    let data = store.portfolioList;
    let portfolioEl = null;
    console.log(data)
    if(data){
      portfolioEl = data.map((item) => {
        const contentArray = [];
        item.Content.split('\n').map((line) =>
          contentArray.push(line)
        );
        return <PortfolioBox title={item.Title} imageUrl={item.Image.url}content={contentArray} key={item.id} link={item.link}></PortfolioBox>
        
      })
    }else{
      portfolioEl = <p>데이터가 없습니다.</p>
    }
    return (
      <div className="page portfolio">
        <div className="inner">
          {portfolioEl}
        </div>
      </div>
    )
  }
}

