import React from 'react'
import BasicThreeWithCam from 'container/Basic/BasicThreeWithCam'

export default class FollowFace extends BasicThreeWithCam {

  constructor() {
    super({
      hasLight: true
    })
  }

  render() {
    return (
      <div ref = { c => { this.container = c }}
        className="day__container"
        onMouseUp={this.mouseUp}
        onMouseDown={this.mouseDown}
        onWheel={this.mouseWheel}
        onMouseOut={this.mouseUp}
        onMouseMove={this.mouseMove}>
      </div>
    )
  }


}
