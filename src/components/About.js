import { useEffect, useState } from "react";



const About = () => {
  const [edit,setEdit] = useState([])

  const handleEdit =  ()=>{
    console.log("api call");
    setEdit("res")
  }
  useEffect(()=>{
    console.log("1st api");
},[edit])

  return (
    
    <div>
      <h4>Version 1.0.0</h4>
      <a href='/'>Go Back</a>
    </div>
  )
}

export default About
