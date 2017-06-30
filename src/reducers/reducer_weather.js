import { FETCH_WEATHER } from '../actions/index'

//NEVER mutate state in place in a reducer
//but return new instance of state
export default function ( state = [], action ) {
   // console.log("Action received ",action)

    switch (action.type) {
        case FETCH_WEATHER:
       //     return state.concat( action.payload.data )   //array push mutates array,
                                                            // concat returns a new instance (does not mutate array)
            return [ action.payload.data, ...state ]  //ES6 syntax  create a new array with the new record, followed by flattened / de-structured state
    }

    return state
}

