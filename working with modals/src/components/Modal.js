import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'


const Modal = ({onClose, children, actionBar}) => {
  useEffect(()=>{
    document.body.classList.add('overflow-hidden');

    return ()=>{
      document.body.classList.remove('overflow-hidden');
    }
  },[])
  // return (
  //   <div>
  //     <div className='absolute inset-0 bg-gray-300 opacity-80'></div>
  //     <div className='absolute inset-40 p-10 bg-white'>This is a modal</div>
  //   </div>
  // )
  return ReactDOM.createPortal(
    <div>
      {/* <div onClick= {onClose} className='absolute inset-0 bg-gray-300 opacity-80'></div>
      <div className='absolute inset-40 p-10 bg-white'> */} 
       {/* This code would lead to bug as if we have the position of absolute then, the element will be displayed on the top of the page and will not work if the button is at the bottom */}
      <div onClick= {onClose} className='fixed inset-0 bg-gray-300 opacity-80'></div>
      <div className='fixed inset-40 p-10 bg-white'>
        <div className='flex flex-col justify-between h-full'>
        {children}
        <div className='flex justify-end'>
        {actionBar}
        </div>
      </div>
        </div>
    </div>,
      document.querySelector('.modal-container') // THis is the reference to the modal where this portal will be rendered.
  )
}

export default Modal