class Point {
  constructor(point) {
    let LatLng
    if (Array.isArray(point)) {
      LatLng = { lat: point[0], lng: point[1] }
    } else LatLng = { lat: point.lat, lng: point.lng }
    return new window.google.maps.LatLng(LatLng)
  }
}
export default Point
