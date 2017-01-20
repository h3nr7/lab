import { Vector3 } from 'three'

/**
 * GENERATE RANDOM COLOR
 * @param  {[type]} index =             '#' [description]
 * @return {[type]}       [description]
 */
export function generateRandomColor(index = '#') {
  return index+'0123456789abcdef'.split('').map((v,i,a) => {
    return i>5 ? null : a[Math.floor(Math.random()*16)]
  }).join('')
}

/**
 * GENERATE RANDOM COLOR
 * @param  {[type]} colors =             [] [description]
 * @return {[type]}        [description]
 */
export function generateRandomSetColor(colors = []) {
  let out = colors[ Math.floor( colors.length * Math.random() ) ]
  return out
}

/**
 * CONVERT POLAR TO CATESIAN COORDINATES
 * @param  {[type]} radius [description]
 * @param  {[type]} theta  [description]
 * @param  {[type]} omega  [description]
 * @return {[type]}        [description]
 */
export function polarToCatesian(radius, theta, omega) {
  let x = radius * Math.cos(theta) * Math.sin(omega)
  let z = radius * Math.sin(theta) * Math.sin(omega)
  let y = radius * Math.cos(omega)

  return new Vector3(x, y, z)
}
