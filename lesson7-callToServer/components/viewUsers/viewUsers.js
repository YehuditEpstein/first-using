import React, { useState } from 'react'
import ViewOneUser from '../viewUser/viewUser'
import axios from 'axios'
import { connect } from 'react-redux'
import actions from '../../../lesson6-redux2/actions'

 function ViewUsers(props) {
    let url = 'http://localhost:9000/getAllUsers'

    // const [users, setUsers] = useState([])
    const getAllUsers = () => {
        fetch(url,
            { method: 'GET' }
        ).then((response) => {//מחזיר נתונים של הבקשה שביצענו
            console.log(response);
            return response.json()
        }).then((result) => {//מחזיר את התוצאה
            props.setUsers(result.users)
        }).catch((error)=>{
            console.log(error);
        })
    }
    const getAllUsersAxios=()=>{
        axios.get(url).then((result)=>{
            // setUsers(result.data.users)
            props.setUsers(result.data.users)
        })
        .catch((error)=>{
            alert(error)
        })
    }
    const renderUsers = () => {
        return  props.allUsers&&props.allUsers.map((user,index) => {
            return <ViewOneUser indexUser={index} user={user}></ViewOneUser>
        })
    }
    return (
        <>
            <button onClick={getAllUsersAxios}>get all user from server</button>
            {renderUsers()}
        </>
    )
}
const mapStateToProps=(state)=>{
    return{
        allUsers:state.user.users
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        setUsers:(users)=>dispatch(actions.setUsers(users))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewUsers)