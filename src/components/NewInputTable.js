import React, {useState} from "react";
import Button from 'react-bootstrap/Button';

const NewInputTable = () => {
  const initalValues = {id:'',fname:'',lname:'', select:'', email:'', tel:'', password:''}

  const [fdata,setFdata] = useState(initalValues)

  const[tdata,setTdata] = useState([])

  const onChangeHandler = (e) =>  {
    const{name,value} = e.target
    setFdata({...fdata,[name] : value})
  }

  const onClickHandler = (e) => { 
    e.preventDefault();
    if(fdata.id === '') {
      const id = Math.floor((Math.random() * 100) + 1);
      setTdata([...tdata,{...fdata,id:id}])
    }else {
      let newIndex = tdata.findIndex(ab => ab.id === fdata.id)
      tdata[newIndex] = fdata
      setTdata(tdata)
    }
    setFdata(initalValues)
  }

  const onEditHandler = (object) => {
    // const editedData = 
    setFdata({...fdata,...object})
   }

  const onDeleteHandler = (id) => {
   let newData = tdata.filter(ab => ab.id != id)
    setTdata(newData)
  }

  return (
    <>
    <form >
    <h1>Registration Form</h1>

      <div className="row">
        <div className="col-md-4">
        <label htmlFor="inputState" className="form-label">First Name:
          <input type="text" name= 'fname'  className="form-control" onChange={onChangeHandler} value={fdata.fname}  /></label>
        </div><br/>
        <div className="col-md-4">
        <label htmlFor="inputState" className="form-label">Last Name:
          <input type="text"  name= 'lname'   className="form-control" onChange={onChangeHandler} value={fdata.lname} /></label>
        </div>
      </div><br/>
      <div className="row">
      <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">Gender:
            <select name= 'select' defaultValue={fdata.select} id="inputState" className="form-select" onChange={onChangeHandler}>
              <option value= 'Select'>Select</option>
              <option value= 'Male'>Male</option>
              <option value= 'Female'>Female</option>
              <option value= 'Other'>Other</option>
            </select></label>
          </div>
      <div className="col-md-4">
      <label htmlFor="inputState" className="form-label">Email:
         <input type="email"  name= 'email'   className="form-control" onChange={onChangeHandler} value={fdata.email}  /></label>
      </div>
      </div><br/>
      <div className="row">
      <div className="col-md-4">
      <label htmlFor="inputState" className="form-label">Phone Number:
        <input type="tel"  name= 'tel'   className="form-control" onChange={onChangeHandler} value={fdata.tel}  /></label>
      </div><br/>
      <div className="col-md-4">
      <label htmlFor="inputState" className="form-label">Password:
         <input type="password"  name= 'password'   className="form-control" onChange={onChangeHandler} value={fdata.password}  /></label>
      </div>
      </div><br/>
      <Button onClick={onClickHandler}>Sign Up</Button>
      
    </form><br/><br/><br/>

    <h1>Table</h1>
  <table className="table table-bordered border-dark">  
  <thead className="table-dark">
    <tr>
      <th>ID</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Gender</th>
      <th>Email</th>
      <th>Phone No</th>
      <th>Password</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    {tdata.map((obj, index) => {
      return (
        <tr key={index}>
        <th>{obj.id}</th>
        <td>{obj.fname}</td>
        <td>{obj.lname}</td>
        <td>{obj.select}</td>
        <td>{obj.email}</td>
        <td>{obj.tel}</td>
        <td>{obj.password}</td>
        <td><Button onClick={()=>onEditHandler(obj)}>Edit</Button></td>
        <td><Button onClick={()=>onDeleteHandler(obj.id)}>Delete</Button></td>
      </tr>
      )
      })} 
  </tbody>
</table>
   </>
  );
}

export default NewInputTable