const initState = {
    projects: []
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('CREATE_PROJECT', action);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('CREATE_PROJECT_ERROR', action);
            return state;
        default:
            return state;
    }
};

export default projectReducer;
