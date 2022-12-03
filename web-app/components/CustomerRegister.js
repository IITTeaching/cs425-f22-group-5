import React, { useState } from 'react'

const CustomerRegister = () => {

  const [fullnameReg, setFullnameReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')
  const [mailingaddressReg, setMaillingaddressReg] = useState('')
  const [homebranchReg, setHomeBranchReg] = useState('')

  const register = () => {
    Axios.post("https://localhost3001/register", {
      fullname: fullnameReg,
      password: passwordReg,
      mailingaddress:mailingaddressReg,
      branch: branchReg

    })
  }
  return (
    <div >
        <section id="login" class="p-4 flex flex-col justify-center  mx-auto">
    <div class="p-6 bg-[#cc0000] rounded">
      <div class="  justify-center text-4xl font-black text-white m-3">
      
      <h1 class=" text-center ">Customer Sign up </h1>
      </div>
        <form id="login_form" action="api_login" method="POST" class="flex flex-col justify-center" >
          <label className="text-sm font-medium text-white">Full Name</label>
          <input className="mb-3 px-2 py-1.5
          mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500" type="text" 
          name="full name" 
          placeholder="Full Name " 
          onChange = {(e) => {setFullnameReg(e.target.value);
          }}
          required />
          
          <label class="text-sm font-medium text-white"> Mailing Address</label>
          <input class="mb-3 px-2 py-1.5
          mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500" 
          type="text" 
          name="branch" 
          placeholder="mailing address" 
          required 
          onChange = {(e) => {setMaillingaddressReg(e.target.value);
          }}
          />

<label class="text-sm font-medium text-white">Home Branch</label>
          <input class="mb-3 px-2 py-1.5
          mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500" 
          type="text" name="homebranch" 
          placeholder="home branch " 
          onChange = {(e) => {setHomeBranchReg(e.target.value);
          }}
          required />
          <label class="text-sm font-medium text-white">Password</label>
          <input class="
          mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500" 
          type="password" 
          name="password"
           placeholder="********" 
           required 
           onChange = {(e) => {setPasswordReg(e.target.value);
           }}/>
          <button class="px-4 py-1.5 rounded-md shadow-lg bg-white font-medium text-gray-100 block hover:bg-gray-100 transition duration-300" type="submit">
            <span id="login_process_state" class="hidden">Checking ...</span>
            <span id="login_default_state" className='text-black' >Login</span></button>
        </form>
    </div>
        </section>
    </div>
  )
}

export default CustomerRegister