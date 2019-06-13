import React from "react";
import { observer, inject } from 'mobx-react';

@inject('store')
export default class Header extends React.Component {
  render() {
    const {store}  = this.props;
    return (
        <header id="header">
            <div className="inside">
              <h1 className="logo"><a href="#intro">DEV.<span className="point">K</span></a></h1>
              <ul>
                  {store.menu.map((menu,i) => {
                    const low = menu.toLowerCase();
                    const link = "#"+low;
                    return <li key={i}><a href={link} target="_blank" rel="noopener noreferrer">{menu}</a></li>
                  })}
              </ul>
            </div>
        </header>
    )
  }
}
