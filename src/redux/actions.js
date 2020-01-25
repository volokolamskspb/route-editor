import { createAction } from 'redux-act'

export const MAP = {
  VIEWPORT_CHANGED: createAction('viewport has been changed'),
  SET_VIEWPORT: createAction('set viewport'),
  SET_REF: createAction('set Map Ref'),
}

export const WAYPOINTS = {
  REMOVE_WAYPOINT: createAction('remove item'),
  ADD_WAYPOINT: createAction('add waypoint'),
  ADD_WAYPOINTS: createAction('add multiple waypoints'),
  REPLACE_WAYPOINTS: createAction('replace waypoints'),
  REORDER_WAYPOINTS: createAction('reorder waypoints'),
  OPEN_BAR: createAction('open sidebar with details'),
  CLOSE_BAR: createAction('close sidebar with details'),
  FULL_INFO: createAction('sett full info about waypoints'),
}

export const AUTOCOMPLETE = {
  FETCH_SUGGESTIONS_REQUEST: createAction('fetch suggestions request'),
  FETCH_SUGGESTIONS_SUCCESS: createAction('fetch suggestions success'),
  FETCH_SUGGESTIONS_FAIL: createAction('fetch suggestions fail'),
  FETCH_GEOCODE_REQUEST: createAction('fetch geocode request'),
  FETCH_GEOCODE_SUCCESS: createAction('fetch geocode success'),
  FETCH_GEOCODE_FAIL: createAction('fetch geocode fail'),
  CLEAR_SUGGESTIONS: createAction('clear suggestions'),
}
