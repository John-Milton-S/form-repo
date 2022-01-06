import React, {useState,useEffect} from "react";

const DataFetch = () => {

  const [profile,setProfile] = useState([])
  useEffect (() => {
    getData()

 }, [])
 const getData = () => {
  
let url = 'http://jsonplaceholder.typicode.com/posts';
let options = {
            method: 'GET',
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json;charset=UTF-8'
            // }
        };

        fetch(url, options)
        .then(res => res.json())
        .then(data => setProfile(data))

        console.log('Data', profile)

      

 }


  return (
    <>
    <table>
      <thead>
        <th>UserId</th>
        <th>ID</th>
        <th>Title</th>
        <th>Body</th>
      </thead>
      <tbody>
        {profile.map(obj => {return (
          <tr>
            <td>{obj.userId}</td>
            <td>{obj.id}</td>
            <td>{obj.title}</td>
            <td>{obj.body}</td>
          </tr>
        )})}

      </tbody>
    </table>
    
    </>
  );
}
export default DataFetch