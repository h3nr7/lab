import urljoin from 'url-join'

import Index from 'container/Index'
import FollowFace from 'container/FollowFace'
import XmasTree from 'container/XmasTree'
import TestParticles01 from 'container/TestParticles01'
import ShapeTest from 'container/ShapeTest'
import Flocking from 'container/Flocking'

const outDayRoutes = () => {

  let output = []

  let container = [
    { name: 'index',             image: null , showInNavi: true,   obj: Index  },
    { name: 'follow face',       image: null,  showInNavi: true,   obj: FollowFace,     url: '/2016/sketch/followface' },
    { name: 'xmas tree',         image: null,  showInNavi: false,  obj: XmasTree,       url: '/2016/test/xmas' },
    { name: 'test particles 01', image: null,  showInNavi: false,  obj: TestParticles01,url: '/2016/test/particles01' },
    { name: 'Testing of shapes', image: null,  showInNavi: true,   obj: ShapeTest,      url: '/2017/learning/shapetest' },
    { name: 'Flocking',          image: null,  showInNavi: false,  obj: Flocking,       url: '/2017/learning/flocking' }
  ]

  container.forEach( c => {

    let name = String( c.name )
    let imgSrc =  c.image  || 'jpg/temp-sqr.jpg'
    let url = c.url || name.replace(' ', '')

    output.push({
      name: c.name,
      path: url,
      imageSrc: urljoin( '//public', imgSrc ),
      component: c.obj
    })

  })

  console.log('output', output, container)
  return output
}

export default outDayRoutes()
