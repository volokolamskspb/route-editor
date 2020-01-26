import { connect } from 'react-redux'
import React, { Component } from 'react'
import AppMap from '@components/map/AppMap'
import { WAYPOINTS } from '@/redux/actions'
import { getPlaces } from '@/api'

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
    this.inputRef = React.createRef()
    this.state = {
      height: document.documentElement.clientHeight,
    }
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }

  componentDidUpdate() {
    this.props.onViewportChanged({ ref: this.inputRef })
  }

  componentDidMount() {
    this.props.onViewportChanged({ ref: this.inputRef })
  }

  onResize = () =>
    this.setState({ height: document.documentElement.clientHeight })

  render() {
    const props = {
      ...this.props,
      height: this.state.height,
    }
    return <AppMap ref={this.inputRef} {...props} />
  }
}

const mapStateToProps = state => ({
  viewport: state.dynamicViewport,
  waypoints: state.waypoints,
})

function filterWaypoints(data) {
  return data.map((el, id) => ({
    id,
    wID: el.id,
    position:
      [el.geometry.location.lat(), el.geometry.location.lng()],
    content: el.name }))
}

const mapDispatchToProps = dispatch => ({
  onViewportChanged: ({ ref }) => {
    const map = ref.current
    getPlaces(map)
      .then((data) => {
        const waypoints = filterWaypoints(data)
        dispatch(WAYPOINTS.REPLACE_WAYPOINTS(waypoints))
        dispatch(WAYPOINTS.FULL_INFO(data))
      }, rej => console.log(rej))
  },
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
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  ResizebleMap,
)
