import React from 'react'
import PropTypes from 'prop-types'
import s from './Details.css'
import  CloseIcon  from './CloseIcon.jsx';

const createImages = (pics) => {
    if(!pics) return ''
    let images = []
    for (let i = 0; i < pics.length; i++) {
      images.push(<img src={pics[i].getUrl()} />)
    }
    return images;
  }

const Details = ({
    details,
    visibleDetails
}) => {
    return (visibleDetails &&
    <div class={s.details}>
        <div class={s.header}>
            <div class={s.flex}>
                <img class={s.icon} src={details.icon} />
                <h2 class={s.title}>{details.name}</h2>
            </div>
            <div>
                <CloseIcon />
            </div>
        </div>
        <div class={s.content}>
            <div> Адрес: {details.vicinity} </div>
            <div> Фото: </div>
            {createImages(details.photos)}
            { details.photos && (
                <div><span>Больше фото: </span>
                    <span dangerouslySetInnerHTML={{__html: details.photos[0]['html_attributions']}}></span>
                </div>
                )
            }
        </div>
    </div>
)}
Details.propTypes = {
    details: PropTypes.object
}
export default Details
