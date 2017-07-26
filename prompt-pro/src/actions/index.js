import {ADD_TASK} from '../constant';

export const addtask = (text) => {
    const action ={
        type: ADD_TASK,
        text
    }
    console.log('Action Happening: '+ action.type + 'Data: ' + action.text);
    return action;
}

export default addtask;