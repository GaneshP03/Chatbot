import React from 'react'

const Login = () => {
  return (
    <>
<div className='h-screen w-full flex justify-center items-center border-2'>
     <form action="" className='flex justify-center items-center flex-col border-2 border-black h-[30rem] w-[20rem]'>
        <input type="text" placeholder='Username' className='p-2 border-2 border-black my-4 '/>
        <input type="password" placeholder='Password' className='p-2 border-2 border-black my-4 ' />
        <button class="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
     </form>
</div>
</>
  )
}

export default Login