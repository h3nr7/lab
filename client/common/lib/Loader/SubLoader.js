import React from 'react'
import Tweenr from 'tweenr'
import Transform from 'tween-css-transform'

export default class SubLoader extends React.Component {

  constructor() {
    super()
  }

  componentWillMount() {
    this.setState({
      isLoad: false
    })
  }




  onTweenInComplete(evt) {

  }

  onTweenOutComplete(evt) {

  }



  render() {
    return <div className="subloader__container"></div>
  }
}
