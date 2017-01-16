import * as THREE from 'three'
const TWO_PI = 2 *  Math.PI

export default class Polyhedron extends THREE.Object3D {

  constructor(opts = {}) {
    super()

    this.options = Object.assign({
      noPoints: 5,
      padding: 1,
      wireframe: false,
      material: undefined,
      name: 'polyhedron_' + Math.round( Math.random() * 1000 )
    }, opts)

    this.name = this.options.name
    this.init()
  }

  /**
   * INIT
   */
  init() {

    let { material } = this.options

    

    this.material = material || new THREE.MeshLambertMaterial({
        color: 0xffffff,
      })
    this.material.size = 50
    this.material.wireframe = this.options.wireframe

  }

  /**
   * INIT POINTS
   */
  initPoints ( radius, height, offsetFraction ) {
    let { noPoints } = this.options
    let arr = []


    return arr
  }

  /**
   * INIT FACES
   */
  initFaces() {
    let { noPoints } = this.options
    let arr = []

    return arr
  }

}
