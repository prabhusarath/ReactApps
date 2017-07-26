import {ADD_TASK} from '../constant';

export const addTasks = (text) => {
    const action ={
        type: ADD_TASK,
        text
    }
    console.log('Action Happening: '+ action.type + 'Data: ' + action.text);
    return action;
}