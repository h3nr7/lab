import BasicThreeWithCam from 'container/Basic/BasicThreeWithCam'
import GPUComputationRenderer from 'lib/GPUComputationRenderer'
import React from 'react'
import * as THREE from 'three'

export default class Flocking extends BasicThreeWithCam {

  constructor() {
    super()
  }

  init() {
    super.init()

    let { width, height } = this.state
    this.gpuCompute = new GPUComputationRenderer( width, height, this.renderer )

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
