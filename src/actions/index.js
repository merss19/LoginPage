import * as types from '../constants/ActionTypes'



export function auth(values) {
    console.log('auth-actions')
  return {
    type: types.AUTH,
    values:values,
    api: `http://...`
  }
}


