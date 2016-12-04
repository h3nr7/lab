import Day1 from 'container/Day1'
import Day2 from 'container/Day2'
import Day3 from 'container/Day3'
import Day4 from 'container/Day4'
import Day5 from 'container/Day5'
import Day6 from 'container/Day6'
import Day7 from 'container/Day7'
import Day8 from 'container/Day8'
import Day9 from 'container/Day9'
import Day10 from 'container/Day10'
import Day11 from 'container/Day11'
import Day12 from 'container/Day12'
import Day13 from 'container/Day13'
import Day14 from 'container/Day14'
import Day15 from 'container/Day15'
import Day16 from 'container/Day16'
import Day17 from 'container/Day17'
import Day18 from 'container/Day18'
import Day19 from 'container/Day19'
import Day20 from 'container/Day20'
import Day21 from 'container/Day21'
import Day22 from 'container/Day22'
import Day23 from 'container/Day23'
import Day24 from 'container/Day24'
import Day25 from 'container/Day25'
import Day26 from 'container/Day26'
import Day27 from 'container/Day27'
import Day28 from 'container/Day28'
import Day29 from 'container/Day29'
import Day30 from 'container/Day30'
import Index from 'container/Index'

import HSBCDemo1 from 'container/HSBCDemo1'
import HSBCDemo2 from 'container/HSBCDemo2'
import HSBCDemo3 from 'container/HSBCDemo3'
import HSBCDemo4 from 'container/HSBCDemo4'
import HSBCDemo5 from 'container/HSBCDemo5'


const outDayRoutes = () => {

  let output = []
  let container = {
    0: { obj: Index, active: true },
    1: { obj: Day1, active: true },
    2: { obj: Day2, active: true },
    3: { obj: Day3, active: true },
    4: { obj: Day4, active: true },
    5: { obj: Day5, active: true },
    6: { obj: Day6, active: true },
    7: { obj: Day7, active: true },
    8: { obj: Day8, active: true },
    9: { obj: Day9, active: true },
    10: { obj: Day10, active: true },
    11: { obj: Day11, active: true },
    12: { obj: Day12, active: true },
    13: { obj: Day13, active: true },
    14: { obj: Day14, active: true },
    15: { obj: Day15, active: true },
    16: { obj: Day16, active: true },
    17: { obj: Day17, active: true },
    18: { obj: Day18, active: true },
    19: { obj: Day19, active: true },
    20: { obj: Day20, active: true },
    21: { obj: Day21, active: true },
    22: { obj: Day22, active: true },
    23: { obj: Day23, active: true },
    24: { obj: Day24, active: true },
    25: { obj: Day25, active: true },
    26: { obj: Day26, active: true },
    27: { obj: Day27, active: true },
    28: { obj: Day28, active: true },
    29: { obj: Day29, active: true }
  }

  Object.keys(container).forEach( key => {

    let d = container[key]

    console.log(d)
    if(!!d.active) {
      output.push({
        path: '/day/' + key,
        component: d.obj
      })
    }

  })


  let hsbcContainer = [
    HSBCDemo1,
    HSBCDemo2,
    HSBCDemo3,
    HSBCDemo4,
    HSBCDemo5
  ]

  let hsbcCounter = 0
  hsbcContainer.forEach( c => {

    let ver = String( hsbcCounter + 1 )

    output.push({
      path: '/hsbc/demo/' + ver,
      component: c
    })

    hsbcCounter++
  })

  return output
}

module.exports = outDayRoutes()
