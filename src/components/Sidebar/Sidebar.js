import React, { Component } from 'react';

import SidebarList from './SidebarList';

export default class Sidebar extends Component {

  constructor(props) {
    super(props);
  }

  renderCategories() {
    const { tables } = this.props;
    const result = [];

    tables.forEach((group, category) => {
      result.push(
        <SidebarList key={category} category={category} items={group} />
      );
    });

    return result;
  }


  render() {
    return (
      <div className="sidebar">
        <ul className="list root">
          {this.renderCategories()}
        </ul>
      </div>
    );
  }
}
