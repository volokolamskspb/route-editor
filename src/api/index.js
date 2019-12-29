import Point from '@/components/map/Point'

const autocomplete = new window.google.maps.places.AutocompleteService()
const geocoder = new window.google.maps.Geocoder()

export const getSuggestions = query =>
  new Promise((resolve, reject) => {
    autocomplete.getQueryPredictions(
      {
        input: query,
      },
      (predictions, status) => {
        if (status !== 'OK') {
          reject(status)
        }
        resolve(predictions)
      },
    )
  })

export const getPlaces = map =>
    new Promise((resolve, reject) => {
      const { _southWest, _northEast } = map.leafletElement.getBounds()
      const bounds = new window.google.maps.LatLngBounds(
            new Point(_southWest),
            new Point(_northEast))
      const mapG = new window.google.maps.Map(map)
      const service = new window.google.maps.places.PlacesService(mapG)
      service.nearbySearch({
        bounds,
        type: ['store'],
      }, (results, status) => {
        if (status !== 'OK') {
          reject(status)
        }
        resolve(results)
      })
    })

export const getGeoCode = id =>
  new Promise((resolve, reject) => {
    geocoder.geocode(
      {
        placeId: id,
      },
      (results, status) => {
        if (status !== 'OK') {
          reject(status)
        }
        resolve([
          results[0].geometry.location.lat(),
          results[0].geometry.location.lng(),
        ])
      },
    )
  })
