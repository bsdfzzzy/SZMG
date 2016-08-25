import { connect } from 'react-redux'
import { fetchGetUser, fetchAddUser, updateAccount, updatePassword, updateUsername, updatePriority } from '../modules/user'
import React, { Component } from 'react'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import User from 'components/User'

export class UserComponent extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.fetchGetUser()
  }
  render() {
    return (
      <div>
        <User all={this.props}/>
      </div>
    )
  }
}

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapActionCreators = {
  fetchGetUser,
  fetchAddUser,
  updateAccount,
  updatePassword,
  updateUsername,
  updatePriority
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, mapActionCreators)(UserComponent)
