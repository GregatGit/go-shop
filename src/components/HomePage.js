import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { selectChosen, filterList } from '../actions'
import Lists from './Lists1'
import Footer from './Footer'
import Welcome from './Welcome'
import YourLists from './YourLists'
import TheList from './TheLists/Index'
import './styles.scss'

class HomePage extends Component {
  state = { user: 'Greg', show: 'Lists' }

  changeShow = name => {
    this.setState({ show: name })
  }
  home = () => {
    this.setState({ show: 'Lists' })
  }
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Route path='/' exact component={Welcome} />
          <Route path='/lists' component={Lists} />
          <Route path='/' component={Footer} />
        </BrowserRouter>
        
      </Fragment>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    lists: state.lists,
    chosen: state.chosen,
  }
}

export default connect(
  mapStateToProps,
  { selectChosen, filterList }
)(HomePage)
