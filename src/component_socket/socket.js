
import { useEffect, useState } from 'react'
import socketIoClient from 'socket.io-client'

const ENDPOINT="http://localhost:5000"

export const Socket=()=>{
const socket=socketIoClient(ENDPOINT)
const [messages,setMessages]=useState()
const [oneMessage,setOneMessage]=useState()
useEffect(()=>{
    socket.on("connect",()=>{
        console.log(socket);
        console.log("connect");
    })
    socket.on("message",(message)=>{
        console.log(message);
        let messageArr=[...message]//מכיל את כל ההודעות הקודמות
        messageArr.push(message)
        setMessages(messageArr)
    })
   
},[messages])
const sendToServer=()=>{
socket.emit("sendMessage",oneMessage)
}

const renderMessage=()=>{
return messages&&messages.map((message)=>{
    return <div>{message}</div>
})
}

return<>
<input onChange={(e)=>setOneMessage(e.target.value)}></input>
<button onClick={sendToServer}>send</button>
{renderMessage()}
</>
}