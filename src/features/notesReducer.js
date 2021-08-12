import ACTIONS from './Actions';

const nextId = array => array.length;


const initialState = [
    {
        id: 0, time: {
            hours: 0,
            minutes: 59,
            seconds: 56,
            score: 0.98
        },
        playing: false,
        options: false,
        title: 'First Note',
        text: 'This is my first note'
    },
    {
        id: 1, time: {
            hours: 0,
            minutes: 1,
            seconds: 2,
            score: 0.02
        },
        playing: false,
        options: false,
        title: 'Second Note',
        text: 'This is my second note'
    },
    {
        id: 2, time: {
            hours: 0,
            minutes: 59,
            seconds: 56,
            score: 0.98
        },
        playing: false,
        options: false,
        title: 'First Note',
        text: 'This is my first note'
    },
    {
        id: 3, time: {
            hours: 0,
            minutes: 1,
            seconds: 2,
            score: 0.02
        },
        playing: false,
        options: false,
        title: 'Second Note',
        text: 'This is my second note'
    }
];

const notes = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.CREATE_NOTE: return [
            ...state,
            {
                id: nextId(state),
                time: {
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    score: (0.00).toFixed(2)
                },
                playing: false,
                options: false,
                last: 0,
                title: '',
                text: ''
            }
        ];

        case ACTIONS.TOGGLE_PLAY: return state.map(note => {
            if (note.id !== action.payload.id)
                return {
                    ...note,
                    playing: false
                }

            else return {
                ...note,
                last: action.payload.lastTime,
                playing: !note.playing
            }
        });



        case ACTIONS.UPDATE_SECONDS: return state.map(note => {
            if (note.id !== action.payload.id)
                return note;
            return {
                ...note,
                time: {
                    ...note.time,
                    seconds: action.payload.seconds,
                    score: (note.time.hours + note.time.minutes / 60 + note.time.seconds / 3600).toFixed(2)

                }
            }
        });

        case ACTIONS.UPDATE_MINUTES: return state.map(note => {
            if (note.id !== action.payload.id)
                return note;
            return {
                ...note,
                time: {
                    ...note.time,
                    minutes: action.payload.minutes,
                    seconds: 0,
                    score: (note.time.hours + note.time.minutes / 60 + note.time.seconds / 3600).toFixed(2)
                }
            }
        });

        case ACTIONS.UPDATE_HOURS: return state.map(note => {
            if (note.id !== action.payload.id)
                return note;
            return {
                ...note,
                time: {
                    ...note.time,
                    hours: action.payload.hours,
                    minutes: 0,
                    seconds: 0,
                    score: (note.time.hours + note.time.minutes / 60 + note.time.seconds / 3600).toFixed(2)
                }
            }
        });

        case ACTIONS.OPEN_OPTIONS: return state.map(note => {
            if (note.id !== action.payload.id)
                return note;
            return {
                ...note,
                options: !note.options
            }
        });

        case ACTIONS.INCREMENT_HOURS: return state.map(note => {
            if (note.id !== action.payload.id)
                return note;
            return {
                ...note,
                time: {
                    ...note.time,
                    hours: note.time.hours + 1,
                    score: (note.time.hours + 1 + note.time.minutes / 60 + note.time.seconds / 3600).toFixed(2)
                }
            }
        });

        case ACTIONS.DECREMENT_HOURS: return state.map(note => {
            if (note.id !== action.payload.id)
                return note;
            return {
                ...note,
                time: {
                    ...note.time,
                    hours: note.time.hours - 1 <= 0 ? 0 : note.time.hours - 1,
                    score: (note.time.hours - 1 <= 0 ? 0 : note.time.hours - 1 + note.time.minutes / 60 + note.time.seconds / 3600).toFixed(2)
                }
            }
        });

        case ACTIONS.INCREMENT_MINUTES: return state.map(note => {
            if (note.id !== action.payload.id)
                return note;
            return {
                ...note,
                time: {
                    ...note.time,
                    minutes: note.time.minutes + 1 > 59 ? 59 : note.time.minutes + 1,
                    score: (note.time.hours + (note.time.minutes + 1 > 59 ? 59 : note.time.minutes + 1) / 60 + note.time.seconds / 3600).toFixed(2)
                }
            }
        });

        case ACTIONS.DECREMENT_MINUTES: return state.map(note => {
            if (note.id !== action.payload.id)
                return note;
            return {
                ...note,
                time: {
                    ...note.time,
                    minutes: note.time.minutes - 1 <= 0 ? 0 : note.time.minutes - 1,
                    score: (note.time.hours + (note.time.minutes - 1 <= 0 ? 0 : note.time.minutes - 1) / 60 + note.time.seconds / 3600).toFixed(2)
                }
            }
        });

        case ACTIONS.DELETE_NOTE: return state.filter(note => {
            if (note.id !== action.payload.id)
                return note;
        });

        case ACTIONS.DELETE_ALL: return [];

        case ACTIONS.EDIT_TEXT: return state.map(note => {
            if (note.id !== action.payload.id)
                return note;
            return {
                ...note,
                text: action.payload.text
            }
        });

        case ACTIONS.EDIT_TITLE: return state.map(note => {
            if (note.id !== action.payload.id)
                return note;
            return {
                ...note,
                title: action.payload.title
            }
        });

        case ACTIONS.DUPLICATE:
            let newArr = [];
            for (let i = 0; i < state.length; i++) {
                if (state[i].id !== action.payload.id)
                    newArr.push(state[i]);
                else {
                    newArr.push(state[i]);
                    newArr.push({ ...state[i], options: false, playing: false, id: nextId(state) });
                }
            }
            return newArr;

        case ACTIONS.RESET_TIME: return state.map(note => {
            if (note.id !== action.payload.id)
                return note;
            return {
                ...note,
                time: {
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    score: (0.00).toFixed(2)
                },
                playing: false
            }
        });

        case ACTIONS.LAST_PLAYING:
            let onlyId = [];
            let onlyLast = [];
            state.map(note => {
                onlyId.push(note.id);
                onlyLast.push(note.last);
            });

            let bestLast = Math.max(...onlyLast);
            let decision;

            for (let i = 0; i < onlyLast.length; i++)
                if (onlyLast[i] === bestLast)
                    decision = i;


            let bestId = state.length - 1;
            if (decision === undefined) {
                console.log('No item to be resumed');
            }
            else {
                bestId = onlyId[decision];
            }

            return state.map(note => {
                if (note.id !== bestId)
                    return note;
                return {
                    ...note,
                    playing: !note.playing
                }
            });

        default: return state;
    }
};

export default notes;

