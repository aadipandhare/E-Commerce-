import React,{useState, useContext} from 'react'
// import { backendUrl } from '../context/ShopContext.jsx';
import { ShopContext } from './../context/ShopContext';
import axios from 'axios'

export const Login = () => {

  const [currentState, setCurrentState] = useState('Sign up');
  const {token, setToken, navigate, backendUrl} = useContext(ShopContext)

  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const [email, setEmail] = useState('')

  const onSubmitHandler = async(event) =>{
    event.preventDefault();

    try {
      
      if(currentState === 'Sign up'){

        const response = await axios.post(backendUrl + 'api/user/register')
        console.log(response)
      }
    } catch (error) {
      console.log(error.message)
    }

    
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700'action="">
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl  '>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>
    {currentState === 'Login' ? '' : <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' name="name" placeholder='name' required/>}
      <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' name="name" placeholder='email' required/>
      <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' name="name" placeholder='password' required/>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your Password</p>
        {
          currentState === 'Login'
          ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p> 
          : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
        }
      </div>

      <button className={'bg-black text-white font-light px-8 py-2 mt-4 cursor-pointer rounded'}>{currentState === 'Login' ? 'Sign Up' : 'Login'}</button>
    </form>
  )
}
