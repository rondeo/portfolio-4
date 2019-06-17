import React from "react";
import PageHeader from "../component/page-header";
import { Form, Input, TextArea, Button } from "../component/form-component";
export default class Contact extends React.Component {
  render() {
    const title = "<span class='point-purple'>PLEASE</span> CONTACT <span class='point-purple'>ME</span>"
    const txt = ["제가 <span class='point-purple'>필요</span>하다면 <span class='point-purple'>연락</span>주세요."]
    return (
      <div className="page contact" id="contact">
        <PageHeader headTitle={title} headTxt={txt} color="purple" />
        <div className="contact-wrap">
          <ul>
            <li>
              <strong><span className="point-purple">LO</span>CAT<span className="point-purple">ION</span></strong>
              <p><span className="point-purple">Sangdo Road</span>, Dongjak-gu, <span className="point-purple">Seoul</span></p>
              <a href="http://naver.me/xbkJIaUR" target="_blank">DETAIL</a>
            </li>
            <li>
              <strong><span className="point-purple">P</span>HO<span className="point-purple">NE</span></strong>
              <p>0<span className="point-purple">1</span>0 <span className="point-purple">-</span> 33<span className="point-purple">27</span> <span className="point-purple">-</span> 6744</p>
              <a href="tel:01033276744" target="_blank">CALL</a>
            </li>
            <li>
              <strong><span className="point-purple">E</span>MA<span className="point-purple">IL</span></strong>
              <p>khyun<span className="point-purple">jun2</span>@<span className="point-purple">gmail</span>.com</p>
              <a href="mailto:khyunjun2@gmail.com">SEND</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
