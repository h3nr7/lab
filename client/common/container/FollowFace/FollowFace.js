import React from 'react'
import BasicThreeWithCam from 'container/Basic/BasicThreeWithCam'
import * as THREE from 'three'
import ThreeNormalHelper from 'lib/ThreeNormalHelper'
import ColladaLoader from 'three-collada-loader'
import { SubLoader } from 'lib/Loader'
import { generateRandomColor } from 'lib/GenericHelper'
import Stats from 'stats.js'
import './FollowFace.scss'

export default class FollowFace extends BasicThreeWithCam {

  constructor() {
    super({
      hasLight: true
    })
  }

  componentDidMount() {
    super.componentDidMount({ isLoaded: false })
    this.curFace = 0
    this.testMesh = null
    this.counter = 0

    this.stats.showPanel( 0 ) // 0: fps, 1: ms, 2: mb, 3+: custom
    this.stats.dom.style.position = 'absolute'
    this.stats.dom.style.top = 'auto'
    this.stats.dom.style.bottom = '0px'
    this.container.appendChild( this.stats.dom )
  }

  init() {
    super.init()
    this.stats = new Stats()
    this.startTime = Date.now()
    this.points = []
    this.referencePoints = []
    this.infiniteMaterial = null
    this.infiniteGeo = null
    this.loader = new ColladaLoader()
    this.loader.load('/public/obj/lee-perry-smith-head-scan.dae', this.loaderComplete.bind(this))
  }

  tick() {
    this.stats.begin()
    super.tick()
    let counter = Math.round ( (Date.now() - this.startTime) / 100 )
    if(this.testMesh && counter !== this.counter) {
      // this.testMesh.geometry.colorsNeedUpdate = true
      this.testMesh.geometry.elementsNeedUpdate = true
      // console.log(this.testMesh.geometry)
      let f = this.testMesh.geometry.faces[counter]
      let color = new THREE.Color( generateRandomColor() )
      // color.setRGB( Math.random() * 255, 0,0 );
      f.color = color
    }
    this.counter = counter
    this.stats.end()
  }

  loaderComplete(dae) {

    let material = new THREE.MeshPhongMaterial({
      // color: 0xff00ff,
      wireframe: false,
      visible: true,
      vertexColors: THREE.FaceColors
    })
    material.side = THREE.FrontSide

    dae.scene.traverse(child => {

      if(child instanceof THREE.Mesh) {

        child.material = material
        this.infiniteMaterial = child.material
        this.gui.add(this.infiniteMaterial, 'visible')

      }

      if(child.name === 'Infinite') {

        child.children[0].geometry.center()
        child.children[0].geometry.scale(1200, 1200, 1200)
        child.children[0].geometry.rotateX( - Math.PI / 2 )
        child.children[0].geometry.rotateY( - Math.PI / 2 )
        child.children[0].geometry.rotateZ( - Math.PI / 2 )

        child.children[0].geometry.computeFaceNormals()
        child.children[0].geometry.computeVertexNormals()
        child.children[0].geometry.mergeVertices()
        child.children[0].geometry.verticesNeedUpdate = true
        child.children[0].geometry.colorsNeedUpdate = true

        let v = child.children[0].geometry.clone().vertices
        let faces = child.children[0].geometry.faces

        // faces.forEach( f => {
        //   let color = new THREE.Color( parseInt( generateRandomColor('0x') ) );
        //   // color.setRGB( Math.random() * 255, Math.random() * 255, Math.random() * 255 );
        //   f.color = color
        // })


        // child.children[0].geometry.rotateX( Math.PI / 2 )
        child.children[0].geometry.verticesNeedUpdate = true
        child.children[0].geometry.colorsNeedUpdate = true

        this.infiniteGeo = child.children[0].geometry.clone()
        console.log(child)
      }

    })

    this.testMesh = new THREE.Mesh(this.infiniteGeo, material)

    // this.scene.add(dae.scene)
    this.scene.add(this.testMesh)
  }

  render() {
    return (
      <div ref = { c => { this.container = c }}
        className="section__container followface__container"
        onMouseUp={this.mouseUp}
        onMouseDown={this.mouseDown}
        onWheel={this.mouseWheel}
        onMouseOut={this.mouseUp}
        onMouseMove={this.mouseMove}>
        <SubLoader />
      </div>
    )
  }


}
