import React from 'react';

export default class Nav extends React.Component {
  render(){
    return(
    <nav className="navbar navbar-default">
      <ul className='nav navbar nav-pills'>
        <li role="presentation" className='nav-pills'><a href='#'>4楼DMZ区巡检表</a></li>
        <li role="presentation" className='nav-pills'><a href='#'>4楼日常巡检表</a></li>
        <li role="presentation" className='nav-pills'><a href='#'>5-1系统巡检表</a></li>
        <li role="presentation" className='nav-pills'><a href='#'>5-2系统巡检表</a></li>
        <li role="presentation" className='nav-pills'><a href='#'>5-3系统巡检表</a></li>
        <li role="presentation" className='nav-pills'><a href='#'>6楼MDC巡检表</a></li>
        <li role="presentation" className='nav-pills'><a href='#'>6楼业务巡检表</a></li>
        <li role="presentation" className='nav-pills'><a href='#'>8楼系统巡检表</a></li>
        <li role="presentation" className='nav-pills'><a href='#'>11楼系统巡检表</a></li>
        <li role="presentation" className='nav-pills'><a href='#'>AVID系统日常巡查登记表</a></li>
        <li role="presentation" className='nav-pills'><a href='#'>电视剧缩编系统巡检表</a></li>
      </ul>
    </nav>
  )}
}