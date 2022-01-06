import React, {useState} from "react";
import Button from 'react-bootstrap/Button';

const Allinput = () => {

  const [name,setName] = useState('')
  const [pass,setPass] = useState('')
  const [age,setAge] = useState('')
  const [date,setDate] = useState('')
  const [radio,setRadio] = useState('')
  const [select,setSelect] = useState('')
  const [phone,setPhone] = useState('')
  const [email,setEmail] = useState('')
  const [search,setSearch] = useState('')
  const [range,setRange] = useState('')
  const [file,setFile] = useState('')
  const [checkbox,setBox] = useState(false)


  const onChangeNameHandler = (e) => {
      setName(e.target.value)
  }

  const onChangePasswordHandler = (e) => {
    setPass(e.target.value)
}

const onChangeAgeHandler = (e) => {
  setAge(e.target.value)
}

const onChangeDateHandler = (e) => {
  setDate(e.target.value)
}

const onChangeGenderHandler = (e) => {
  setRadio(e.target.value)
}

const onChangeSelectHandler = (e) => {
  setSelect(e.target.value)
}


const onChangePhoneHandler = (e) => {
  setPhone(e.target.value)
}

const onChangeEmailHandler = (e) => {
  setEmail(e.target.value)
}

const onChangeSearchHandler = (e) => {
  setSearch(e.target.value)
}

const onChangeRangeHandler = (e) => {
  setRange(e.target.value)
}

const onChangeFileHandler = (e) => {
  setFile(e.target.value)
}

const onChangeCheckboxHandler = (e) => {
  setBox(e.target.checked)
}



const onClickHandler = (e) => {
  e.preventDefault()
  console.log('name:', name)
  console.log('pass:', pass)
  console.log('age:', age)
  console.log('date:', date)
  console.log('select:', select)
  console.log('radio:', radio)
  console.log('phone:', phone)
  console.log('email:', email)
  console.log('search:', search)
  console.log('range:', range)
  console.log('file:', file)
  console.log('checkbox:', checkbox)

    
}




  return (

    <form>

      <label for= 'name'> Name: <input type="text" name= 'name' value= {name} onChange= {onChangeNameHandler}  /></label> <br/><br/><br/>

      <label for= 'password'>Password: <input type="password" name= 'password' value= {pass} onChange= {onChangePasswordHandler} /></label><br/><br/><br/>

      <label for= 'age'>Age: <input type="number" name= 'age' value= {age} onChange= {onChangeAgeHandler} /></label><br/><br/><br/>

      <label for= 'date'>DOB: <input type="date" name= 'date' value= {date} onChange= {onChangeDateHandler} /></label><br/><br/><br/>
 
      <label for= 'radio'> Gender: <label for= 'male'> Male </label><input type="radio" name='radio' value= 'male' onChange= {onChangeGenderHandler} /><label for= 'female'> Female </label><input type="radio" name='radio'  value= 'female' onChange= {onChangeGenderHandler} /><label for= 'others'> Others </label><input type="radio" name='radio'  value= 'others' onChange= {onChangeGenderHandler} /></label><br/><br/><br/>

      <label>Country:   <select name='select' onChange= {onChangeSelectHandler} >
             <option value="Africa">Africa</option>
             <option value="USA">USA</option>
             <option value="China">China</option>
             <option value="India">India</option>
             <option value="Pakistan">Pakistan</option>
             <option value="Brazil">Brazil</option>
           </select> </label> <br/><br/><br/> 

      <label for= 'phone'>Phone.No: <input type="tel" name= 'phone' value= {phone} onChange= {onChangePhoneHandler} /></label><br/><br/><br/>

      <label for= 'email'>Email: <input type="email" name= 'email' value= {email} onChange= {onChangeEmailHandler} /></label><br/><br/><br/>

      <label for= 'search'>Search Box: <input type="search" name= 'search' value= {search} onChange= {onChangeSearchHandler} /></label><br/><br/><br/>

      <label for= 'range'>Range: <input type="range" name= 'range' value= {range} onChange= {onChangeRangeHandler} /></label><br/><br/><br/>

      <label for= 'file'>Upload Resume:<input type="file" name= 'file' value= {file} onChange= {onChangeFileHandler} /> </label><br/><br/><br/>

      <input type="checkbox" name= 'checkbox' checked= {checkbox} onChange= {onChangeCheckboxHandler} /><label for= 'checkbox'>Checkbox</label><br/><br/><br/>

      <Button onClick= {onClickHandler}>Submit</Button>


    </form>

  );
}

export default Allinput