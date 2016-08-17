/* @flow */
import { connect } from 'react-redux'
import { fetchBiz, showBiz, fetchSystem } from '../modules/biz'
import React, { Component, PropTypes } from 'react'

import Biz from 'components/Biz'

export class BizComponent extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    let base_sys, biz_sys, event_sys;
    if (this.props.base && this.props.base.systems) {
       base_sys =  this.props.base.systems.length;
    } else {
      base_sys = 0;
    }
    if (this.props.biz && this.props.biz.systems) {
       biz_sys =  this.props.biz.systems.length;
    } else {
      biz_sys = 0;
    }
    if (this.props.event && this.props.event.systems) {
       event_sys =  this.props.event.systems.length;
    } else {
      event_sys = 0;
    }
    if (base_sys !== 0) {
      this.systems = this.props.base.systems;
    } else if (biz_sys !== 0) {
      this.systems = this.props.biz.systems;
    } else if (event_sys !== 0) {
      this.systems = this.props.event.systems;
    } else {
      this.props.fetchSystem();
    }
    if (!this.props.biz.current.value) {
      this.props.fetchBiz('GETALL')
    }
  }
  render() {
    return (
      <div>
        <Biz all={this.props} />
      </div>
    )
  }
}

const mapActionCreators: {fetchBiz: Function, saveCurrentBiz: Function} = {
  fetchBiz,
  showBiz,
  fetchSystem
}

const mapStateToProps = (state) => ({
  biz: state.biz
})

export default connect(mapStateToProps, mapActionCreators)(BizComponent)
