import React, { PureComponent } from 'react';

export default class SidebarList extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      expand: false,
    }

    this.handleToggler = this.handleToggler.bind(this);
    this.getTable = this.getTable.bind(this);
  }

  handleToggler() {
    const { expand } = this.state;

    this.setState({
      expand: !expand,
    });
  }

  getTable(e) {
    // const { getTable } = this.props;
    const id = e.currentTarget.getAttribute('data-id');

    console.log('tableId: ' + id);

    // return getTable(id);
  }

  renderItems(items) {
    const result = [];

    items.forEach(item => {
      const id = item.get('id');
      result.push(
        <li key={id} className="item" data-id={id} onClick={this.getTable}>
          <span className="text">{item.get('name')}</span>
        </li>
      );
    });

    return result;
  }

  render() {
    const { className, category, items } = this.props;
    const { expand } = this.state;

    return (
      <li className={`item ${expand ? 'expand' : ''}`} onClick={this.handleToggler}>
        <span className="text">{category}</span>
        <ul className="list sub">
          {this.renderItems(items)}
        </ul>
      </li>
    );
  }
}
