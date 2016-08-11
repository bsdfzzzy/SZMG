import React from 'react'
import classes from './Base.scss'
import Nav from '../Nav'

export default class Base extends React.Component {
  constructor(props) {
    super(props)
    this.handleChangeSystem = this.handleChangeSystem.bind(this)
  }

  handleChangeSystem(system) {
    this.props.all.showBase(system)
  }

  render () {
    let items;
    if(this.props.all.base.current.value){
        let allBases = this.props.all.base.current.value
        items = allBases.map((item, index) => {
            let date = new Date(item.date)
            return(
                <tr>
                    <td>{(date.getYear() + 1900) + '-' + (date.getMonth() + 1) + '-' + date.getDate()}</td>
                    <td>{item.system}</td>
                    <td>{item.subsystem}</td>
                    <td>{item.supervisor_1}</td>
                    <td>{item.supervisor_2}</td>
                    <td>{item.supervisor_3}</td>
                    <td>{item.inspector}</td>
                    <td>{item.experiment}</td>
                    <td>{item.IP}</td>
                    <td>{item.type}</td>
                    <td>{item.work}</td>
                    <td>{item.category}</td>
                    <td>{item.stateOrData}</td>
                    <td>{item.More}</td>
                </tr>
            )
        });
    }
    
    return (
  <div>
    <Nav changeSystem={this.handleChangeSystem} />
    <button type="button" className="btn btn-info" style={{marginBottom: '20px'}}>添加一条信息</button>
    <button type="button" className="btn btn-info" style={{marginBottom: '20px', marginLeft: '20px'}}>备用</button>
    <div className="table-responsive">
    <table className='table table-hover table-bordered .table-condensed'>
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
                <td>巡检内容</td>
                <td>巡检指标类型</td>
                <td>状态或数据记录</td>
                <td>备注</td>
            </tr>
        </thead>
        <tbody>
            {items}
        </tbody>
    </table>
    </div>
  </div>
  )}
}

export default Base
