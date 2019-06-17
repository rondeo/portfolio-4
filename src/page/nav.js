import React from "react";
import { observer, inject } from 'mobx-react';


@inject('store')
export default class Nav extends React.Component {
  render() {
    const {store}  = this.props;
    return (
      <div id="nav">
        <span className="dot"></span>
        <ul>
            {store.menu.map((menu,i) => {
              const low = menu.toLowerCase();
              const link = "#"+low;
              return <li key={i}><a href={link} onClick={(e)=>store.pageMove(e)}>{menu}</a></li>
            })}
        </ul>
      </div>
    )
  }
}
