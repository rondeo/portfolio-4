import React from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export default class PortfolioBox extends React.Component {
  render() {
    const {title,imageUrl,content,link} = this.props;
    return (
      <div className="portfolio-box">
        <div className="image">
          <a href={link} target="_blank"><img src={imageUrl} alt={title}/></a>
        </div>
        <div className="portfolio-box-inner">
          <strong className="title">{title}</strong>
          <ul className="list">
            {content.map((item,index) => {
              return <li key={index}>{ReactHtmlParser(item)}</li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}
