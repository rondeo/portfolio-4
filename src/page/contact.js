import React from "react";
import ContactBox from '../component/contact-component'
import PageHeader from "../component/page-header";
export default class Contact extends React.Component {
  contactList = [
    {
      title:'LOCATION',
      text:'Sangdo Road, Dongjak-gu, Seoul',
      link:'http://naver.me/xbkJIaUR',
      target:true,
      button:'DETAIL'
    },
    {
      title:'PHONE',
      text:'010 - 3327 - 6744',
      link:'tel:01033276744',
      target:false,
      button:'CALL'
    },
    {
      title:'EMAIL',
      text:'khyunjun2 @ gmail.com',
      link:'mailto:khyunjun2@gmail.com',
      target:false,
      button:'SEND'
    },
  ]
  render() {
    const title = "<span class='point-purple'>PLEASE</span> CONTACT <span class='point-purple'>ME</span>"
    const txt = ["제가 <span class='point-purple'>필요</span>하다면 <span class='point-purple'>연락</span>주세요."]
    return (
      <div className="page contact" id="contact">
        <PageHeader headTitle={title} headTxt={txt} color="purple" />
        <div className="contact-wrap">
          <div className="contact-list">
            {this.contactList.map((item,index) => {
              return <ContactBox key={index} title={item.title} text={item.text} link={item.link} target={item.target} button={item.button}/>
            })}
          </div>
        </div>
      </div>
    )
  }
}
