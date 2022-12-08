import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {useState} from 'react';
import CustomerRegister from '../components/CustomerRegister'

export default function Home() {
  const [isShown, setIsShown] = useState(false);
  const [isNotShown, setIsNotShown] = useState(true);
  const handleClick = event => {
    // 👇️ toggle shown state
    

    // 👇️ or simply set it to true
    setIsShown(true);
    setIsNotShown(false);
  };

  
  return (
    <div  className="bg-[#9c9c9c]">
     <div className="text-center  ">
      
        
        <section className="py-24 flex items-center min-h-screen justify-center bg-white">
  <div className="mx-auto max-w-[43rem]">
    <div className="text-center">
      <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">What type of user are you?</h1>
    </div>

    <div className="mt-6 flex items-center justify-center gap-4">
      <Link href = "" onClick={handleClick}>
      <button href="#" className="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700">Customer</button>

      </Link>
     
      <Link href = "" >
      <button href="#" className="transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50"> Employee </button>
      </Link>

     
    </div>

   



  </div>
</section>

     </div>
    {/* <Login /> */}
      
    </div>
  )
}
