import React from 'react'

const Input_search = ({setnameLocal,nameLocal,apiFetch}) => {
    const keyEnter = (key)=>{
        if(key==='Enter'){
            apiFetch()
            setnameLocal('')
        }
    }
  return (
    <div>
          <input
         onChange={(e)=>(setnameLocal(e.target.value))}
          onKeyDown = {(e)=>(keyEnter(e.key))}
          value = {nameLocal}
          type="text" placeholder='Tỉnh thành phố ' />
    </div>
  )
}

export default Input_search