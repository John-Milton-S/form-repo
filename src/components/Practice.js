import React, {useState, useEffect} from "react";

const Practice = () => {

  const [data, setData] = useState ({name:'', age: ''})


   const onChangeHandler = (e) => {
   const  {name,value} = e.target
   setData ({...data, [name]: value})

   }

    useEffect (() => {
       window.addEventListener('resize', showAlert) 

    }, [])

    const onClickHandler = () => {
      console.log('data', data)
    }

    const showAlert = () => {
      alert('Hi, Hello World')

    }

  return (

    <>

    <h2>This is a From</h2>

    <label>Name:<input type= 'text' name= 'name' value= {data.name} onChange= {onChangeHandler} /></label>

    <label>Age: <input type= 'number' name= 'age' value= {data.age} onChange= {onChangeHandler}  /> </label>

    <button type= 'type' onClick= {onClickHandler}>Submit</button>

    </>
  );
}

export default Practice