import ACTIONS from './Actions'
const initialState = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    score: 0
}

const clock = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_CLOCK_HOURS: return {
            hours: action.payload.hours,
            minutes: 0,
            seconds: 0,
            score: (this.hours + this.minutes / 60 + this.seconds / 3600).toFixed(2)
        };

        case ACTIONS.UPDATE_CLOCK_MINUTES: return {
            ...clock,
            minutes: action.payload.minutes,
            seconds: 0,
            score: (this.hours + this.minutes / 60 + this.seconds / 3600).toFixed(2)
        };

        case ACTIONS.UPDATE_CLOCK_SECONDS: return {
            ...clock,
            seconds: action.payload.seconds,
            score: (this.hours + this.minutes / 60 + this.seconds / 3600).toFixed(2)
        };

        case ACTIONS.UPDATE_CLOCK: return {
            hours: this.hours + action.payload.hours,
            minutes: this.minutes + action.payload.minutes,
            seconds: this.seconds + action.payload.seconds,
            score: (this.hours + this.minutes / 60 + this.seconds / 3600).toFixed(2)
        };




        default: return state;

    }
}

export default clock;