import ACTIONS from './Actions';

const nextId = array => array.length;


const initialState = [
    {
        id: 0, time: {
            hours: 0,
            minutes: 0,
            seconds: 23,
            score: 0
        },
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
        title: 'Second Note',
        text: 'This is my second note'
    }
];

const notes = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.CREATE_NOTE: return [
            ...state,
            {
                id: action.payload.nextId,
                time: {
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    score: 0
                },
                title: action.payload.title,
                text: action.payload.text
            }
        ];

        case ACTIONS.COUNT_TIME: state.map(note => {
            if (note.id !== action.payload.id)
                return note;
            return {
                ...note,
                time: {
                    ...note.time,
                    seconds: note.time.seconds + 1
                }
            }
        })
        default: return state;
    }
};

export default notes;

