import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    // action no longer is a promise!
    // Middleware resolved the promise. (redux-promise)
    console.log('Action received:', action);

    switch (action.type) {
        case FETCH_WEATHER:
            return [ action.payload.data, ...state ];
            break;
    }
    return state;
}
