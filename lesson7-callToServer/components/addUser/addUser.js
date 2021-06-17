import React, { useState } from 'react'
import { connect } from 'react-redux'
import actions from '../../redux/actions'

function AddUser(props) {

    const [newUser, setNewUser] = useState()
    const changeUser = (event) => {
        setNewUser({ name: event.target.value })
    }
    const addToServer=()=>{
        props.addUser(newUser)
    }
    return (
        <>
            <input onChange={changeUser}></input>
            <label>name</label>
            <button onClick={addToServer}>add user to server</button>
        </>
    )
}

const mapStateToProps=(state)=>{
    return{

    }
}
const mapDispatch=(dispatch)=>{
    return{
        addUser:(user)=>dispatch(actions.addUser(user))
    }
}
export default connect(()=>{},mapDispatch)(AddUser)