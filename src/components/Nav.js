import React from 'react';
import NavItem from './NavItem';

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    let systems = this.props.systems;
    let systems_ = systems.map((system) => {
      return (
        <NavItem changeSystem={this.props.changeSystem} system={system} />
      )
    })
    return(
    <nav className="navbar navbar-default">
      <ul className='nav navbar nav-pills'>
        {systems_}
        <li role="presentation" className='nav-pills'><a href='#' onClick={() => this.props.changeSystem('GETALL')}>全部</a></li>
      </ul>
    </nav>
  )}
}