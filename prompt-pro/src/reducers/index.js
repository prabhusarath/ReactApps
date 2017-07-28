const reminder = (actions) => {
    return {
        text: actions.text,
        id: Math.random()
    }
}

const reminders = (state =[], action) => {

    let reminders = null;

    switch(action.type){
        case 'ADD_TASK':
            reminders = [...state,reminder(action)];
            console.log('reminders',reminders);
            return reminders;
        default:
            return state;
    }

}

export default reminders;

