import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DroppableList from '@components/droppableList/DroppableList'
import s from './WaypointsList.css'

// <InputWithShadow onInputSend={onNewItem} />
const WaypointsList = ({
  waypoints,
  onItemRemove,
  onItemClick,
  onNewItem,
  onShowDetails,
}) => (
  <div className={s.waypointsList}>
    <div className={s.waypointsHeader}>Магазины: </div>
    <div className={s.itemList}>
      <DroppableList
        onItemRemove={onItemRemove}
        itemsData={waypoints}
        onItemClick={onItemClick}
        onShowDetails={onShowDetails}
      />
    </div>
    <div />
  </div>
)

WaypointsList.defaultProps = {
  waypoints: [],
}

WaypointsList.propTypes = {
  waypoints: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      content: PropTypes.string,
      position: PropTypes.arrayOf(PropTypes.number),
    }),
  ),
  onItemRemove: PropTypes.func.isRequired,
  onItemClick: PropTypes.func.isRequired,
  onNewItem: PropTypes.func.isRequired,
  onShowDetails: PropTypes.func.isRequired,
}

class InputWithShadow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: false,
      input: '',
    }
  }

  onKeyPress = (e) => {
    if (e.charCode === 13) {
      this.props.onInputSend(this.state.input)
      this.setState({ waypointInput: '' })
      e.target.value = ''
    }
  }

  onInput = e => this.setState({ input: e.target.value })

  onFocus = () => this.setState({ focused: true })

  onBlur = () => this.setState({ focused: false })

  render() {
    const { focused } = this.state
    return (
      <div
        className={`${s.inputWrapper} ${focused ? s.inputWrapperFocused : ''}`}
      >
        <input
          className={s.input}
          type="text"
          placeholder="Add new points"
          onInput={this.onInput}
          onKeyPress={this.onKeyPress}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
      </div>
    )
  }
}

InputWithShadow.propTypes = {
  onInputSend: PropTypes.func.isRequired,
}

export default WaypointsList
