import * as THREE from 'three'
const TWO_PI = 2 *  Math.PI
export default class Star extends THREE.Object3D {

  constructor(opts = {}) {
    super()

    this.options = Object.assign({
      innerRadius: 0.5,
      outerRadius: 1,
      noPoints: 5,
      height: 1,
      wireframe: false,
      material: undefined,
      name: 'star_' + Math.round( Math.random() * 1000 )
    }, opts)

    this.name = this.options.name
    this.init()
  }

  init() {
    let { innerRadius, outerRadius, material, height } = this.options

    let outer = this.initPoints( outerRadius, 0, 0 )
    let innerTop = this.initPoints( innerRadius, height, 0.5 )
    let innerBottom = this.initPoints( innerRadius, -height, 0.5 )

    let vertices = [].concat(outer)
                     .concat(innerTop)
                     .concat(innerBottom)
                     .concat([ new THREE.Vector3( 0, 0, height ), new THREE.Vector3( 0, 0, -height ) ])


    let faces = this.initFaces()

    let geometry = new THREE.Geometry()

    geometry.vertices = vertices
    geometry.faces = faces

    console.log(geometry)

    let newMaterial = material || new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: this.options.wireframe
      })
    newMaterial.size = 50
    let mesh = new THREE.Mesh(geometry, newMaterial)
    mesh.name = this.name + '_' + 'main'
    this.add( mesh )
  }

  initPoints ( radius, height, offsetFraction ) {
    let { noPoints } = this.options
    let arr = []

    for( let i = 0; i < noPoints; i++ ) {
      let x = - radius * Math.sin( TWO_PI * (i + offsetFraction) / 5 )
      let y = radius * Math.cos( TWO_PI * (i + offsetFraction) / 5 )
      let z = height
      arr.push( new THREE.Vector3( x, y, z ) )
    }

    return arr
  }



  initFaces() {
    let { noPoints } = this.options

    for( let i = 0; i < noPoints; i++ ) {

    }
  }



}
