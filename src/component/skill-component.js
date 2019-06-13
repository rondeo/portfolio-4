import React from "react";

export default class SkillBox extends React.Component {
  render() {
    const {boxName,title,skill,skillList} = this.props;
    return (
      <div className={`box ${boxName}`}>
        <strong className="tit">{title}</strong>
        <p className="skill-para">
          {skill.map((item,index) => {
            if(skill.length-1 == index){
              return <span key={index}>{item}</span>
            }else{
              return <span key={index}>{item}&nbsp;<span className="point">/</span>&nbsp;</span>
            }
          })}
        </p>
        <ul className="skill-list">
          {skillList.map((item,index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
      </div>
    )
  }
}
