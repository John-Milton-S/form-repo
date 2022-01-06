import React, {useState} from "react";

const Click = () => {

  const[data,setData] = useState([])



  const onClickHandler = (id,color) => {
   
    setData([...data,{id:id,color:color} ])
    console.log(id,color)
   
  }
  

  return (

     <>
    {/* <span>Hi, this text color is: </span>
    <span>{data}</span>
     */}

     <table>
       <thead>
         <th>ID</th>
         <th>Name</th>
       </thead>
       <tbody>
        {data.map(obj => {return (
          <tr>
            <td>{obj.id}</td>
            <td>{obj.color}</td>
          </tr>
        )})} 
        
       </tbody>
     </table>

    <br/><br/><br/>
    <button onClick={()=>onClickHandler(1,'RED')}>RED</button>
    <button onClick={()=>onClickHandler(2,'BLUE')}>BLUE  </button>
    <button onClick={()=>onClickHandler(3,'GREEN')}>GREEN</button>
    <button onClick={()=>onClickHandler(4,'YELLOW')}>YELLOW</button>
    <button onClick={()=>onClickHandler(5,'ORANGE')}>ORANGE</button>
     </>

  );
}


export default Click