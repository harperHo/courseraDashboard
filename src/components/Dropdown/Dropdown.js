import React, { Component } from 'react';

export default class Dropdown extends Component {

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

  render() {
    const { text, children } = this.props;
    const { expand } = this.state;

    return (
      <div className={`dropdown ${expand ? 'expand' : ''}`}  onMouseEnter={this.handleToggler} onMouseLeave={this.handleToggler}>
        <div className="dropdown-toggler">
          <span>{text}</span>
        </div>
        <div className='dropdown-content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
