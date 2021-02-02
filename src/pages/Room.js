import React, { useContext, useEffect,  useState } from 'react'
import { AuthContext } from '../AuthService'
import firebase from '../config/firebase'

// import Login from './Login'
// import SignUp from './SignUp'


const Room = () => {
    const[messages,setMessages] = useState('')
    const[value,setValue] = useState('')
    const user = useContext(AuthContext)
console.log(user)
console.log('ユーザー')

    useEffect(() => {
        firebase.firestore().collection('messages')
        .onSnapshot((snapshot) => {
            const messages = snapshot.docs.map(doc => {
                return doc.data ()
            })
            setMessages(messages)
        })
    },[])
  

    const handleSubmit = e => {
        e.preventDefault()
        firebase.firestore().collection('messages')
        .add({
            user : user.displayName,
            content: value,
            date: new Date()
        })
        setMessages([
            ...messages,
           {
               user:user.displayName,
               email: user.email,
               content: value
           }
        ])
    }
   console.log('messages')
   console.log('メッセージ')
    
    return (
        <>
        <h1>Room</h1>
        <ul>
                {

                    messages ?
                    messages.map(messages => (
                        <li>{messages.user}:{messages.content}</li>
                     )) :
                     <p>...loading</p>
                }
        </ul>
        <form onSubmit = {handleSubmit}>
          <input 
           type = "text"
        //    value = {value}
           onChange = {e => setValue(e.target.value) }
           />
         <button type = "submit">送信</button>
        </form>
        <button onClick = {() => firebase.auth().signOut()}>Logout</button>
        </>
    )
}

export default Room 
