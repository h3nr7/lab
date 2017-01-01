import BasicThreeWithCam from 'container/Basic/BasicThreeWithCam'
import React from 'react'


export default class TestParticles01 extends BasicThreeWithCam {

  constructor() {
    super({
      hasLight: true,
      zoomMax: 4000
     })
  }

  

  render() {
    return(
      <div ref = { c => { this.container = c }}
        className="section__container"
        onMouseUp={this.mouseUp}
        onMouseDown={this.mouseDown}
        onWheel={this.mouseWheel}
        onMouseOut={this.mouseUp}
        onMouseMove={this.mouseMove}>
      </div>
    )
  }
}
