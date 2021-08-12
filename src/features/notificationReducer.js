

const notification = (state, action) => {
    switch (action.type) {
        case 'notify': return new Notification(action.payload.title);
        default: return state;
    }
}

export default notification;