// State argument is not app state, only the state
// this reducer is responsisble for
export default function(state:any = null, action:any) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload
    }
    return state
}