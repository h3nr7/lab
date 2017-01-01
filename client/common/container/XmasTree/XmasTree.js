import React from 'react'
import * as THREE from 'three'
import {Star} from 'MonkiThree/shape'
import { BasicThreeWithCam } from 'container/Basic'
import Fbo from './Fbo'
import SimFs from './shader/sim.frag'
import SimVs from './shader/sim.vert'
import RenderVs from './shader/render.vert'
import RenderFs from './shader/render.frag'

export default class XmasTree extends BasicThreeWithCam {

  constructor() {
    super({
      hasLight: true,
      zoomMax: 4000
     })

    this.timer = this.startTime = Date.now()
    this.loadManager = new THREE.LoadingManager()
    this.textureLoader = new THREE.TextureLoader(this.loadManager)
    this.loadManager.onLoad = this._loadComplete.bind(this)
  }


  _noiseTexLoadComplete(tex) {
    this.noiseTexture = tex
  }

  _loadComplete() {

    this.star = new Star({
      innerRadius: 12,
      outerRadius: 20,
      noPoints: 5,
      padding: 5,
      height: 8,
      material: new THREE.MeshPhongMaterial({ color: 0xffff00 })
    })

    this.star.translateY(200)

    this.initParticles()

    this.scene.add( this.star )
    this.gui.add(this.star.material, 'wireframe')

    this.isLoaded = true
  }

  init() {
    super.init()
    this.textureLoader.load('/public/texture/perlin-512.png', this._noiseTexLoadComplete.bind(this))
  }

  initParticles(count = 64 * 64, size = 10) {

      // Emitter and Receiver
      let emitterGeo = new THREE.SphereGeometry(10, 4, 4)
      let receiverGeo = emitterGeo.clone()
      let material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true })


      this.oldMousePos = { x: 0, y: 0 }

      this.attractor0 = new THREE.Mesh(emitterGeo, material)
      this.attractor1 = new THREE.Mesh(receiverGeo, material)
      this.attractor0.position.set(-100, 50, 0)
      this.attractor1.position.set(100, 50, 0)

      // Particles
      let len = count * 3,
          posData = new Float32Array( len )

      for(let i = 0, len = count * 3; i < len; i++) {
        posData[i] = 0.0
      }

      let positions = new THREE.DataTexture( posData, 64, 64, THREE.RGBFormat, THREE.FloatType )
      positions.needsUpdate = true

      this.simShader = new THREE.ShaderMaterial({
        uniforms: {
          prevPos: { type: 't', value: positions },
          positions: { type: 't', value: positions },
          tNoise: { type: 't', value: this.noiseTexture },
          timer: { type: 'f', value: 0.0 },
          attractor0: { type: 'v3', value: this.attractor0.position },
          attractor1: { type: 'v3', value: this.attractor1.position }
        },
        vertexShader: SimVs,
        fragmentShader: SimFs
      })

      this.renderShader = new THREE.ShaderMaterial({
        uniforms: {
          positions: { type: 't', value: null },
          pointSize: { type: 'f', value: size }
        },
        vertexShader: RenderVs,
        fragmentShader: RenderFs,
        transparent: false,
        blending: THREE.AdditiveBlending
      })

      this.fbo = new Fbo( 100, 100, this.renderer, this.simShader, this.renderShader )

      // Add ti scene
      this.scene.add(this.attractor0)
      this.scene.add(this.attractor1)
      this.scene.add(this.fbo.particles)



  }

  tick() {
    if(!this.isLoaded) return
    super.tick()
    this.fbo.update()
    this.timer = Date.now()  - this.startTime
    this.simShader.uniforms.timer.value = 0.5 - Math.sin(this.timer / 1000) / 2
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
