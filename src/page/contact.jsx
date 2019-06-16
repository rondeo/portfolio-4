import React from "react";
import PageHeader from "../component/page-header";
export default class Contact extends React.Component {
  render() {
    const title = "<span class='point-purple'>PLEASE</span> CONTACT <span class='point-purple'>ME</span>"
    return (
      <div className="page contact">
        <PageHeader headTitle={title} color="purple">

        </PageHeader>
      </div>
    )
  }
}
