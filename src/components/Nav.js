import React from 'react';

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
    <nav className="navbar navbar-default">
      <ul className='nav navbar nav-pills'>
        <li role="presentation" className='nav-pills'><a href='#' onClick={() => this.props.changeSystem('FOUR_DMZ')}>4楼DMZ区巡检表</a></li>
        <li role="presentation" className='nav-pills'><a href='#' onClick={() => this.props.changeSystem('FOUR_NORMAL')}>4楼日常巡检表</a></li>
        <li role="presentation" className='nav-pills'><a href='#' onClick={() => this.props.changeSystem('FIVE_ONE')}>5-1系统巡检表</a></li>
        <li role="presentation" className='nav-pills'><a href='#' onClick={() => this.props.changeSystem('FIVE_TWO')}>5-2系统巡检表</a></li>
        <li role="presentation" className='nav-pills'><a href='#' onClick={() => this.props.changeSystem('FIVE_THREE')}>5-3系统巡检表</a></li>
        <li role="presentation" className='nav-pills'><a href='#' onClick={() => this.props.changeSystem('SIX_MDC')}>6楼MDC巡检表</a></li>
        <li role="presentation" className='nav-pills'><a href='#' onClick={() => this.props.changeSystem('SIX_BIZ')}>6楼业务巡检表</a></li>
        <li role="presentation" className='nav-pills'><a href='#' onClick={() => this.props.changeSystem('EIGHT')}>8楼系统巡检表</a></li>
        <li role="presentation" className='nav-pills'><a href='#' onClick={() => this.props.changeSystem('ELEVEN')}>11楼系统巡检表</a></li>
        <li role="presentation" className='nav-pills'><a href='#' onClick={() => this.props.changeSystem('AVID')}>AVID系统日常巡查登记表</a></li>
        <li role="presentation" className='nav-pills'><a href='#' onClick={() => this.props.changeSystem('TV')}>电视剧缩编系统巡检表</a></li>
        <li role="presentation" className='nav-pills'><a href='#' onClick={() => this.props.changeSystem('GETALL')}>全部</a></li>
      </ul>
    </nav>
  )}
}