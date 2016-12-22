import * as THREE from 'three'
const TWO_PI = 2 *  Math.PI
export default class Star extends THREE.Object3D {

  constructor(opts = {}) {
    super()

    this.options = Object.assign({
      innerRadius: 0.5,
      outerRadius: 1,
      noPoints: 5,
      padding: 1,
      height: 0,
      wireframe: false,
      material: undefined,
      name: 'star_' + Math.round( Math.random() * 1000 )
    }, opts)
    this.options.height = this.options.height || this.options.padding
    this.name = this.options.name
    this.init()
  }

  /**
   * INIT
   */
  init() {
    let { innerRadius, outerRadius, material, padding, height, noPoints } = this.options

    let outer = this.initPoints( outerRadius, 0, 0 )
    let innerTop = this.initPoints( innerRadius, padding, 0.5 )
    let innerBottom = this.initPoints( innerRadius, -padding, 0.5 )

    let vertices = [].concat(outer)
                     .concat(innerTop)
                     .concat([ new THREE.Vector3( 0, 0, height ) ])
                     .concat(innerBottom)
                     .concat([ new THREE.Vector3( 0, 0, -height ) ])

    let faces = this.initFaces()

    this.geometry = new THREE.Geometry()

    this.geometry.vertices = vertices
    this.geometry.faces = faces
    this.geometry.computeFaceNormals()
    this.geometry.computeBoundingBox()

    this.material = material || new THREE.MeshLambertMaterial({
        color: 0xffffff,
      })
    this.material.size = 50
    this.material.wireframe = this.options.wireframe

    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.mesh.name = this.name + '_' + 'main'
    this.add( this.mesh )
  }

  /**
   * INIT POINTS
   */
  initPoints ( radius, height, offsetFraction ) {
    let { noPoints } = this.options
    let arr = []

    for( let i = 0; i < noPoints; i++ ) {
      let x = radius * Math.sin( TWO_PI * (i + offsetFraction) / noPoints )
      let y = radius * Math.cos( TWO_PI * (i + offsetFraction) / noPoints )
      let z = height
      arr.push( new THREE.Vector3( x, y, z ) )
    }
    return arr
  }

  /**
   * INIT FACES
   */
  initFaces() {
    let { noPoints } = this.options
    let arr = []

    let sP = 2 * noPoints + 1
    let lP = 3 * noPoints + 1

    for( let i = 0; i < noPoints; i++ ) {
      if(i === 0) {
        // top
        arr.push( new THREE.Face3( noPoints, i, 2 * noPoints - 1 ) )
        arr.push( new THREE.Face3( noPoints, 2 * noPoints - 1, 2 * noPoints ) )
        // bottom
        arr.push( new THREE.Face3( sP + noPoints - 1, i, sP ) )
        arr.push( new THREE.Face3( sP, lP , sP + noPoints - 1 ) )
        // side
        arr.push( new THREE.Face3(noPoints, sP, i ) )
        arr.push( new THREE.Face3(2 * noPoints - 1, i, sP + noPoints - 1 ) )
      } else {
        // top
        arr.push( new THREE.Face3( noPoints + i - 1, noPoints + i, i  ) )
        arr.push( new THREE.Face3( noPoints + i - 1, 2 * noPoints, noPoints + i  ) )
        // bottom
        arr.push( new THREE.Face3( sP + i, sP + i - 1, i  ) )
        arr.push( new THREE.Face3( sP + i - 1, sP + i, lP ) )
        // side
        arr.push( new THREE.Face3(noPoints + i - 1, i, sP + i - 1 ) )
        arr.push( new THREE.Face3(noPoints + i, sP + i, i ) )
      }
    }

    return arr
  }



}
