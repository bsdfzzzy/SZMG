/* @flow */
import { connect } from 'react-redux'
import { fetchBiz, showBiz } from '../modules/biz'
import React, { Component, PropTypes } from 'react'

import Biz from 'components/Biz'

export class BizComponent extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
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
  showBiz
}

const mapStateToProps = (state) => ({
  biz: state.biz
})

export default connect(mapStateToProps, mapActionCreators)(BizComponent)
