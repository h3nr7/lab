import urljoin from 'url-join'

import Index from 'container/Index'
import FollowFace from 'container/FollowFace'



const outDayRoutes = () => {

  let output = []

  let container = [
    { name: 'index',       image: null , obj: Index  },
    { name: 'follow face', image: null,  obj: FollowFace, url: '/sketch/followface' }
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
