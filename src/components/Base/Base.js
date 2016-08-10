import React from 'react'
import classes from './Base.scss'

export default class Base extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
  <div>
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
    <div className="table-responsive">
    <table className='table table-hover'>
        <thead>
            <tr>
                <td>日期</td>
                <td>系统</td>
                <td>系统子项</td>
                <td>责任人A岗</td>
                <td>责任人B岗</td>
                <td>责任人C岗</td>
                <td>巡检人</td>
                <td>设备</td>
                <td>设备管理IP</td>
                <td>类别</td>
                <td>巡检内容（软硬件定性与定量指标通用）</td>
                <td>巡检指标类型</td>
                <td>状态或数据记录</td>
                <td>备注</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>日期</td>
                <td>系统</td>
                <td>系统子项</td>
                <td>责任人A岗</td>
                <td>责任人B岗</td>
                <td>责任人C岗</td>
                <td>巡检人</td>
                <td>设备</td>
                <td>设备管理IP</td>
                <td>类别</td>
                <td>巡检内容（软硬件定性与定量指标通用）</td>
                <td>巡检指标类型</td>
                <td>状态或数据记录</td>
                <td>备注</td>
            </tr>
        </tbody>
    </table>
    </div>
  </div>
  )}
}

export default Base
