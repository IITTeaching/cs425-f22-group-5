import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {useState} from 'react';
import CustomerRegister from '../components/CustomerRegister'

export const EmployeeLogin = () => {
    const [isShown, setIsShown] = useState(false);
    const [isNotShown, setIsNotShown] = useState(true);
    const handleClick = event => {
      // 👇️ toggle shown state
      
  
      // 👇️ or simply set it to true
      setIsShown(true);
      setIsNotShown(false);
    };
  
  return (
    <div>
    <section class="py-24 flex items-center min-h-screen justify-center bg-white">
  <div class="mx-auto max-w-[43rem]">
    <div class="text-center">
      <h1 class="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">Employee Login</h1>
    </div>

    <div class="mt-6 flex items-center justify-center gap-4">
     
     
    <Link href = "/CustomerLogin">
      <button href="#" class="transform rounded-md bg-[#9c9c9c] px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700"> Customer </button>
      </Link>

     
    </div>

   
     <Login/>
    


  </div>
</section>  
  </div>
  )
}
export default EmployeeLogin