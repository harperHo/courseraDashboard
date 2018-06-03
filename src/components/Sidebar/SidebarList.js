import React, { PureComponent } from 'react';

export default class SidebarList extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      expand: false,
    }

    this.handleToggler = this.handleToggler.bind(this);
  }

  handleToggler() {
    const { expand } = this.state;

    this.setState({
      expand: !expand,
    });
  }

  renderItems(items) {
    const result = [];

    items.forEach(item => {
      result.push(
        <li key={item.get('id')} className="item">
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
