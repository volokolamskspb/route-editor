import React from 'react'
import PropTypes from 'prop-types'
import s from './DeleteIcon.css'

const DeleteIcon = ({ onClick }) => (
  <svg className={s.icon} viewBox="0 0 612.002 612.002" onClick={onClick}>
    <path d="M540.346,19.437H389.4C388.323,8.529,379.114,0,367.917,0H244.084c-11.201,0-20.405,8.529-21.489,19.437H71.655
    c-11.93,0-21.599,9.669-21.599,21.602v41.036c0,11.934,9.669,21.6,21.599,21.6h468.691c11.93,0,21.599-9.667,21.599-21.6V41.04
    C561.945,29.106,552.276,19.437,540.346,19.437z"
    />
    <path d="M95.34,590.403c0,11.923,9.665,21.599,21.599,21.599h378.127c11.934,0,21.599-9.674,21.599-21.599V145.167H95.34V590.403z
    "
    />
  </svg>
)

export default DeleteIcon

DeleteIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
}
