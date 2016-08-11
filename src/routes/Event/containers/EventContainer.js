import { connect } from 'react-redux'
import { fetchEvent, showEvent } from '../modules/event'
import React, { Component } from 'react'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import Event from 'components/Event'

export class EventComponent extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    if (!this.props.event.current.value) {
      this.props.fetchEvent('GETALL')
    }
  }
  render() {
    return (
      <div>
        <Event all={this.props}/>
      </div>
    )
  }
}

/*  Object of action creators (can also be function that returns object).
    Keys will be passed as props to presentational components. Here we are
    implementing our wrapper around increment; the component doesn't care   */

const mapActionCreators = {
  fetchEvent,
  showEvent
}

const mapStateToProps = (state) => ({
  event: state.event
})

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    import { createSelector } from 'reselect'
    const counter = (state) => state.counter
    const tripleCount = createSelector(counter, (count) => count * 3)
    const mapStateToProps = (state) => ({
      counter: tripleCount(state)
    })

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */

export default connect(mapStateToProps, mapActionCreators)(EventComponent)
