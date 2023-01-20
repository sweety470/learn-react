import React from 'react'
import { useState } from 'react'

export const Form = () => {
    const [name,setName] = useState("")
    const [input,setInputs] = useState({});
    const [textArea,settextArea] = useState("kjkjkjkjkjkjk");
    const [dropDown,setDropdown] =useState("Volvo")

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        
        setInputs(values => ({...values, [name]: value}))
        console.log(setInputs,"Check input value")
      }

      // for text area
    const textChange = (event) =>{
        settextArea(event.target.value)
    }

    // for drop down list
    const dropDownList = (event) =>{
        setDropdown(event.target.value)
    }
    

    const handleSubmit = (event) =>{
        event.preventDefault();                         //preventDefault() prevents the default browser behavior for a given element.
        // console.log(`${name}`)
        // alert(`value which are are entering ${name}`)
        console.log(input,"inputs")
        alert(Object.entries(input))
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>Enter your name
        <input type="text" value = {name} onChange = {(e)=> setName(e.target.value)}/>
        </label><br /><br />
        
        <h3>Multiple inputs</h3>
        <label>Enter your name
            <input type = "text" name = "username" value = {input.username || ""}  onChange={handleChange}/>
        </label>
        <label>Enter your age 
            <input type = "number" name = "age" value = {input.age || ""}  onChange={handleChange}/>
        </label>
      

        <input type="submit" /><br /><br />

        {/* text area */}
        <h3>Text area</h3>
        <textarea value = {textArea} onChange={textChange}/>

        {/* Drop down list  */}
        <select value = {dropDown} onChange={dropDownList}>
            <option value = "Audi" >Audi</option>
            <option value="Farari" >Farari</option>
            <option value = "Scorpio" >Scorpio</option>
        </select>
      
        </form>
        </div>
  )
}
