import React from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export default class SkillBox extends React.Component {
  render() {
    const {boxName,title,skill,skillList} = this.props;
    return (
      <div className={`box ${boxName}`}>
        <strong className="tit">{ReactHtmlParser(title)}</strong>
        <p className="skill-para">
          {skill.map((item,index) => {
            if(skill.length-1 == index){
              return <span key={index}>{item}</span>
            }else{
              return <span key={index}>{item}&nbsp;<span className="point-red">/</span>&nbsp;</span>
            }
          })}
        </p>
        <ul className="skill-list">
          {skillList.map((item,index) => {
            return <li key={index}>{ReactHtmlParser(item)}</li>
          })}
        </ul>
      </div>
    )
  }
}
