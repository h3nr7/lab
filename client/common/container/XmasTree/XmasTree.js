import React from 'react'
import {Star} from 'MonkiThree/shape'
import { BasicThreeWithCam } from 'container/Basic'


export default class XmasTree extends BasicThreeWithCam {

  constructor() {
    super()
  }

  init() {
    super.init()
    console.log('lala')
    new Star()
  }

  tick() {
    super.tick()
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
