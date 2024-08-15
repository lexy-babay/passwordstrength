import React, { useRef, useState } from 'react'

function Test() {
  let [him,sethim] = useState('password')
  let [yet,setyet] = useState('🙈')
  let [men,setmen] = useState('0%')
  let [boy,setboy] = useState('')
  let jet = useRef()
  let [day,setday] = useState('')


function type() {
  if (him == 'password') {
    sethim('text')
    setyet('🙉')
    
  } else {
    sethim('password')
    setyet('🙈')
  }
  
}

function checker() {
  if (jet.current.value.length <= 4) {
      setmen('30%')
      setboy('red')
      setday('weak')
    
  } else if (jet.current.value.length >=7) {
    setmen('70%')
    setboy('yellow')
    setday('fragile')
  
    
  }if (jet.current.value.length >=10) {
    setmen('100%')
    setboy('green')
    setday('strong')
  
  } {
    
  }
  
}

  return (
    <>
    <div className='bg-gray-500 h-[100vh] justify-center items-center flex '>
      <div className='grid justify-center items-center'>
      <div className='flex gap-[5px] '>
        <input type={him} className='border border-solid border-yellow-200' ref={jet} onInput={checker}/>
        <button className='bg-slate-800 p-2 rounded-[3px] ' onClick={type}>{yet}</button>

      </div>
      
      <div className='flex items-center gap-2'>
        <section className='bg-zinc-600 w-[170px] h-[7px] rounded-lg'>
          <div className='h-[inherit]  rounded' style={{width:men,background:boy,transition:'0.5s'}}></div>
        </section>
        <p>{day}</p>
      </div>

      </div>


    </div>
    
    
    
    </>
  )
}

export default Test