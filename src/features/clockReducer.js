import ACTIONS from './Actions'
const initialState = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    score: (0.00).toFixed(2)
}

const clock = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_CLOCK: return state.minutes >= 59 && state.seconds >= 59 ?
            {
                hours: state.hours + 1,
                minutes: 0,
                seconds: 0,
                score: (state.hours + state.minutes / 60 + state.seconds / 3600).toFixed(2)
            } : state.seconds >= 59 ?
                {
                    ...state,
                    minutes: state.minutes + 1,
                    seconds: 0,
                    score: (state.hours + state.minutes / 60 + state.seconds / 3600).toFixed(2)
                } :
                {
                    ...state,
                    seconds: state.seconds + 1,
                    score: (state.hours + state.minutes / 60 + state.seconds / 3600).toFixed(2)
                };

        case ACTIONS.INCREMENT_CLOCK_HOURS: return {
            ...state,
            hours: state.hours + 1,
            score: (state.hours + 1 + state.minutes / 60 + state.seconds / 3600).toFixed(2)
        };

        case ACTIONS.INCREMENT_CLOCK_MINUTES: return {
            ...state,
            minutes: state.minutes + 1 > 59 ? 59 : state.minutes + 1,
            score: (state.hours + (state.minutes + 1 > 59 ? 59 : state.minutes + 1) / 60 + state.seconds / 3600).toFixed(2)
        };


        case ACTIONS.DECREMENT_CLOCK_HOURS: return {
            ...state,
            hours: state.hours - 1 <= 0 ? 0 : state.hours - 1,
            score: (state.hours - 1 <= 0 ? 0 : state.hours - 1 + state.minutes / 60 + state.seconds / 3600).toFixed(2)
        };

        case ACTIONS.DECREMENT_CLOCK_MINUTES: return {
            ...state,
            minutes: state.minutes - 1 <= 0 ? 0 : state.minutes - 1,
            score: (state.hours + (state.minutes - 1 <= 0 ? 0 : state.minutes - 1) / 60 + state.seconds / 3600).toFixed(2)
        };

        case ACTIONS.RESET_CLOCK: return {
            hours: 0,
            minutes: 0,
            seconds: 0,
            score: (0.00).toFixed(2)
        };

        case ACTIONS.RETRIEVE_CLOCK_TIME: return {
            hours: state.hours - action.payload.note.time.hours,
            minutes: state.minutes - action.payload.note.time.minutes,
            seconds: state.seconds - action.payload.note.time.seconds,
            score: ((state.hours - action.payload.note.time.hours) + (state.minutes - action.payload.note.time.minutes) / 60 + (state.seconds - action.payload.note.time.seconds) / 3600).toFixed(2)
        };

        case ACTIONS.ADD_CLOCK_TIME_WHEN_DUPLICATE: return {
            hours: state.hours + action.payload.note.time.hours,
            minutes: state.minutes + action.payload.note.time.minutes,
            seconds: state.seconds + action.payload.note.time.seconds,
            score: ((state.hours + action.payload.note.time.hours) + (state.minutes + action.payload.note.time.minutes) / 60 + (state.seconds + action.payload.note.time.seconds) / 3600).toFixed(2)
        }

        default: return state;



    }
}

export default clock;