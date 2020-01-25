import React from 'react'
import PropTypes from 'prop-types'
import s from './Details.css'

const Details = ({
    details
}) => (
    <div class={s.details}>
        <div>
        	<div class={s.head}></div>
            {JSON.stringify(details)}
        </div>
    </div>
)
Details.propTypes = {
    details: PropTypes.object
}
export default Details
