import actions from "../../../lesson6-redux2/actions"

export const addUser=({dispatch,getState})=>next=>action=>{
    if(action.type==='ADD_USER'){
        
        fetch('http://localhost:9000/createUser1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(action.payload)
        })
            .then((response) => {
                return response.json()
            })
            .then((result)=>{
               dispatch(actions.addUserAfterReturnFromServer(result.user))
            })
    }
    return next(action);
}
