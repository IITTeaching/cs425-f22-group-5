import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {useState} from 'react';
import CustomerRegister from '../components/CustomerRegister'

export const Register = () => {
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
      <h1 class="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">Create your customer account</h1>
    </div>

  

   
     <CustomerRegister/>
    


  </div>
</section>  
  </div>
  )
}
export default Register