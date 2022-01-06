import React,{useState} from 'react'
import Child1 from './Child1'
import {AppContext} from "./context"

const Parent = () => {
  const [firstname, setFirstname] = useState("Hi, This is Firstname")
  const [lastname, setLastname] = useState("Hi, This is Lastname")
  return (
   <>
   {/* <Child1 data={firstname} data1={lastname} /> */}
   <AppContext.Provider value={{firstname, lastname}} >
     <Child1 />
   </AppContext.Provider>
   </>

  )
}

export default Parent
