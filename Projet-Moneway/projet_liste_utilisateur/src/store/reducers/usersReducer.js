const initialState = { status: [] }

export default function changeStatus(state = initialState, action) {
    let nextState

    switch (action.type) {
        case 'CHANGE_STATUS':
            if(state.status.includes(action.value)) {
                nextState = {
                    ...state,
                    status: state.status.filter(word => word !== action.value)
                }
            }
            else {
                nextState = {
                    ...state,
                    status : [...state.status, action.value]
                }
            }

        return nextState || state

        default : return state
    }
}