import { connect } from 'react-redux'
import Details from '@components/details/Details'

const mapStateToProps = state => ({
  details: state.details,
  visibleDetails: state.visibleDetails
})

export default connect(mapStateToProps)(Details)
