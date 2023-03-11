import { Inter } from 'next/font/google'
import { Fragment,useState } from 'react'
import Modal from '../components/modal'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [showModal,setShowModal]=useState(false)
  return (
    <Fragment>
      
      <div className=' '>
        <button className='text-white bg-blue-700 fixed hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 mr-5 ml-10 my-5' onClick={()=> setShowModal(true)}>
          Modal
        </button>
      </div>
      <Modal isVisible={showModal} onClose={()=>
      setShowModal(false)}/>
    </Fragment>
  )
}
