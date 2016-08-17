/* @flow */
import React from 'react'
import classes from './Biz.scss'
import Nav from '../Nav'

export default class Biz extends React.Component {
  constructor(props) {
    super(props)
    this.handleChangeSystem = this.handleChangeSystem.bind(this)
  }

  handleChangeSystem(system) {
    this.props.all.showBiz(system)
  }

  render() {
    let items;
    if(this.props.all.biz.current.value){
        let allBizs = this.props.all.biz.current.value
        items = allBizs.map((item, index) => {
            return(
                <tr>
                    <td>{item.system}</td>
                    <td>{item.column}</td>
                    <td>{item.playStart}</td>
                    <td>{item.playFinish}</td>
                    <td>{item.numOfNeeds}</td>
                    <td>{item.allReadyTime}</td>
                    <td>{item.state}</td>
                </tr>
            )
        });
    }
    return (
  <div>
    <Nav changeSystem={this.handleChangeSystem} systems={this.props.all.biz.systems} />
    <div className="table-responsive">
    <table className='table table-hover table-bordered'>
        <thead>
            <tr>
                <td>日期</td>
                <td>系统</td>
                <td>栏目名</td>
                <td>播出时段</td>
                <td>开播到位素材条数</td>
                <td>全部素材到位时间</td>
                <td>播出情况</td>
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

export default Biz
