import React from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export default class PageHeader extends React.Component {
  render() {
    const {headTitle,headTxt,color} = this.props;
    return (
      <header>
        <h2 className={`${color} page-title en`}>{ReactHtmlParser(headTitle)}</h2>
        {headTxt ? headTxt.map((item,index) => {
          return <p key={index} className="txt">{ReactHtmlParser(item)}</p>
        }) : false}
      </header>
    )
  }
}
