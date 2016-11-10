import * as types from '../constants/ActionTypes'



const initialState = {
    result:null,
    loading:false,
    validate:false,
    data:{}
}

export default function  validateAuth(state = initialState, action) {

    switch (action.type) {

        case types.AUTH + types.START:
            return {
                ...state,
                result:null,
                loading:true,
                validate:false,
                data:action.response
            }

        case types.AUTH + types.SUCCESS:
            return {
                ...state,
                result:true,
                loading:false,
                validate:true,
                data:action.response
            }

        case types.AUTH  + types.FAIL:
            return {
                ...state,
                result:false,
                loading:false,
                validate:true,
                data:action.error
            }

/*
        case types.LOAD_CITY + types.SUCCESS:
            const isCity = state.find((city) => city.id === action.data.id)

            if(!isCity){
                return state.push( new itemCity({
                    "id": action.data.id,
                    "city": action.data.name,
                    "data": action.data
                }))}

            return state

        case types.LOAD_CITY + types.FAIL:
            return state*/




        default:
            return state
    }
}