import React from 'react'
import './RootWrapper.scss'
import Navi from 'container/Navi'

class RootWrapper extends React.Component {

  constructor() {
    super()
  }

  render() {

    let hsbcPathCheck = new RegExp(/hsbc/)
    let isHsbc = hsbcPathCheck.test(this.props.location.pathname)

    return(
      <div className="rootwrapper__mediahelper">
        <div className="rootwrapper__container">
            { this.props.children }
        </div>
        <Navi {...this.props}/>
      </div>
    )
  }
}

export default RootWrapper
