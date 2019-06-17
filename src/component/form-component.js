import React, { Component } from "react";

class Form extends Component {
  render() {
    const {action,method,submit,children} = this.props
    return (
      <form action={action} method={method} onSubmit={submit}>
        {children}
      </form>
    )
  };
}

class Input extends Component {
  render() {
    const {type,value} = this.props;
    return (
      <input type={type} value={value} />
    )
  }
}
class TextArea extends Component {
  render() {
    const {type,value} = this.props;
    return (
      <textarea value={value} ></textarea>
    )
  }
}
class Button extends Component {
  render() {
    const {type,children} = this.props;
    return (
      <button type={type}>{children}</button>
    )
  }
}
export { Form, Input, TextArea, Button };