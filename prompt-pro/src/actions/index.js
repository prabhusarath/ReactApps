export const addtask = (text) => {
    const action ={
        type: 'ADD_TASK',
        text
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

export default addtask;
export default deltask;