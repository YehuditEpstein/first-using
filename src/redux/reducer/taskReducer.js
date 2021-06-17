import produce from "immer"
import createReducer from "../reducerUtil"
const initialState={
    tasks:[]
}

const taskFunction={
    setTasks(state,action){
       state.tasks=action.payload
    }
}

const reducer=produce((state,action)=>{
createReducer(state,action,taskFunction)
},initialState)

export default reducer