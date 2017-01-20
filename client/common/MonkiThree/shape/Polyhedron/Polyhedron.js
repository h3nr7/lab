import * as THREE from 'three'
import { polarToCatesian } from 'lib/GenericHelper'
const TWO_PI = 2 *  Math.PI

export default class Polyhedron extends THREE.Object3D {

  constructor(opts = {}) {
    super()

    this.options = Object.assign({
      noPoints: 5,
      radius: 100,
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

    let { material, radius } = this.options

    let points = []
    let refs = []
    // TETRAHEDRAL POINTS
    points.push( this._createFracPolarPoint(radius, 0, 0) )
    points.push( this._createFracPolarPoint(radius, 0, 1/3) )
    points.push( this._createFracPolarPoint(radius, 2/3, 1/3) )
    points.push( this._createFracPolarPoint(radius, 1/3, 1/3) )

    // REF POINTS
    refs.push( this._createFracPolarPoint(radius, 0, 1/2) )
    refs.push( this._createFracPolarPoint(radius, 0, 5/6) )
    refs.push( this._createFracPolarPoint(radius, 2/3, 5/6) )
    refs.push( this._createFracPolarPoint(radius, 1/3, 5/6) )


    this.material = material || new THREE.MeshLambertMaterial({
        color: 0xffffff,
      })
    this.material.size = 50
    this.material.wireframe = this.options.wireframe

    points.forEach(e => {
      let geo = new THREE.SphereGeometry(5, 4, 4)
      geo.translate(e.x, e.y, e.z)
      let mesh = new THREE.Mesh(geo, material)

      this.add(mesh)
    })

    let sMaterial = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.5,
        wireframe: false
      })
    let sGeo = new THREE.SphereGeometry(this.options.radius, 30, 30)
    let sMesh = new THREE.Mesh(sGeo, sMaterial)
    this.add(sMesh)

    refs.forEach(e => {
      points.forEach(f => {

      })
    })
  }

  /**
   * INIT POINTS
   */
   initPoints() {

   }

  /**
   * INIT FACES
   */
  initFaces() {
    let { noPoints } = this.options
    let arr = []

    return arr
  }

  /**
   * create fractioned coords
   */
   _createFracPolarPoint ( radius, tFrac, oFrac ) {
     return polarToCatesian(radius, TWO_PI * tFrac, TWO_PI * oFrac)
   }

}
