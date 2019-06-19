import React from "react";

export default class ContactBox extends React.Component {
  
  render(){
    const {title,text, link, target, button} = this.props;
    return (
      <div className="box">
        <strong>{title}</strong>
        <p>{text}</p>
        <a href={link} target="_blank">{button}</a>
      </div>
    )
  }

}