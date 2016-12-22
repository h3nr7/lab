import React from 'react'
import * as THREE from 'three'
import {Star} from 'MonkiThree/shape'
import { BasicThreeWithCam } from 'container/Basic'


export default class XmasTree extends BasicThreeWithCam {

  constructor() {
    super({ hasLight: true })
  }

  init() {
    super.init()

    this.star = new Star({
      innerRadius: 50,
      outerRadius: 80,
      noPoints: 5,
      padding: 20,
      height: 30,
      material: new THREE.MeshPhongMaterial({ color: 0xffff00 })
    })

    this.scene.add( this.star )
    this.gui.add(this.star.material, 'wireframe')

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
