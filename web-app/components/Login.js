import React from 'react'

const Login = () => {
  return (
    <div>
        <section id="login" class="p-4 flex flex-col justify-center ">
    <div class="p-6 bg-[#cc0000] rounded">
      <div class=" items-center justify-center text-4xl font-black text-white m-3">
      
      <h1 class=" text-center ">Banking Application</h1>
      </div>
        <form id="login_form" action="api_login" method="POST" class="flex flex-col justify-center" >
          <label class="text-sm font-medium text-white">Username</label>
          <input class="mb-3 px-2 py-1.5
          mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500" type="text" name="username" placeholder="wahyusa" required />
          <label class="text-sm font-medium text-white">Password</label>
          <input class="
          mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500" type="password" name="password" placeholder="********" required />
                    <p className="text-white">Don't have an account? <a onClick>Create one </a></p>

         <button class="px-4 py-1.5 rounded-md shadow-lg bg-white font-medium text-gray-100 block hover:bg-gray-100 transition duration-300" type="submit">
            <span id="login_process_state" class="hidden">Checking ...</span>
            <span id="login_default_state" className='text-black' >Login</span></button>

        </form>
    </div>
        </section>
    </div>
  )
}

export default Login