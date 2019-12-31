import React from 'react';

export default class NavBar extends React.Component {
  render() {
    return (
      <li 
        className={`hover ${this.props.isCurrent ? 'navbar-in-view' : 'navbar-not-in-view'}`}
        onClick={ this.props.onClick }
      >
        {this.props.name}
      </li>
    );
  }
}


