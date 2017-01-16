import React from 'react'
import * as THREE from 'three'
import BasicThreeWithCam from 'container/Basic/BasicThreeWithCam'
import { Polyhedron } from 'MonkiThree/shape'


export default class ShapeTest extends BasicThreeWithCam {

  constructor() {
    super({
      hasLight: true,
      zoomMax: 4000
     })
  }

  init() {
    super.init()

    this.poly = new Polyhedron({
      noPoints: 5,
      material: new THREE.MeshPhongMaterial({ color: 0xffff00 })
    })

    this.scene.add( this.poly )
    this.gui.add(this.poly.material, 'wireframe')

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
