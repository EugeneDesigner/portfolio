import * as actionTypes from '../constants/actionTypes'
import { data } from '../../projects/ProjectData'

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

export function uploadWorks(category) {
  let works = []
  if ( category === 'all' ) {
    for (let index in data ) {
      works = works.concat(data[index])
      }
  shuffle(works)
   } else {
     works = data[category]
   }
   return({
     type: actionTypes.DISPLAY_WORKS,
     payload: works
   })
}

export function chooseCategory(category) {
  return ({
    type: actionTypes.CHOOSE_CATEGORY,
    payload: category
  })
}
