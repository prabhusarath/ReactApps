export const addtask = (text,due) => {
    const action ={
        type: 'ADD_TASK',
        text,
        due
    }
    console.log('Action Happening: '+ action.type + 'Data: ' + action.text);
    return action;
}


export const deltask = (id) => {
    const actions ={
        type: 'DEL_TASK',
        id
    }
    console.log('Deletion Happening: '+ actions.type + 'Data: ' + actions.id);
    return actions;
}

export const cleartask = () => {
    const actions ={
        type: 'CLEAR_TASK'
    }
    return actions;
}

export default {addtask,deltask,cleartask};