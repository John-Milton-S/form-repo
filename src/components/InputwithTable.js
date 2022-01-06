import React, {useState} from "react";
import Button from 'react-bootstrap/Button';

const InputwithTable = () =>  {

  const initialValue = {id: '', fname:'', lname: '', email: '', tel: '', password: ''}

  const[data,setData] = useState(initialValue)

  const [profile,setProfile] = useState([])

  


  const onChangeHandler = (e) => {
    const{name,value} = e.target
    setData({...data,[name]:value})

  }

  const onClickHandler = (e) => {
    
     e.preventDefault()
     if(data.id === ''){
     const id = Math.floor((Math.random() * 100) + 1);
     setProfile([...profile, {...data, id: id}])
    }else {
      let newIndex = profile.findIndex(cd => cd.id === data.id)
      profile[newIndex] = data
      setProfile(profile)
    }

    }

  const onClickEditHandler = (abc) => {
    setData({...data,...abc})
   

  }
  
  const onClickDeleteHandler = (a) => {
    let newData = profile.filter(ab => ab.id != a)
    setProfile(newData)
  }
  
  return(

    <>
    <form>
      <h3>Registration Form</h3>
      <label>First Name: <input type='text' name='fname' value={data.fname} onChange={onChangeHandler} /></label><br/><br/>
      <label>Last Name: <input type='text' name='lname' value={data.lname} onChange={onChangeHandler} /></label><br/><br/>
      <label>Email: <input type='email' name='email' value={data.email} onChange={onChangeHandler}/></label><br/><br/>
      <label>Phone Number: <input type='tel' name='tel' value={data.tel} onChange={onChangeHandler}/></label><br/><br/>
      <label>Password: <input type='password' name='password' value={data.password} onChange={onChangeHandler}/></label><br/><br/>

      <Button type='submit' onClick={onClickHandler}>Submit</Button>
    </form> <br/><br/>

    <h3>Table Data</h3>
    <table>
    <thead>
        <th>ID</th>
        <th>First NAME</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Phone number</th>
        <th>Edit</th>
        <th>Delete</th>
    </thead>
      <tbody>
        { profile.map((a,index) => {
          return (
            <tr key={index}>
                <td>{a.id}</td>
                <td>{a.fname}</td>
                <td>{a.lname}</td>
                <td>{a.email}</td>
                <td>{a.tel}</td>
                <td><button onClick={()=> onClickEditHandler(a)} >Edit</button></td>
                <td><button onClick={()=> onClickDeleteHandler(a.id)}>Delete</button></td>
            </tr>
                      )
                    }
                    )}
         
      </tbody>
    </table>

    </>
  );
}

export default InputwithTable