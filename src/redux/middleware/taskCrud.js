// import actions from "../actions"

// export const getAllTasks=({dispatch,getState})=>next=>action=>{
//     if(action.type==="GET_TASKS"){
//         fetch("http://localhost:3000/getAllTasks",{
//            method:"GET" 
//         }).then((response)=>{
//             return response.json()
//         }).then((result)=>{
//             dispatch(actions.setTasks(result)) 
//         }).catch((eror)=>console.log(eror))
//     }
//     return next(action)
// }