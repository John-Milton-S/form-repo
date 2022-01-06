import React, {useState,useEffect} from "react"

const ApiTest = () => {

  const[data,setData] = useState('')
  useEffect(() => {
     getData()
  }, [])

  const getData = () => {
    let url = 'http://localhost:8000/';
    let options = {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            };
    
            fetch(url)
            .then(res => {
              console.log(res)
              return res.json()
            })
            .then(data => console.log('data', data))
            .catch(err => console.log(err))

  }

  return (
    <>
    </>
  );
}
export default ApiTest