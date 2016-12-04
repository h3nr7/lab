import React from 'react'
import combineRoutes from 'routes'
import './Index.scss'

export default class Index extends React.Component {

  constructor() {
    super()
  }

  componentWillMount() {

  }

  renderSections() {

    console.log('rrr', combineRoutes)

    return combineRoutes.forEach( c => {

      let outerStyle = {
        backgroundImage: c.imageSrc,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }

      return <div className="index__container__section" style={outerStyle}></div>
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
