import React, {useState, useEffect} from "react";

const Bootform = () => {

  const[profile,setProfile] = useState({fname:'', lname: '', radio: '', email: '', pass: '', add1: '', add2: '', city: '', select: '', zip: '', checkbox: false })


  // useEffect(()=> {
  //   alert('Hi, you just changed your First Name')
  // },[profile.fname])

  // useEffect(()=> {
  //   document.addEventListener('click', showAlert)
       
  //    },[])


   const onChangeHandler = (e) => {
        const {name,value,type,checked} = e.target
        let val = (type === 'checkbox' ? checked : value)
        setProfile({...profile, [name]: val})
   }

   const onClickHandler = (e) => {
     e.preventDefault()
     console.log('profile', profile)
   }

   const showAlert = () => {
    alert('Hi, You have filled all yoyr details')
  }


  return (
   <>
      
<form className="row g-3">        
    <div className="container-sm">
    <div className="container-md">
    <div className="container-lg">
    <div className="container-xl">
    <div className="container-xxl">

     <h1>Registration Form</h1>

        <div className="row">
          <div className="col">
            <input type="text" name= 'fname' onChange={onChangeHandler} value= {profile.fname} className="form-control" placeholder="First name" aria-label="First name" />
          </div>
          <div className="col">
            <input type="text"  name= 'lname'onChange={onChangeHandler} value={profile.lname}   className="form-control" placeholder="Last name" aria-label="Last name" />
          </div>
        </div>


            <legend className="col-form-label col-sm-2 pt-0">Gender:</legend>
            <div className="col-sm-10">
              <div className="form-check">
                <input className="form-check-input" type="radio"  name= 'radio' onChange={onChangeHandler}  id="gridRadios1" value="Male" checked />
                <label className="form-check-label" for="gridRadios1" >
                  Male
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio"  name= 'radio' onChange={onChangeHandler}   id="gridRadios2" value="Female" />
                <label className="form-check-label" for="gridRadios2" >
                  Female
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio"  name= 'radio' onChange={onChangeHandler}  id="gridRadios2" value="Others" />
                <label className="form-check-label" for="gridRadios2" >
                  Others
                </label>
              </div>

              <div className="col-md-6">
            <label for="inputEmail4" className="form-label">Email</label>
            <input type="email"  name= 'email' onChange={onChangeHandler} value= {profile.mail}  className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">Password</label>
            <input type="password"  name= 'pass' onChange={onChangeHandler} value= {profile.pass}  className="form-control" id="inputPassword4" />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">Address</label>
            <input type="text" name= 'add1'  onChange={onChangeHandler} value= {profile.add1}   className="form-control" id="inputAddress" placeholder="1234 Main St" />
          </div>
          <div className="col-12">
            <label for="inputAddress2" class="form-label">Address 2</label>
            <input type="text" name= 'add2' onChange={onChangeHandler} value= {profile.add2}   className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
          </div>
          <div className="col-md-6">
            <label for="inputCity" class="form-label">City</label>
            <input type="text" name= 'city' onChange={onChangeHandler} value= {profile.city}  className="form-control" id="inputCity" />
          </div>
          <div className="col-md-4">
            <label for="inputState" class="form-label">State</label>
            <select name= 'select' onChange={onChangeHandler}  id="inputState" class="form-select">
              <option value= 'Tamilnadu'>Tamilnadu</option>
              <option value= 'Karnataka'>Karnataka</option>
              <option value= 'Kerala'>Kerala</option>
              <option value= 'UP'>UP</option>
              <option value= 'Delhi'>Delhi</option>
              <option value= 'Maharastra'>Maharastra</option>
            </select>
          </div>
          <div className="col-md-2">
            <label for="inputZip" class="form-label">Zip</label>
            <input type="number" name= 'zip' onChange={onChangeHandler} value= {profile.zip}   className="form-control" id="inputZip" />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input onChange={onChangeHandler} checked={profile.checkbox}  className="form-check-input" type="checkbox" name= 'checkbox' id="gridCheck" />
              <label className="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div className="col-12">
            <button onClick= {onClickHandler} type="submit" className="btn btn-primary">Sign in</button>
          </div>


    </div>
   </div>
  </div>
</div>
</div>
</div> 
</form>

   </>

  );
}

export default Bootform