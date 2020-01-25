import { connect } from 'react-redux'
import Details from '@components/details/Details'
import { WAYPOINTS } from '@/redux/actions'

const mapStateToProps = state => ({
  details: state.details,
  visibleDetails: state.visibleDetails
})

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(WAYPOINTS.CLOSE_BAR())
})

export default connect(mapStateToProps, mapDispatchToProps)(Details)
