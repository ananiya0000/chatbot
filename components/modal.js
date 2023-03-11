import {React,useState} from 'react'

function Modal({isVisible,onClose}) {
    const [text,setText]=useState([])
    const [singletext,setSingletext]=useState("");
    if(!isVisible) return null;
    const handleClose=(e)=>{
        if( e.target.id === 'wrapper' ) onClose();
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(singletext!="")
        setText(prev_state=>[...prev_state,singletext])
        setSingletext("")
    }
    const handleChange=(e)=>{
        setSingletext(e.target.value)
        console.log(singletext)
    }
  return (
    <div className='fixed inset-0 bg-black bg-opacity-0 flex justify-center items-center' id='wrapper' onClick={handleClose}>
        <div className=' w-3/12 flex flex-col rounded-md p-3 bg-lime-200'>
            <button className='text-white text-xl place-self-end' onClick={()=>onClose()}>X</button>
            <div className=' text-white pb-4 w-full '>
                { text.map((element)=>{
                    return (<h1 className=' bg-blue-600 ml-auto text-sm px-2 py-1 w-fit m-3  rounded-md '>{element}</h1>)
                })}
            </div>
            <form onSubmit={handleSubmit} action="" className=' flex m-2'>
                <button type="" className='w-1/6'>S</button>
                <input className=' bg-slate-100 w-4/6 rounded-md p-1' onChange={handleChange} value={singletext} type="text" name="chat" id="chat" />
                <button type="submit" className='w-1/6'>B</button>
            </form>
            </div> 
    </div>
  )
}

export default Modal