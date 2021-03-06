// @flow
import React from 'react'
import { Map, TileLayer } from 'react-leaflet'
import PropTypes from 'prop-types'
import Path from '@components/Path/Path'

const AppMap = React.forwardRef((props, ref) => {
  function curry() {
    return props.onViewportChanged({ ref })
  }
  return (<Map
    ref={ref}
    viewport={props.viewport}
    style={{ height: `${props.height}px` }}
    trackResize
    onViewportChanged={curry}
    zoomControl={false}
  >
    <TileLayer
      url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
      // eslint-disable-next-line max-len
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a>"
    />
    {props.waypoints.length > 0 && <Path {...props} />}
  </Map>
  )
})

export default AppMap

AppMap.propTypes = {
  waypoints: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      content: PropTypes.string,
      position: PropTypes.arrayOf(PropTypes.number),
    }),
  ).isRequired,
  viewport: PropTypes.shape({
    center: PropTypes.arrayOf(PropTypes.number),
    zoom: PropTypes.number,
  }).isRequired,
  onViewportChanged: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
}
