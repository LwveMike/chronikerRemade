import ACTIONS from './Actions'

const initialState = {
    minutes: 1,
    total: 60,
    seconds: 0,
    isActive: false
}

const notification = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.NOTIFICATION_START: return {
            ...state,
            total: state.minutes * 60,
            seconds: 0,
            isActive: true
        }

        case ACTIONS.NOTIFICATION_COUNT_SECONDS: return {
            ...state,
            seconds: state.seconds + 1
        }

        case ACTIONS.NOTIFICATION_RESET_SECONDS: return {
            ...state,
            seconds: 0
        }

        case ACTIONS.NOTIFICATION_CHANGE_MINUTES: return {
            ...state,
            minutes: action.payload.minutes > 60 ? 60 : action.payload.minutes,
        }

        default: return state;
    }
}

export default notification;