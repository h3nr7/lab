import React from 'react'
import * as THREE from 'three'
import {Star} from 'MonkiThree/shape'
import { BasicThreeWithCam } from 'container/Basic'


export default class XmasTree extends BasicThreeWithCam {

  constructor() {
    super()
  }

  init() {
    super.init()
    console.log('lala')
    let star = new Star({
      innerRadius: 50,
      outerRadius: 100,
      height: 20
    })

    this.scene.add( star )
    console.log(this.scene)
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
