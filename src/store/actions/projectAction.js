export const createProject = (project) => {
    return (dispatch, getState, getFirebase) => {
        const firestore = getFirebase().firestore();
        const authorId = getState().firebase.auth.uid;
        const profile = getState().firebase.profile;
        firestore
            .collection('projects')
            .add({
                ...project,
                authorFirstName: profile.firstName,
                authorLastName:  profile.lastName,
                authorId: authorId,
                createdAt: new Date()
            })
            .then(() => {
                dispatch({ type: 'CREATE_PROJECT', project });
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: 'CREATE_PROJECT_ERROR', error });
            });
    }
};
