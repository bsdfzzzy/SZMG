/* @flow */
import React from 'react'
import classes from './Event.scss'
import Nav from 'components/Nav'

export default class Event extends React.Component {
  constructor(props) {
    super(props)
    this.handleChangeSystem = this.handleChangeSystem.bind(this)
  }

  handleChangeSystem(system) {
    this.props.all.showEvent(system)
  }

  render() {
    let items;
    if(this.props.all.event.current.value){
        let allEvents = this.props.all.event.current.value
        items = allEvents.map((item, index) => {
            let date = new Date(item.date)
            return(
                <tr>
                    <td>{(date.getYear() + 1900) + '-' + (date.getMonth() + 1) + '-' + date.getDate()}</td>
                    <td>{item.system}</td>
                    <td>{item.event}</td>
                </tr>
            )
        });
    }
    return (
  <div>
    <Nav changeSystem={this.handleChangeSystem} />
    <div className="table-responsive">
    <table className='table table-hover table-bordered'>
        <thead>
            <tr>
                <td>日期</td>
                <td>系统</td>
                <td>运维事件</td>
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

export default Event
