import React from 'react'
import { connect } from 'react-redux'
import actions from '../../redux/actions'
import './viewUser.css'
function ViewOneUser(props) {

    const changeFiled = (event) => {
        if (props.indexOfUserInRedux != props.indexUser)//אם הוא עדיין לא לחץ על edit אז שהיוזר לא יהיה עריך
            alert('you should selected user to edit, click edit of this user')
        else
            props.setUser({ name: event.target.name, value: event.target.value })
    }

    return (
        <>
            <div>

                <input
                    className='input_filed_user'
                    value={props.user.name}
                    onChange={changeFiled}
                    name='name'
                ></input>
                <input
                    className='input_filed_user'
                    value={props.user.age}
                    onChange={changeFiled}
                    name='age'
                ></input>

                <button onClick={() => { alert(`you edit user ${props.indexUser + 1}`); props.saveIndexOfUserThatEditHimNow(props.indexUser) }}>edit</button>
                <button disabled='false'>save</button>
            </div>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        indexOfUserInRedux: state.user.indexUser
    }
}
const mapDispatch = (dispatch) => {
    return {
        setUser: (user) => dispatch(actions.setUser(user)),
        saveIndexOfUserThatEditHimNow: (user) => dispatch(actions.saveIndexOfUserThatEditHimNow(user))
    }
}
export default connect(mapStateToProps, mapDispatch)(ViewOneUser)