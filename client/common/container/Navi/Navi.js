import React, { Component } from 'react'
import Moment from 'moment'
import { Link } from 'react-router'
import './Navi.scss'
import routes from 'routes'

export default class Navi extends Component {

  constructor() {
    super()
    this.dayButton = []
  }

  renderCurDay() {

    let output = null
    let back = null
    let { pathname } = this.props.location

    routes.forEach( d => {

      if(pathname === d.path && d.name !== 'index') {
        output = <a  className={"navi__day current"}>{d.name}</a>
        back = <Link className={"navi__day back"} to={`/index`} >back</Link>
      } else {
      }

    })

    return (
      <div className="navi__daycontainer">
        <span className="navi__title">LAB</span>
        {output}
        {back}
      </div>
    )
  }


  render() {
    return (
      <div className="navi__container">
        <a className="navi__logo" href='http://monkiki.co'/>
        { this.renderCurDay() }
      </div>
    )
  }
}

Navi.contextTypes = {
  router: React.PropTypes.object.isRequired
}
