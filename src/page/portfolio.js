import React from "react";
import PortfolioBox from "../component/portfolio-component";
import { observer, inject } from 'mobx-react';
import PageHeader from "../component/page-header";

@inject('store')
@observer
export default class Portfolio extends React.Component {
  componentDidMount () {
    this.props.store.callPortfolioApi();
  }
  render() {
    const {store} = this.props;
    const data = store.portfolioList;
    
    let portfolioEl = null;
    if(data){
      portfolioEl = data.map((item) => {
        const contentArray = [];
        item.Content.split('\n').map((line) =>
          contentArray.push(line)
        );
        return <PortfolioBox title={item.Title} imageUrl={item.Image.url}content={contentArray} key={item.id} link={item.link}></PortfolioBox>
      })
    }else{
      portfolioEl = <p className="empty">데이터가 없습니다.</p>
    }
    const title = 'I <span class="point-blue">WOR</span>KED <span class="point-blue">PROJECT</span>';
    const text = ['<strong class="point-blue">2014.01</strong>부터 <strong class="point-blue">2019.04</strong> 까지 진행했던 <strong class="point-blue">주요 프로젝트 목록</strong>입니다.'];
    return (
      <div className="page portfolio" id="portfolio">
        <PageHeader color="blue" headTitle={title} headTxt={text}/>
        <div className="portfolio-wrap">
          {portfolioEl}
        </div>
        {store.dataMaxStatus ? false : <div className="call-api-btn">
          <a href="#" onClick={store.callPortfolioApi}>프로젝트 더보기</a>
        </div>}
      </div>
    )
  }
}

