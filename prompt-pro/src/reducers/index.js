const reminder = (actions) => {
    let { text,due } = actions
    return {
        id: Math.random(),
        text,
        due
    }
}

const removeById = (state= [], id) => {
    const rem = state.filter( reminder => reminder.id !== id );
    return rem;
}

const reminders = (state =[], action) => {

    let reminders = null;

    switch(action.type){
        case 'ADD_TASK':
            reminders = [...state,reminder(action)];
            console.log('reminders',reminders);
            return reminders;
        case 'DEL_TASK':
            reminders = removeById(state, action.id);
            return reminders;
        default:
            return state;
    }

}

export default reminders;

