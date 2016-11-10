import { combineReducers } from 'redux'
import  validateAuth from './validateAuth'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    form:formReducer,
    validateAuth:validateAuth
})

/*
 const reducers = {
 // ... your other reducers here ...
 form: formReducer     // <---- Mounted at 'form'
 }
 const reducer = combineReducers(reducers)*/
