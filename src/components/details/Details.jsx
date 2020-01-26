import React from 'react'
import PropTypes from 'prop-types'
import s from './Details.css'
import CloseIcon from './CloseIcon.jsx'

const createImages = (pics) => {
  if (!pics) return ''
  const images = []
  for (let i = 0; i < pics.length; i++) {
    images.push(<img src={pics[i].getUrl()} />)
  }
  return images
}

const Details = ({
    details,
    visibleDetails,
    onClose,
}) => (visibleDetails &&
<div className={s.details}>
  <div className={s.header}>
    <div className={s.flex}>
      <img className={s.icon} src={details.icon} />
      <h2 className={s.title}>{details.name}</h2>
    </div>
    <div onClick={onClose}>
      <CloseIcon />
    </div>
  </div>
  <div className={s.content}>
    <div> Адрес: {details.vicinity} </div>
    <div> Фото: </div>
    {createImages(details.photos)}
    { details.photos && (
    <div><span>Больше фото: </span>
      <span dangerouslySetInnerHTML={{ __html: details.photos[0].html_attributions }} />
    </div>
                )
            }
  </div>
</div>
)
Details.propTypes = {
  details: PropTypes.object,
  visibleDetails: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
}
export default Details
