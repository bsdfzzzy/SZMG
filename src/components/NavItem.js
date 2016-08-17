import React from 'react';

export default class NavItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    let id = this.props.system.id;
    return(
        <li role="presentation" className='nav-pills'><a href='#' onClick={() => this.props.changeSystem({id})}>{this.props.system.system}</a></li>
    )
  }
}