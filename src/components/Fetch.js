import React, {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
const Fetch = () => {
  const [profile, setProfile] = useState([])

  const[search, setSelect] = useState('')

  const[name, setName] = useState('')

  const[number, setNumber] = useState('')
  
  useEffect( () => {
    getData()

  }, [])

 const getData = () => {
   const url = 'https://jsonplaceholder.typicode.com/todos'
   fetch(url)
   .then(res => res.json())
   .then(data => setProfile(data) )

  
   }
   const onChangeHandler = (e) =>  {
    setSelect(e.target.value)     
 }

 const onChangeHandler1 = (e) => {
 setName(e.target.value)
}

const onChangeHandler2 = (e) => {
 setNumber(e.target.value)
}

const onClickHandler = () => {
  console.log(search + name + number)
 }

  return (
  
    <>

    <input type= 'search' name= 'search' value= {search} onChange= {onChangeHandler} />

    <input type= 'text' name= 'name' value= {name} onChange= {onChangeHandler1} />

    <input type= 'number' name= 'number' value= {number} onChange= {onChangeHandler2} />

    <button type= 'submit' onClick= {onClickHandler}>Submit</button>

   
 <Table>
    <thead>
      <th>UserID</th>
      <th>ID</th>
      <th>Title</th>
      <th>Completed</th>
    </thead>
    <tbody>
     {profile.map(obj => {return (
       <tr>
         <td>{obj.userId}</td>
         <td>{obj.id }</td>
         <td>{obj.title}</td>
         <td>{obj.completed ? 'true' : 'false'}</td>
       </tr>
     )})}
    </tbody>
  </Table>

    </>
  );
}

export default Fetch 