import React, {useContext} from 'react'
import {AppContext} from "./context"

const Child4 = () => {
const {firstname, lastname} = useContext(AppContext)
console.log('data', firstname, lastname)
  return (
    <div>
      <h3>{firstname}</h3>
      <h3>{lastname}</h3>
    </div>
  )
}

export default Child4
