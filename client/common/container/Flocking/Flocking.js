import AbstractThreeIndex from 'container/Basic/AbstractThreeIndex'
import React from 'react'
import * as THREE from  'three'

export default class Flocking extends AbstractThreeIndex {

  constructor() {
    super()
  }



  render() {
    return(
      <div
        ref = { c => { this.container = c }}
        className="day__container"
        onMouseUp={this.mouseUp}
        onMouseDown={this.mouseDown}
        onMouseMove={this.mouseMove}
        onMouseWheel={this.mouseWheel}
        onTouchStart={this.touchStart}
        onTouchMove={this.touchMove}
        onTOuchEnd={this.touchEnd}>
      </div>
    )
  }
}
