/* @flow */
import { connect } from 'react-redux'
import { fetchLogIn, fetchLogout, updateAccount, updatePassword } from '../modules/home'
import React, { Component, PropTypes } from 'react'

import HomeView from '../components/HomeView'

export class HomeComponent extends Component {
  constructor(props) {
    super(props)
  }

  /*componentWillMount() {
    if (this.props.home.isLogin) {

    } else {

    }
  }*/
  render() {
    return (
      <div>
        <HomeView all={this.props} />
      </div>
    )
  }
}

const mapActionCreators = {
  fetchLogIn,
  fetchLogout,
  updateAccount,
  updatePassword
}

const mapStateToProps = (state) => ({
  home: state.home
})

export default connect(mapStateToProps, mapActionCreators)(HomeComponent)