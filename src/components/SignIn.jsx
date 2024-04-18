import React from 'react'
import { signInWithGoogle } from '../firebase/firebase'

const SignIn = () => {
    const handleSignIn = async() => {
        try{
            await signInWithGoogle()
        }catch(error){
            console.log(error)
        }
    }

  return (
    <div className='main-container'>
        <div>
            <h1>Sign In</h1>
            <button onClick={handleSignIn}>
                Signin with Google
            </button>
        </div>
    </div>
  )
}

export default SignIn