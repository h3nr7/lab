import React from 'react'
import combineRoutes from 'routes'
import { Link } from 'react-router'
import './Index.scss'


export default class Index extends React.Component {

  constructor() {
    super()
  }

  componentWillMount() {

  }

  renderSections() {

    return combineRoutes.map( c => {

      let outerStyle = {
        backgroundImage: c.imageSrc,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }

      let outLink = <Link
          key={ c.name }
          className="index__container__section"
          to={`${c.path}`}
          style={outerStyle}>
            <span className="index__container__section__overlay">{c.name}</span>
        </Link>

      return c.name === 'index' ? null : outLink
    })
  }

  render() {
    return (
      <div className="index__container">
        { this.renderSections() }
      </div>
    )
  }
}
