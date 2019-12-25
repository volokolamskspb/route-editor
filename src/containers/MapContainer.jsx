import { connect } from 'react-redux'
import React, { Component } from 'react'
import AppMap from '@components/map/AppMap'
import { MAP, WAYPOINTS } from '@/redux/actions'

const changeWaypointPos = (e, id, waypoints) => {
  const { latlng } = e
  const newPosition = [latlng.lat, latlng.lng]
  const newWaypoints = waypoints.map((el) => {
    if (el.id === id) {
      return { id, position: newPosition, content: el.content }
    }
    return el
  })
  return newWaypoints
}

class ResizebleMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: document.documentElement.clientHeight,
    }
    this.ref = React.createRef();
    console.log(this.ref)
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }

  onResize = () =>
    this.setState({ height: document.documentElement.clientHeight })

  render() {

    const props = {
      ...this.props,
      height: this.state.height,
    }

    return <AppMap ref={this.ref} {...props} />
  }
}

const mapStateToProps = state => ({
  viewport: state.dynamicViewport,
  waypoints: state.waypoints,
  ref: state.ref
})

const mapDispatchToProps = dispatch => ({
  onViewportChange: viewport => dispatch(MAP.VIEWPORT_CHANGED(viewport)),
  dispatchNewWaypoints: waypoints =>
    dispatch(WAYPOINTS.REPLACE_WAYPOINTS(waypoints)),
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  onMarkerDrag: (e, id) =>
    dispatchProps.dispatchNewWaypoints(
      changeWaypointPos(e, id, stateProps.waypoints),
  ),
  onViewportChange: viewport => { console.log(stateProps, ownProps); dispatchProps.onViewportChange(viewport) }
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps, { withRef: true })(
  ResizebleMap,
)
