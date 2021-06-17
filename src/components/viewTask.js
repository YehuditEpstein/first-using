import { connect } from "react-redux"
import actions from "../redux/actions"
import { ViewOneTask } from "./viewOneTask"

const ViewTask = (props) => {

   const showTask=()=>{
    fetch("http://localhost:3000/getAllTasks",{
        method:'GET' 
     }).then((response)=>{
         return response.json()
     }).then((result)=>{
         props.setTasks(result)
     }).catch((eror)=>console.log(eror))
   }
    const rendertasks = () => {
      return  props.allTasks && props.allTasks.map((task) => {
            return <ViewOneTask task={task}></ViewOneTask>
        })
    }
    return <>
    <button onClick={showTask}>show task</button>
        {rendertasks()}
    </>
}




const mapStateToProps = (state) => {
    return {
        allTasks: state.task.tasks
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setTasks:(tasks) => dispatch(actions.setTasks(tasks))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewTask)