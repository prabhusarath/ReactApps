import { bake_cookie,read_cookie } from 'sfcookies';


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
    state =read_cookie('reminders')

    switch(action.type){
        case 'ADD_TASK':
            reminders = [...state,reminder(action)];
            bake_cookie('reminders',reminders);
            return reminders;
        case 'DEL_TASK':
            reminders = removeById(state, action.id);
            bake_cookie('reminders',reminders);
            return reminders;
        default:
            return state;
    }

}

export default reminders;

