import React, {useState} from "react";
import Button from 'react-bootstrap/Button';

const Form = () => {

  const[profile,setProfile] = useState({fname: '', lname: '', date: '', radio: '', email: '', tel: '', select: '', password: '', checkbox: false })
   
   
  const onChangeHandler = (e) => {
    const {name, value, type, checked} = e.target
    let val = (type === 'checkbox' ? checked : value)
    setProfile({...profile, [name]: val})
  }

  const onClickHandler = (e) => {
    e.preventDefault()
    console.log('profile', profile)
    
  }

  return (
    <form>
   
        <h1><u>Registration</u></h1> 
              
           <label>First Name: <input type='text' name= 'fname' onChange= {onChangeHandler} value= {profile.fname} /></label>
      
          
           <label>Last Name: <input type='text' name= 'lname' onChange= {onChangeHandler} value= {profile.lname} /></label>     
        

               
           <label>Date of Birth: <input type='date' name= 'date' onChange= {onChangeHandler} value= {profile.date}  /></label>
        
       
             
           <label>Gender: 
           <label>Male</label><input name= 'radio'  type= 'radio' onChange= {onChangeHandler}  value="Male"/>
           
           <label>Female</label><input name='radio' type='radio' onChange= {onChangeHandler} value="Female" />

           <label> Other </label><input name='radio' type='radio' onChange= {onChangeHandler}  value="Other"/>
           </label>
       
       
            
           <label>Email: <input type='email' name="email" onChange= {onChangeHandler}  value= {profile.email} /></label>     
     
      
          <label>Phone Number: <input type='tel' name="tel" onChange= {onChangeHandler} value= {profile.tel} /></label>        
       
       
       
           <label>Country:   <select name='select' onChange= {onChangeHandler} >
             <option value="Africa">Africa</option>
             <option value="USA">USA</option>
             <option value="China">China</option>
             <option value="India">India</option>
             <option value="Pakistan">Pakistan</option>
             <option value="Brazil">Brazil</option>
           </select> </label>       
          

                
           <label>Password<input type='password'  name='password' onChange= {onChangeHandler} value= {profile.password} /></label>       
       
        
               
           <label>I agree to the terms of conditions</label> <input type='checkbox' name='checkbox' checked = {profile.checkbox} onChange= {onChangeHandler} />        
        

          <div className="space">
           <Button  type="submit" onClick= {onClickHandler}  variant="primary" size="lg" active >Submit</Button>
          </div>
 

</form>

  );
}

export default Form