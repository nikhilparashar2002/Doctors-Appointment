import React, { useState } from 'react'

function Login() {
  const [state, setState] = useState('Sign Up')

  const [email, setemail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }

  return (
    <div>
      <form className='min-h-[80vh] flex items-center'>
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
          <p className='text-2xl font-semibold'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
          <p>Please {state === 'Sign Up' ? 'Create Account' : 'Login'} to book appointment</p>
          {
            state === 'Sign Up' && <div className='w-full'>
              <p>Fullname</p>
              <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='text' onChange={(e) => setName(e.target.name)} value={name} />
            </div>
          }
          {/* <div className='w-full'>
            <p>Fullname</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='text' onChange={(e) => setName(e.target.name)} value={name} />
          </div> */}
          <div className='w-full'>
            <p>Email</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='text' onChange={(e) => setEmail(e.target.email)} value={email} />
          </div>
          <div className='w-full'>
            <p>Password</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='password' onChange={(e) => setPassword(e.target.password)} value={password} />
          </div>
          <button className='bg-primary text-white w-full py-2 rounded-md text-base'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</button>
          {
            state === 'Sign Up' ? <p>Already have an account? <span className='text-primary underline cursor-pointer' onClick={() => setState(
              'Login'
            )}>Login here</span></p> : <p>Create an new account? <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer'>click here</span></p>
          }
        </div>

      </form>
    </div>
  )
}

export default Login
